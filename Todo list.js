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
    let temp = `<li class='list' id='list'><input type='checkbox' id='chkbox' class='chkbox' onchange='check(this)'>${inputdata}<img src="delete.png" alt="" class='imgdel' onclick="del(this)"  tooltip='Delete this item'></li>`;
    myList.insertAdjacentHTML("beforebegin", temp);
    data.value = "";
    data.focus();
  }
};

const del = (de) => {
  de.parentElement.remove();
};

// const check = (e) => {
//   if (e.this.checked) {
//     document.getElementById("list").style.textDecoration = "line-through";
//   } else document.getElementById("list").style.textDecoration = "";
// };

let li = document.querySelector('#mylist').child;
console.log(li)