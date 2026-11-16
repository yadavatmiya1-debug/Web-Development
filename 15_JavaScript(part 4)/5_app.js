// Q1
// let arr = [1,2,3,4,5,6,2,3];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]== 2) {
//         continue;
        
//     }
//     console.log(arr[i]); 
// }


// // Q2
// let number = 287152;
// let count = 0;
// let copy = number;

// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);


// //Q3
// let number = 287152;
// let sum = 0;

// while(number > 0) {
//     let ans = number % 10;
//     sum+= ans;
//     number = Math.floor(number/10);
// }
// console.log(sum);


// // Q4
// let a;
// a = prompt("Enter a number: ");

// let fact = 1;
// for(let i=1; i<=a; i++) {
//     fact *= i;
// }
// console.log(fact);


// Q5
let nums = [21, 65, 66, 646, 89];
let lar = nums[0];
for(let i=1; i<nums.length; i++) {
    if(nums[i] > lar){
        lar = nums[i];
    }
    else {
        console.log(lar);
    }
}