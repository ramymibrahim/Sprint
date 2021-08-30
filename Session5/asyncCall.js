//AJAX Async JavaScript and XML
const request = new XMLHttpRequest();
request.open('GET',"https://localhost:44389/api/Governorate");
request.send();
console.log('Start Test');
request.addEventListener('load',function(){
    console.log('On Load');
    console.log(this.responseText);
});
setTimeout(function(){
    console.log('Set Time Out');
},0);
console.log('After Set Time out');

function calculateValue(){
    let val = getTax(getValue());
    console.log(val);
}

function getValue(){
    console.log("getValue")
    return 1000;
}

function getTax(val){
    console.log("getTax")
    return 0.1*val;
}
alert(0);
calculateValue()