// let btns = document.querySelectorAll("button");


// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("you entered a button");
//         console.log("apna hai");
//     };
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayHello() {
//     alert("Apna pw !");
// }

// btn.onclick = sayHello;



// Event listener 

let btns = document.querySelectorAll("button");


for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
  
}



function sayHello() {
    alert("Apna pw !");
}

function sayName() {
    alert("happy");
}

// btn.onclick = sayHello;