// let btn = document.querySelector("button");

// btn.addEventListener("click", function (e){
//     console.log(e);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (e){
//     console.log(e);
//     console.log("button clicked");
// });


let inp = document.querySelector("input");

inp.addEventListener("keydown",function () {
    console.log("key was pressed");
});



inp.addEventListener("keyup",function () {
    console.log("key was released");
});