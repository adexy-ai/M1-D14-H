//JS EXERCISES
// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe" -->
let x = "John";
let y = "Doe";
console.log(x, "<>", y);

//22) Create an object with properties such name, surname, email
//23) Delete the email property from the previously created object
//24) Create an array with 10 strings in it
let myArray = ["ade", "bayo", "jide", "fola", "kike", "shade", "william","fola", "tinubu", "wike"];

// count = 10
// function stringArray() {
//     for (i = 0; i < count; i++) {
//         myArray.push(count)
//     }
// }

//25) Print in the console every string from the previous array
console.log(myArray);
//stringArray();
//26) Create an array with 100 random numbers in it

let num = 100;
//function myFunction() {
let arrayOfNumber = [];
for (i = 0; i < num; i++) {
    arrayOfNumber.push(Math.floor(Math.random()* num))
}
    //return arrayOfNumber
//}
console.log(arrayOfNumber);

//27) Write a function to get the maximum and minimum values from the previously created array
function maxNum() {
    let object = {
        max: 0,
        min: 0,
    }
    for (i = 0; i < arrayOfNumber.length; i++) {
        if (arrayOfNumber[i] > object.max) {
            object.max = arrayOfNumber[i]
        }
        if (arrayOfNumber[i] < object.min) {
            object.min = arrayOfNumber[i]
        }
   } 
   return object
}

console.log(maxNum().max);
console.log(maxNum().min);
//28) Create an array of arrays, in which every array has 10 random numbers
let parentArray = [];
let childArray = [];
let childArray2 = [];
for (i = 0; i < 10; i++) {
    childArray.push(Math.floor(Math.random() * 10));
    childArray2.push(Math.floor(Math.random() * 10));
}
parentArray.push(childArray, childArray2);
console.log(parentArray);

//29) Create a function that gets 2 arrays as parameters and returns the longest one
let a = [2, 3, 4, 6];
let b = [1, 4, 5, 5, 7, 6];
function longestOfTwoArrays(a, b) {
    if (a.length < b.length) {
        return b;
    }
    else return a;
}
console.log(longestOfTwoArrays(a, b));
//30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values -->
function highestSum(a, b) {
    let sum = a.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    let sum2 = b.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    if (sum > sum2) {
        return a
        
    } else return b
}

console.log("the array with the higest", highestSum(a, b))