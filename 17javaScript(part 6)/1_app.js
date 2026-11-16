function hello() {
    console.log("hell pw");
}
hello(); // fun calling


function printName() {
    console.log("Apna college");
}
printName(); 

// print 1 to 5
function num() {
    for(let i=1; i<=5;i++){
        console.log(i);
    }
}

num();


// create a func that print poem

function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("how i wonder are you are");
}
printPoem();


// // create c func to roll a dice & always display the value 1 to 6
// let random = Math.floor(Math.random() * 6) + 1;
// console.log(random);

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

// function with arguments
function printInfo(name, age) {
    console.log(`${name} age is ${age}.`);
}

printInfo("Sakshi", 20);  
printInfo("mahi", 20);

// average of 3 number
function sum(a,b,c) {
    console.log("Average:",(a+b+c) / 3);
}
sum(1,4,8); 


// print table 
function printTable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
printTable(8);