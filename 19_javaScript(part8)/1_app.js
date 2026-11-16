// // forEach 
// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);



// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(el) {
//     console.log(el);
// });



// let arr = [{
//         name: "aman",
//         marks: 98,
//         },
//     {
//         name: "happy",
//         marks: 90,
//     },
//     {
//         name: "harry",
//         marks: 97.56,
//     }
    
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });




// // Map
// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * el; // [1, 4, 9, 16]
// });



// let students = [{
//         name: "aman",
//         marks: 98,
//         },
//     {
//         name: "happy",
//         marks: 90,
//     },
//     {
//         name: "harry",
//         marks: 97.56,
//     }
    
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// })



// Filter

// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let ans = nums.filter((el) => {
//     return el % 2 == 0; // even 
// });



// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let ans = nums.filter((el) => {
//     return !(el % 2 == 0); // odd
// });


// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let ans = nums.filter((el) => {
//     return el < 7 ;
// });



// Every
// [1, 2, 3, 4].every ((el) => (el%2 == 0)) // true

// [1, 2, 3, 4, 5].every ((el) => (el%2 == 0)) // false


// some 
// [1, 2, 3, 4].some((el) => (el%2==0)); // true
// [1, 3].some((el) => (el % 2 == 0));  // false 



// // Reduce 
// let nums = [1, 2, 3, 4];

// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalval);


// max of array
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

// Min of array
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let min = 10;

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(min);



// default parameter 

function sum(a, b = 2) {
    return a + b;

}