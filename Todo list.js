let myForm = document.getElementById("myForm");
let data = document.getElementById("inputbox");
let myList = document.getElementById("mylist");

console.log(data.value);
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  add(data.value);
});

const add = (inputdata) => {
  if (inputdata.length===0) {
    document.getElementById("error").style.display = "block";
    return
  } else {
    document.getElementById("error").style.display = "none";
    let temp = ` <li class="list" id="list"><input type='checkbox' id='chkbox' class='chkbox' onchange='check(this)'><label id='inputlabel'>${inputdata}</label><img src="delete.png" alt="" class='imgdel' onclick="del(this)"  tooltip='Delete this item'></li>`;
    myList.insertAdjacentHTML("beforebegin", temp);
    data.value = "";
    data.focus();
  }
};

const del = (de) => {
  de.parentElement.remove();
};

const check = (e) => {
  if (e.checked) {
     document.querySelector("li > label ").style.textDecoration = "line-through";
     document.getElementById("inputlabel").style.color = "#2B7A0B";
  } 
  else {
    document.querySelector("label").style.textDecoration = "none";
    document.getElementById("inputlabel").style.color = "";

    
  }
};

let li = document.querySelector('#mylist').child;
console.log(li)