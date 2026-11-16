// const square = (n) => {
//     console.log(n*n);
// }

// Q2
let id = setInterval  (() => {
    console.log("Helow pw");
}, 2000);
console.log(id);

setTimeout (() => {
    clearInterval(id);
    console.log("clear interval");
}, 10000);