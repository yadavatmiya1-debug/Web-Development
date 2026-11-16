// if statement
console.log("before my if statement");
let age = 23;
if(age >= 18){
    console.log("you can vote");
    console.log("you can drive");
}
if(age < 18){
    console.log("you can not vote");
}
console.log("after my if statement");


let firstName = "atmiya yadav";
if(firstName == "atmiya yadav") {
    console.log(`Welcome ${firstName}`);
}


// else if statement
let marks = 65 ;
if(marks <= 33) {
    console.log("D");
}

else if(marks <= 40) {
    console.log("D");
}

else if(marks <= 50) {
    console.log("C");
}

else if(marks <= 70) {
    console.log("B");
}

else if(marks <= 90) {
    console.log("A");
}


// else statement
let a = 5;
let b = 2;

if(a == b ) {
    console.log("Both are same");
}

if(a > b){
    console.log("a is greater");
}


else {
    console.log("b is grater");
}


// nested if else statement
let mark = 45;

if(mark >=33) {
    console.log("Pass");

    if(mark >= 80) {
        console.log("Grade O");
    }
    else {
        console.log("Grade: A");
    }

}

else {
    console.log("Fail");
}
