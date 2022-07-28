let txtInput = document.getElementById("inputbox");

const add = () => {
    let userInput = txtInput.value;
    if(userInput == '')
    {
        document.getElementById('error').style.display = 'block'
    }
    else {
        document.getElementById('error').style.display = 'none'
        document.getElementById('head').innerHTML = userInput
        console.log(userInput);
       
    }

};

document.getElementById("addbtn").addEventListener("click", add);

const inputData = (e) => {
  if (e.keyCode === 13) {
    add();
  }
};

document.getElementById("inputbox").addEventListener("keyup", inputData);
