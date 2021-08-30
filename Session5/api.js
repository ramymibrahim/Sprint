"use strict";

let fillGovernorateSelect = function () {
  let govArr = JSON.parse(this.responseText);
  govArr.forEach((gov) => {
    let select = document.querySelector("#governorates");
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${gov.id}">${gov.name}</option>`
    );
  });
};

// let getGovernorates = function () {
//   const request = new XMLHttpRequest();
//   request.open("GET", "https://localhost:44389/api/Governorate");
//   request.send();
//   request.addEventListener("load", fillGovernorateSelect);
// };

let fillSelect = function (data) {
  data.forEach((gov) => {
    let select = document.querySelector("#governorates");
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${gov.id}">${gov.name}</option>`
    );
  });
};
// let getGovernorates = function () {
//   let button = document.querySelector("#getGovernoratesBtn");
//   const request = fetch("https://localhost:44389/api/Governorate");
//   request
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       fillSelect(data);
//     })
//     .catch(function (err) {
//       console.log("Server may be down");
//     })
//     .finally(function () {
//       button.removeAttribute("disabled");
//     });
//   button.setAttribute("disabled", "disabled");
// };

let fillMarkazSelect = function (data) {
  let select = document.querySelector("#markazes");
  select.innerHTML = "";
  data.forEach((el) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${el.id}">${el.name}</option>`
    );
  });
};

let button = document.querySelector("#getGovernoratesBtn");
let getGovernorates = async function (id) {
  button.setAttribute("disabled", "disabled");
  try {
    const request = fetch(`https://localhost:44389/api/Governorate`);
    const promis = await request;
    const data = await promis.json();
    fillSelect(data);
  } catch (err) {
    console.log(err);
  } finally {
    button.removeAttribute("disabled");
  }
};

let getMarkazes = async function (event) {    
  let id = event.target.value;
  try {
    const request = fetch(
      `https://localhost:44389/api/Markaz/GetByGovId/${id}`
    );
    const promis = await request;
    const data = await promis.json();
    fillMarkazSelect(data);
  } catch (err) {
    console.log(err);
  }
};
