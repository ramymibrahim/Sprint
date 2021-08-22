"use strict";
/*
Create a simple page with a script that does the following:
1.	Ask the user for his/her name using prompt function, The user must provide a name (no empty strings)
2.	If the user did not type a name, the script should repeat asking for his/her name until a valid string is entered
3.	Ask for a password (123) to continue using prompt function, if the user type the password 3 times incorrectly an alert should appear that “you’ve entered wrong password 3 times”
4.	If the user entered (123) then the script should continue
5.	Ask for the birth month for user, check the month is a number and a correct month; if the user entered an incorrect month repeat till a valid month is entered
6.	Ask for the birth day (day only e.g. 30), check the day is a number and a correct day; if the user entered an incorrect day repeat till a valid day is entered
7.	Display an alert for the user with the correct horoscope
SRP
*/

const getName = function () {
  let name = prompt("Please type your name");
  debugger;
  while (!validateName(name)) {
    name = prompt("Please type your name");
  }
  return name;
};

const getPassword = function () {
  let password = prompt("Please enter you password");
  let i = 0;
  while (!validatePassword(password)) {
    if (i == 2) {
      alert("You've entered a wrong password");
      return null;
    }
    password = prompt("Please enter you password");
    i++;
  }
  return password;
};

const getMonth = function () {
  let month = prompt("Please type your birth month");
  while (!validateMonth(month)) {
    month = prompt("Please type your birth month");
  }
  return month;
};

const getDay = function (month) {
  let day = prompt("Please type your birth day");
  while (!validateDay(day, month)) {
    day = prompt("Please type your birth day");
  }
  return day;
};

const validateName = function (name) {
  return !(name === "");
};

const validatePassword = function (password) {
  return password === "123";
};

const validateMonth = function (month) {
  return Number(month) >= 1 && Number(month) <= 12;
};

const validateDay = function (day, month) {
  const DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= DAYS_IN_MONTHS[month - 1] && day >= 1;
};

const getHoroscope = function (day, month) {
  return "Gemini";
};

let name = getName();
if (name != null) {
  let password = getPassword();
  if (password != null) {
    let month = getMonth();
    let day = getDay(month);
    alert(`Your horoscope is ${getHoroscope(day, month)}`);
  }
}
//O(1)
