// Slider part and Theme change 

let calculator = document.querySelector("#calculator");
let slider = document.querySelector("#slider");
let circle = document.querySelector("#circle");
let num = document.querySelector("#num");
let h3 = document.querySelector("h3");
let theme = document.querySelector(".theme");
let panelValue = document.querySelector('#panelValue');
let keys = document.querySelector("#keys");
let button = document.querySelectorAll("button");
let del = document.querySelectorAll(".del");
let equal = document.querySelector(".equal");
let currentCircle = 5;

console.log(panelValue);


slider.addEventListener("click", () => { // Theme 2
  if (currentCircle === 5) {
    circle.style.left = "18px";
    circle.style.backgroundColor = "hsl(25, 98%, 40%)";
    calculator.style.backgroundColor = "hsl(0, 0%, 90%)"; 
    slider.style.backgroundColor = "hsl(0, 5%, 81%)";
    num.style.color = "hsl(60, 10%, 19%)";
    h3.style.color = "hsl(60, 10%, 19%)";
    theme.style.color = "hsl(60, 10%, 19%)";
    panelValue.style.color = "hsl(60, 10%, 19%)";
    panelValue.style.backgroundColor = "hsl(0, 0%, 93%)";
    keys.style.backgroundColor = "hsl(0, 5%, 81%)";
    button.forEach((btn) => {
      btn.style.backgroundColor = "hsl(45, 7%, 89%)";
      btn.style.borderBottom = "3px solid hsl(35, 11%, 61%)";
      btn.style.color = "hsl(60, 10%, 19%)";
    });
    del.forEach((delBtn) => {
      delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
      delBtn.style.borderBottom = "3px solid hsl(185, 58%, 25%)";
      delBtn.style.color = "hsl(0, 0%, 100%)";
    });
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.borderBottom = "3px solid hsl(25, 99%, 27%)";
    equal.style.color = "hsl(0, 0%, 100%)";
    currentCircle = 18;
  } else if (currentCircle === 18) { // Theme 3
    circle.style.left = "33px";
    circle.style.backgroundColor = "hsl(176, 100%, 44%)";
    calculator.style.backgroundColor = "hsl(268, 75%, 9%)"; 
    slider.style.backgroundColor = "hsl(268, 71%, 12%)";
    num.style.color = "hsl(52, 100%, 62%)";
    h3.style.color = "hsl(52, 100%, 62%)";
    theme.style.color = "hsl(52, 100%, 62%)";
    panelValue.style.color = "hsl(52, 100%, 62%)";
    panelValue.style.backgroundColor = "hsl(268, 71%, 12%)";
    keys.style.backgroundColor = "hsl(268, 71%, 12%)";
    button.forEach((btn) => {
      btn.style.backgroundColor = "hsl(268, 47%, 21%)";
      btn.style.borderBottom = "3px solid hsl(290, 70%, 36%)";
      btn.style.color = "hsl(52, 100%, 62%)";
    });
    del.forEach((delBtn) => {
      delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
      delBtn.style.borderBottom = "3px solid hsl(285, 91%, 52%)";
      delBtn.style.color = "hsl(0, 0%, 100%)";
    });
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.borderBottom = "3px solid hsl(177, 92%, 70%)";
    equal.style.color = "hsl(198, 20%, 13%)";
    currentCircle = 33;
  } else if (currentCircle === 33) { // Theme 1
    circle.style.left = "5px";
    circle.style.backgroundColor = "hsl(6, 63%, 50%)";
    calculator.style.backgroundColor = "hsl(222, 26%, 31%)"; 
    slider.style.backgroundColor = "hsl(223, 31%, 20%)";
    num.style.color = "hsl(0, 0%, 100%)";
    h3.style.color = "hsl(0, 0%, 100%)";
    theme.style.color = "hsl(0, 0%, 100%)";
    panelValue.style.color = "hsl(0, 0%, 100%)";
    panelValue.style.backgroundColor = "hsl(224, 36%, 15%)";
    keys.style.backgroundColor = "hsl(223, 31%, 20%)";
    button.forEach((btn) => {
      btn.style.backgroundColor = "hsl(30, 25%, 89%)";
      btn.style.borderBottom = "3px solid hsl(28, 16%, 65%)";
      btn.style.color = "hsl(221, 14%, 31%)";
    });
    del.forEach((delBtn) => {
      delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
      delBtn.style.borderBottom = "3px solid hsl(224, 28%, 35%)";
      delBtn.style.color = "hsl(0, 0%, 100%)";
    });
    equal.style.backgroundColor = "hsl(6, 63%, 50%)";
    equal.style.borderBottom = "3px solid hsl(6, 70%, 34%)";
    equal.style.color = 'hsl(0, 0%, 100%)'
    currentCircle = 5;
  }
});

// Slider part and Theme change Completed


// Calculations Part Started
const addNumber = (num) => {
  panelValue.value += num
}

const addOperator = (operator) => {
  panelValue.value += operator
}

const allClear = () => {
  panelValue.value = '';
}

const delLastNumber = () => {
  panelValue.value = panelValue.value.slice(0, -1);
}

const finalValue = () => {
  try {
    panelValue.value = eval(panelValue.value)
  } catch {
    panelValue.value = 'Error';
    panelValue.style.color = 'red';
  }
}

// Calculations Part Completed
