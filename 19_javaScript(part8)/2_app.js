// Spread = Expands an iterable into multiverse values 

let arr = [1, 2, 3, 4, 5];

let newArr = [...arr];

console.log(...newArr);


//
let char = [..."hellow"];
console.log(char);


//
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];

console.log(nums);

//
let data = {
    email: "ironman@gmail.com",
    password: "abcd" ,
};

let dataCopy = {...data, id:128, country: 'India'};
console.log(dataCopy);



// Rest (allow a func to take an indefinite no of arguments and bundle them in an array)
function sum(...args) {
    for(let i=0; i<args.length; i++) {
        console.log("you gave us : ", args[i]);
    }
}

console.log(sum(1));
console.log(sum(5,6,7));


function min(a, b, c, d) {
    console.log(arguments); 
}


// Destructuring(storing values of array into multiple variables)
// let name = ["tony", "bruce", "peter", "steave"];
// // let winner = name[0];
// // let runnerup = name[1];
// // let secondRunnerup = name[2];

// let [winner, runnerup, secondRunnerup] = name;
// console.log(winner);
// console.log(secondRunnerup);


let names = ["tony", "bruce", "peter", "steave", "abc", "ptv", "bixgX", "zzz"];
let [winner, runnerup, ...others] = names;
console.log(winner);
console.log(others);


// Destructuring objects
const student = {
    name : "karan",
    age : 14,
    class : 7,
    subjects : ["hindi", "english", "Math", "science"],
    username : "karan@123",
    password : "abcd",
};

let {username, password} = student;
console.log(username);
console.log(password);