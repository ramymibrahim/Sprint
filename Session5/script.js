"use strict";
// function displayName(name, age = 60) {
//   // || , && => all false values (0,'',null, undefined, false)
//   // ?? null , undefined
//   // optional parameter (default value) undefined
//   name = name || "Guest";
//   console.log(age);
// }

// let x = { name: "Ramy", age: 32 };
// let y = {
//   name: "Mohamed",
//   age: 32,
//   job: "Computer engineer",
//   address: {
//     floorNo: 4,
//     street: "Street1",
//   },
// };

// function getFloorNo(x) {
//   if (x.address == undefined) return undefined;
//   return x.address.floorNo;
// }
// let names=["Mostafa","Ahmed","Mohamed1"];
// for (const [index,name] of names.entries()){
//     console.log(`${index} : ${name}`);
// }
// x=5;

let getUniqueNames = function (students) {
  let names = new Set();
  students.forEach((e) => {
    names.add(e.name.toLowerCase());
  });

  return names;
};

let getUniqueNameCount = function (studentsArray) {
  let namesMap = new Map();
  studentsArray.forEach((e) => {
    let k = e.name.toLowerCase();
    if (!namesMap.has(k)) namesMap.set(k, 1);
    else {
      namesMap.set(k, namesMap.get(k) + 1);
    }
  });
  return namesMap;
};

// O(n2), segma(n), theta(n)
//set, map
// let namesArray = Array.from(getUniqueNames(studentJSON).values());
// // studentJSON.filter(e => e.codeGrade <= 3);
// let mapper = (e) => {
//   return { name: e[0], tasksCount: e[1] };
// };
// let filter = (e) => e.tasksCount > 2;

// let studentMap = getUniqueNameCount(studentJSON);
// let studentArr = Array.from(studentMap.entries());
// let studentObjs = studentArr.map(mapper).filter(filter);

// console.log(studentObjs);
/*
[{
    name:'Omar',
    tasksCount:2
},
{
    name:'Mohamed',
    tasksCount:3
}]
// */
// function sum(numArr) {
//   //let numArr=[1,2,3,4];
//   let acc = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     acc += numArr[i];
//   }
//   return acc;
// }
let numArr = [1, 2, 3, 4];
// numArr.reduce((acc, e) => (acc > e ? e : acc), numArr[0]);
let string = "1,Mohamed,Computer Engineer,1,2,3";
console.log(string.replace(/1/g,"0"));
console.log(string.trim());
console.log(string.startsWith(" M"));
console.log(string.endsWith("1 "));

let splittedArray=string.split(',');
console.log(splittedArray);
console.log(splittedArray.join(';'));

console.log(string.indexOf("1",-2));
console.log(string.lastIndexOf("1"));