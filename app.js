"use strict";

const x = `<img src="./x.webp" height=" 150" alt="x-img">`;
const o = `<img src="./O.webp" height= "150" alt= "o">`;
const b1 = document.querySelector(".col-0-row-0");
const b2 = document.querySelector(".col-1-row-0");
const b3 = document.querySelector(".col-2-row-0");
const b4 = document.querySelector(".col-0-row-1");
const b5 = document.querySelector(".col-1-row-1");
const b6 = document.querySelector(".col-2-row-1");
const b7 = document.querySelector(".col-0-row-2");
const b8 = document.querySelector(".col-1-row-2");
const b9 = document.querySelector(".col-2-row-2");

let flag = 1;

b1.addEventListener("click", () => {
  if (flag == 1) {
    b1.innerHTML = x;
    flag = 0;
  } else {
    b1.innerHTML = o;
    flag = 1;
  }
  b1.style.pointerEvents = "none";
  winner();
});
// b2

b2.addEventListener("click", () => {
  if (flag == 1) {
    b2.innerHTML = x;
    flag = 0;
  } else {
    b2.innerHTML = o;
    flag = 1;
  }
  b2.style.pointerEvents = "none";
  winner();
});

b3.addEventListener("click", () => {
  if (flag == 1) {
    b3.innerHTML = x;
    flag = 0;
  } else {
    b3.innerHTML = o;
    flag = 1;
  }
  b3.style.pointerEvents = "none";
  winner();
});

b4.addEventListener("click", () => {
  if (flag == 1) {
    b4.innerHTML = x;
    flag = 0;
  } else {
    b4.innerHTML = o;
    flag = 1;
  }
  b4.style.pointerEvents = "none";
  winner();
});

b5.addEventListener("click", () => {
  if (flag == 1) {
    b5.innerHTML = x;
    flag = 0;
  } else {
    b5.innerHTML = o;
    flag = 1;
  }
  b5.style.pointerEvents = "none";
  winner();
});

b6.addEventListener("click", () => {
  if (flag == 1) {
    b6.innerHTML = x;
    flag = 0;
  } else {
    b6.innerHTML = o;
    flag = 1;
  }
  b6.style.pointerEvents = "none";
  winner();
});

b7.addEventListener("click", () => {
  if (flag == 1) {
    b7.innerHTML = x;
    flag = 0;
  } else {
    b7.innerHTML = o;
    flag = 1;
  }
  b7.style.pointerEvents = "none";
  winner();
});

b8.addEventListener("click", () => {
  if (flag == 1) {
    b8.innerHTML = x;
    flag = 0;
  } else {
    b8.innerHTML = o;
    flag = 1;
  }
  b8.style.pointerEvents = "none";
  winner();
});

b9.addEventListener("click", () => {
  if (flag == 1) {
    b9.innerHTML = x;
    flag = 0;
  } else {
    b9.innerHTML = o;
    b9.disabled = true;
    flag = 1;
  }
  b9.style.pointerEvents = "none";
  winner();
});
let disable = () =>{
    b1.style.pointerEvents = "none";
    b2.style.pointerEvents = "none";
    b3.style.pointerEvents = "none";
    b4.style.pointerEvents = "none";
    b5.style.pointerEvents = "none";
    b6.style.pointerEvents = "none";
    b7.style.pointerEvents = "none";
    b8.style.pointerEvents = "none";
    b9.style.pointerEvents = "none";
    document.querySelector("body").classList.add("bg");
}
function winner() {
  let val1 = document.querySelector(".col-0-row-0 img").getAttribute("src");
  let val2 = document.querySelector(".col-1-row-0 img").getAttribute("src");
  let val3 = document.querySelector(".col-2-row-0 img").getAttribute("src");
  let val4 = document.querySelector(".col-0-row-1 img").getAttribute("src");
  let val5 = document.querySelector(".col-1-row-1 img").getAttribute("src");
  let val6 = document.querySelector(".col-2-row-1 img").getAttribute("src");
  let val7 = document.querySelector(".col-0-row-2 img").getAttribute("src");
  let val8 = document.querySelector(".col-1-row-2 img").getAttribute("src");
  let val9 = document.querySelector(".col-2-row-2 img").getAttribute("src");
  if (val1 === val2 && val3 === "./x.webp" && val3 == val1) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val1 === val4 && val7 === "./x.webp" && val7 === val4) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val1 === val5 && val9 === "./x.webp" && val9 === val1) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val2 === val5 && val8 === "./x.webp" && val8 === val2) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val3 === val5 && val7 === "./x.webp" && val7 === val3) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val3 === val6 && val9 === "./x.webp" && val9 === val3) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val4 === val5 && val6 === "./x.webp" && val6 === val4) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val7 === val8 && val9 === "./x.webp" && val9 === val8) {
    document.querySelector("h1").textContent = "PLAYER 1 IS WINNER";
    disable();
  } else if (val1 === val2 && val3 === "./O.webp" && val3 == val1) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val1 === val4 && val7 === "./O.webp" && val7 === val4) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val1 === val5 && val9 === "./O.webp" && val9 === val1) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val2 === val5 && val8 === "./O.webp" && val8 === val2) {
      document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
      disable();
  } else if (val3 === val5 && val7 === "./O.webp" && val7 === val5) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val3 === val6 && val9 === "./O.webp" && val9 === val6) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val4 === val5 && val6 === "./O.webp" && val6 === val5) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if (val7 === val8 && val9 === "./O.webp" && val9 === val8) {
    document.querySelector("h1").textContent = "PLAYER 2 IS WINNER";
    disable();
  } else if ((val1 !== "") && (val2 !== "") && (val3 !== "" ) && (val4 !== "" ) && (val5 !== "" ) && (val6 !== "" ) && (val7 !== "" ) && (val8 !== "" ) && (val9 !== "" )) {
    document.querySelector("h1").textContent = "DRAW";
    
    }
   
    
  
  
}

