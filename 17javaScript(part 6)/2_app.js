function sum(a, b) {
    return a + b;
}
console.log(sum(3,4));

//
function sum(a, b) {
    return a + b;
}
let s = sum(3,4);
console.log(s);


//
function sum(a, b) {
    return a + b;
}
console.log(sum(sum(3,4),5));


// create a func that returns the sum of num from 1 to n
function printSum(n) {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum +=i;
    }
    return sum;
}
console.log(printSum(5));


// crete a fun that concat the string
let str = ["hii", "hellow", "bye", "!"];

function conCat(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        result +=str[i];
    }

    return result;
}
console.log(conCat(str));