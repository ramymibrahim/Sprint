'use strict';
// /*
// Data Types and variable declaration
// Number,String,Boolean
// null, undefined
// object => reference types
// */
// //
// // Define Variables


// //const firstName="Ramy";
// const lastName = "Ibrahim";
// let firstName = "Ramy";

// const PI_VAL = 3.14;

// //Type Conversion
// // console.log(Number("2"))
// // console.log(String(2))
// // console.log(Boolean("Test"))
// // console.log(parseInt("2"))
// // console.log(parseFloat("2"))

// //Type Coercing
// //String +
// //Number any other math operators
// //Boolean
// //0,'',undefined,null,NaN, false
// // if(' '){
// //     console.log("True");
// // }
// // else{
// //     console.log("False");
// // }
// //Math Operatores
// let x = 1;
// let y = 2;

// let z = x + y;
// z = x - y;
// z = x * y;
// z = x / y;
// z = x ** y;
// z = x % y;
// //Assigment operatores
// x++;
// x += 5;
// y--;
// y -= 3; //y=y-3
// x *= 3;
// x /= 3; //x=x/3
// x = "2"
// y = 2
// //Logical Operators
// //not, and, or
// /*
// ||
// &&
// */
// let gender = "male";
// let age = 59;
// let canHasPension;

// if (age >= 60 || gender === "female") {
//     canHasPension = true;
// }
// else {
//     canHasPension = false;
// }
// console.log(canHasPension);

// canHasPension = (age >= 60 || gender === "female");
// console.log(canHasPension);
// /*
// Comparison operators
// ===
// !=
// !==
// ==
// >=
// >
// <=
// <
// */

// let age1 = 60;
// let age2 = 70;

// let avg = (age1 + age2) / 2;
// let gender_type = "2";//1 male,2 female
// switch (gender_type) {
//     case 1:
//     case "1":
//         console.log("You are male");
//         break;
//     case 2:
//     case "2":
//         console.log("You are female");
//         break;
//     default:
//         console.log("Please specify correct value");
//         break;
// }

// if (gender_type == 1) {
//     gender = "male";
// }
// else {
//     gender = "female";
// }

// gender = (gender_type == 1) ? "male" : "female";

// if (gender_type == 1)
//     gender = "male";
// else
//     gender = "female";

// console.log(gender);

// console.log(calcTax(10));

// function calcTax(income) {
//     return income * 0.1;
// }

// let calcTax1 = function (income) {
//     return income * 0.1;
// }

// // const calcTax2 = (income) => {
// //     return income * 0.1;
// // }

// const calcTax2 = income => income * 0.1;

// const isCorrectIdNo = function(idNo) {
//     if (idNo === "11111111111111")
//         return true;
//     return false;
// }
// console.log(calcTax(20));
// console.log(calcTax1(30));
// console.log(calcTax2(40));


// let names = ['Ramy', 'Ibrahim', 'Ahmed'];
// // console.log(names);

// let person = ['Ramy', 18, ["Shoubra", "20 Shoubra"]]
// // console.log(person);

// person = new Array('Ramy', 18, ["Shoubra", "20 Shoubra"]);
// // console.log(person);

// // console.log(person[1]);
// for (let i = 0; i < person.length; i++) {
//     console.log(person[i]);
// }

// let lucky_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(lucky_nums);

// // for (let i = 0; i < lucky_nums.length; i++) {
// //     if (lucky_nums[i] === 7 || lucky_nums[i]===8) {
// //         lucky_nums.splice(i, 1);
// //     }
// // }


// // for (let i = lucky_nums.length - 1; i >= 0; i--) {
// //     if (lucky_nums[i] === 7 || lucky_nums[i] === 8) {
// //         lucky_nums.splice(i, 1);
// //     }
// // }
// let i = 0;
// while (i < lucky_nums.length) {
//     if (lucky_nums[i] === 7 || lucky_nums[i] === 8) {
//         lucky_nums.splice(i, 1);
//     }
//     else{
//         i++;
//     }
// }

// console.log(lucky_nums);
// // console.log(person[person.length-1]);

let person = {
    firstName: 'Ramy',
    lastName: "Ibrahim",
    age: 18,
    address: {
        street: "st1",
        building_no: 20,
        floor_no: 4
    },
    displayName: function () {
        console.log(`
<p>Hi</p>
     <a> </a>   
        ${this.lastName}`)
        console.log(this.firstName + " \n " + this.lastName);
    }
}

let person2 = {
    firstName: 'Ramy1',
    lastName: "Ibrahim1",
    age: 18,
    address: {
        street: "st1",
        building_no: 20,
        floor_no: 4
    },
    displayName: person.displayName
}
//JSON

//O(1)
//O(n)
