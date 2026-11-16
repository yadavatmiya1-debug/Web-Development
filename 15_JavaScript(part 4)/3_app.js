// // break keyword 
// let i = 1;
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["Mango", "Banana", "Apple", "Litchi", "Orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }


// // Nested arrays
// let heroes = [ ["South", "Bollywood", "Tamil"], ["Marvel", "Captain", "Iron man"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i]);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]},`)
//     }
// }


// // for of loops
// let fruits = ["Mango", "Banana", "Apple", "Litchi", "Orange"];
// for (i of fruits) {
//     console.log(i);
// }


// for (char of "apna college"){
//     console.log(char);
// }


// nested for of loops
let heroes = [ ["South", "Bollywood", "Tamil"], ["Marvel", "Captain", "Iron man"]];

for(list of heroes) {
    for(name of list){
        console.log(name);
    }
}