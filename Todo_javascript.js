var array = [];
var result_array = [];
var mon_array = [];
var tue_array = [];
var wed_array = [];
var thu_array = [];
var fri_array = [];
var temp;
var this_box;
var mon = document.getElementById("id_mon");
var tue = document.getElementById("id_tue");
var wed = document.getElementById("id_wed");
var thu = document.getElementById("id_thu");
var fri = document.getElementById("id_fri");

var arrayCount = 0;
var result_day;

function key_check(value){
  switch(value) {
      case "mon":
          result_day = mon;
          break;
      case "tue":
          result_day = tue;
          break;
      case "wed":
          result_day = wed;
          break;
      case "thu":
          result_day = thu;
          break;
      case "fri":
          result_day = fri;
          break;
  }
  return result_day;
}

function keypress_event(){
  var find_value = document.getElementById("Input_keyword");
  var find_day = document.getElementById("day");

  if(window.event.keyCode == 13){
    for(var i = 0; i<5; i++){
        if(i == 0) result_day = mon;
        else if(i == 1) result_day = tue;
        else if(i == 2) result_day = wed;
        else if(i == 3) result_day = thu;
        else result_day = fri;
      for(var j = 0; j < result_day.childNodes.length; j++){
        result_day.childNodes[j].style.display = "none";
      }
    }

    if(!(find_value.value)){
        show_all(find_day);
    }else{
      if(find_day.value == "all"){
        show_all_want(find_value);
      }else{
        show_want(find_value,find_day);
      }
    }
  }
}
function show_all_want(find_value){
  for(var i = 0; i<5; i++){
      if(i == 0)
        result_day = mon;
      else if(i == 1)
        result_day = tue;
      else if(i == 2)
        result_day = wed;
      else if(i == 3)
        result_day = thu;
      else
        result_day = fri;
    for(var j = 0; j < result_day.childNodes.length; j++){
      console.log(result_day);
      if((result_day.childNodes[j].id.indexOf(find_value.value)) != -1){
          result_day.childNodes[j].style.display = "block";
      }
    }

}
}
function show_all(find_day){
  if(find_day.value == "all"){
    for(var i = 0; i<5; i++){
        if(i == 0) result_day = mon;
        else if(i == 1) result_day = tue;
        else if(i == 2) result_day = wed;
        else if(i == 3) result_day = thu;
        else result_day = fri;
      for(var j = 0; j < result_day.childNodes.length; j++){
        result_day.childNodes[j].style.display = "block";
      }
    }
  }else{
    result_day = key_check(find_day.value);
    for(var j = 0; j < result_day.childNodes.length; j++){
      result_day.childNodes[j].style.display = "block";
    }
  }
}

function show_want(find_value,find_day){
  result_day = key_check(find_day.value);
  for (var i=0; i<result_day.childNodes.length; i++) {
        if((result_day.childNodes[i].id.indexOf(find_value.value)) != -1){
            result_day.childNodes[i].style.display = "block";
        }
  }

}
function add_todo_button(){
  var modal = document.getElementById('Add_Section');
  modal.style.display ="block";
}

function close_todo_button(){
  var modal = document.getElementById('Add_Section');
  modal.style.display="none";
}
function close_Motivate_button(){
  var modal_m = document.getElementById('Add_Section_2');
  modal_m.style.display="none";
}

 function motivating(event){
    this_box = event.target;
    var edit_modal = document.getElementById("Add_Section_2");
    var option_day = document.getElementById("Motivate_AddMyDay");
    var option_text = document.getElementById("Motivate_text");
    var option_textarea = document.getElementById("Motivate_content");
    var option_priority = document.getElementById("Motivate_priority");
    var done_button = document.getElementById("motivate_button");
    var Priority
    var text = this_box.firstChild; //박스에 보이는 입력된 텍스트 값
    var selected_day = this_box.parentNode.id.replace("id_",""); // 선택한 box의 요일 (mon,tue...)

    console.log(event.target);

 var parentOfThisBox = this_box.parentElement;
    for(i=0; i < parentOfThisBox.childNodes.length; i++) {
        parentOfThisBox.childNodes[i].index = i;
        option_priority.value = event.target.index;
}
    option_day.value = selected_day; // 수정 창 요일 옵션 초기 값
    option_text.value = text.textContent; // 수정 창 input field 초기 값

    result_array = array_check(selected_day);
    result_array.forEach(function(value,index){
      if(index == event.target.index){
        option_textarea.value = value.contents;
    }
  });

    temp = {
      days : option_day.value,
      item_name  : option_text.value,
      contents : option_textarea.value,
      id : option_text.value
    }

    if(!(this_box.id === "DeleteContainer")){
          edit_modal.style.display = "block";
    }
    console.log(array);
    console.log(result_array);
}


