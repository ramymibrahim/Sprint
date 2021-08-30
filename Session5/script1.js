"use strict";
function addUser(username, password = "123") {
  return { username: username, password: password };
}

function editUser(user) {
  user.username = user.username + "123";
}

let user = addUser("Ahmed", "P@ssw0rd");
console.log(user);
editUser(user);
console.log(user);
/////// High order function
////// Accept function as parameter or return function

// document.querySelector('#clickBtn')
// .addEventListener('click',function(){
//     alert('clicked');
// })
function getTaxValue() {
  return 1000;
}

function calculateTaxEgypt(taxValue) {
  return taxValue * 0.1;
}
function calculateTaxUK(taxValue) {
  return taxValue * 0.4;
}

function displayTax(calculateTax) {
  console.log(this);
  let taxValue = this.value;
  let newTaxValue = taxValue + calculateTax(taxValue);
  console.log(newTaxValue);
}

// let obj = {
//   value: 1000,
// };

// let obj2 = {
//   value: 2000,
// };

// // displayTax.call(obj, calculateTaxEgypt);
// // displayTax.call(obj2, calculateTaxUK);
// let displayTax1 = displayTax.bind(obj);

// displayTax1(calculateTaxEgypt);
// displayTax1(calculateTaxUK);

//IIFE
const balanceModule = (function () {
  let name = "Ahmed";
  let balance = 0;
  let addAmount = function (amount) {
    balance += amount;
    console.log(balance);
  };
  return { addAmount, name };
})();

// let timer1 = setTimeout(function(name){
//     alert(name);
// },3000,'Ahmed');

// clearTimeout(timer1);

let counter = 5;
let timer = setInterval(function () {
  console.log(counter--);
  if (counter == 0) {
    clearInterval(timer);
    alert("Time out");
  }
}, 1000);