let myForm = document.getElementById("myForm");
let data = document.getElementById("inputbox");
let myList = document.getElementById("mylist");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  add(data.value);
});

const add = (inputdata) => {
  if (inputdata == " ") {
    document.getElementById("error").style.display = "block";
  } else {
    let temp = `<li class='list' id='list'><input type='checkbox' id='chkbox' class='chkbox' onclick='check(this)'>${inputdata}<img src="delete.png" alt="" class='imgdel' onclick="del(this)"  tooltip='Delete this item'></li>`;
    myList.insertAdjacentHTML("beforebegin", temp);
    data.value = "";
    data.focus();
  }
};

const del = (de) => {
  de.parentElement.remove();
};

const check = (e) => {
  if (e.this.checked) {
    document.getElementById("list").style.textDecoration = "line-through";
  } else document.getElementById("list").style.textDecoration = "";
};