function array_check(arr){
  switch(arr) {
    case "mon":
        result_array = mon_array;
        break;
    case "tue":
        result_array = tue_array;
        break;
    case "wed":
        result_array = wed_array;
        break;
    case "thu":
        result_array = thu_array;
        break;
    case "fri":
        result_array = fri_array;
        break;
  }
  return result_array;
}

  function motivate_done_button(){
      var edit_modal = document.getElementById("Add_Section_2");
      var option_day = document.getElementById("Motivate_AddMyDay");
      var option_text = document.getElementById("Motivate_text");
      var option_textarea = document.getElementById("Motivate_content");
      var option_priority = document.getElementById("Motivate_priority");
      var done_button = document.getElementById("motivate_button");
      var selected_day = this_box.parentNode.id.replace("id_","");

      result_array= array_check(selected_day);
      arrayCount = option_priority.value;

      var input ={
        days : option_day.value,
        item_name  : option_text.value,
        contents : option_textarea.value,
        id : option_text.value
      }

      if(!(Object.is(input,temp))){
        array.forEach(function(value,index){
          if(value.item_name == temp.item_name){
              console.log("delete array");
                array.splice(index,1);
          }
        });
        result_array.forEach(function(value,index){
            if(value.item_name == temp.item_name){
              console.log("delete result array");
                result_array.splice(index,1);
            }
          });
      }
        console.log(result_array);
        console.log(array);
        this_box.parentNode.removeChild(this_box);
        AddParent(option_day,option_text,option_textarea,input);
        edit_modal.style.display="none";
    }

  function done_button(){
    var modal = document.getElementById('Add_Section');
    var day = document.getElementById('AddMyDay');
    var name = document.getElementById('Input_day');
    var add_content = document.getElementById('Input_content');


    var input = {
      days : day.value,
      item_name  : name.value,
      contents : add_content.value,
      id : name.value
    };
    Add_First(day,name,add_content,input);
    modal.style.display="none";
  }


  function AddParent(day,name,add_content,input){
      array.push(input);
      console.log(day.value);
      var newIndex = arrayCount;

      result_array = array_check(day.value);
      result_array.splice(newIndex,0,input);
      result_day = key_check(day.value);

      var newDiv = AddContainer(name.value,day,add_content,input);
      result_day.insertBefore(newDiv,result_day.childNodes[newIndex]);

      console.log(result_day);
}

function Add_First(day,name,add_content,input){
    array.push(input);

    result_array = array_check(day.value);
    result_array.push(input);
    result_day = key_check(day.value);

    var newDiv = AddContainer(name.value,day,add_content,input);
    result_day.appendChild(newDiv);
    console.log(array);
    console.log(result_array);
  //console.log(result_day.childNodes[arrayCount]);
}

function AddContainer(text,day,add_content,input,priority){
  var newTextNode = document.createTextNode(text);
  var newImg = document.createElement('img');
  newDiv = document.createElement('div');

    switch(day.value) {
      case "mon":
          newDiv.className="first";
          break;
      case "tue":
          newDiv.className="second";
          break;
      case "wed":
          newDiv.className="third";
          break;
      case "thu":
          newDiv.className="fourth";
          break;
      case "fri":
          newDiv.className="fifth";
          break;
    }

  newDiv.id = input.item_name;
  newDiv.style.border = "1px solid black";
  newDiv.style.height = "90px";
  newDiv.style.width ="135px";
  newDiv.style.position="relative";

  newImg.src="img/delete.png";
  newImg.id="DeleteContainer";
  newImg.style.position ="absolute";
  newImg.style.marginLeft ="25px";

  newDiv.appendChild(newTextNode);
  newDiv.appendChild(newImg);
  //newDiv.addEventListener("click",motivating(event));
  newDiv.setAttribute("onclick", "motivating(event,newDiv)");
  newImg.setAttribute("onclick", "DeleteContainer(event)");
  return newDiv;
}

function DeleteContainer(event){
  var delete_box = event.target;
  console.log(delete_box);
  var text = delete_box.parentNode.firstChild; //박스에 보이는 입력된 텍스트 값
  var selected_day = delete_box.parentNode.className // 선택한 box의 요일 (mon,tue...)

  result_array= array_check(selected_day);

  array.forEach(function(value,index){
     if(value.item_name == text.textContent){
       array.splice(index,1);
     }
   });

   var parentOfThisBox = delete_box.parentNode.parentNode;
   var find_index;
   console.log(parentOfThisBox);
   for(i=0; i < parentOfThisBox.childNodes.length; i++){
     console.log("edd");
          if( delete_box.parentNode == parentOfThisBox.childNodes[i]){
              find_index = i;
          }
    }
  result_array.splice(find_index,1);
  delete_box.parentNode.parentNode.removeChild(delete_box.parentNode);
  console.log(array);
  console.log(result_array);
  event.stopPropagation();
}
