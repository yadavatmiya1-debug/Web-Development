let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
});

let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});


let h5 = document.querySelector("h5");
h5.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
});


let p = document.querySelector("p");
p.addEventListener("click", function () {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
});