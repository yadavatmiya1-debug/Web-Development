let sum = 65; // Global scope 
function calSum(a, b) {
    let sum = a + b; // Function scope
    console.log(sum);
}
calSum(4,5);
console.log(sum);


// // block scope
// {
//     let a = 6;
// }
// console.log(a);


// lexical scope
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}
console.log(outerFunc());


// Function expression
let name = "shradha";
let x = 5;

let mum = function(a, b) {
    return a + b;
}
console.log(mum(2,5));
console.log(x);

// Higher order function 
function multipleGreet(func, count) {
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hellow");
}

multipleGreet(greet, 4);



// let odd = function(n) {
//     console.log(!(n%2 == 0));
// }


// let even = function(n) {
//     console.log(n%2 == 0);
// }

function oddorEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    }
    else {
        console.log("wrong request");
    }
}

let request = "odd";



//  Methods
const calculator = {
    num : 55,
    add: function(a, b) {
        return a+b;
    },

    sub: function(a, b) {
        return a-b;
    },

    mul: function(a, b) {
        return a*b;
    }
};

