var a = 13
var b = 22

function add (a, b) {
    return (a + b);
}
var result = add (a, b);
console.log (result);


function sub (b, a) {
    return (b - a);
}
var result = sub (b , a);
console.log (result);


function multiply (a, b) {
    return (a * b);
}
var result = multiply (a, b);
console.log (result);


function divide (b, a) {
    return (b / a);
}
var result = divide (b, a);
console.log (result);





var sum = (a, b) => (a + b);
console.log (sum(a, b));

var result = (b, a) => (b - a);
console.log (result (b, a));

var result = (a, b) => (a * b);
console.log (result (a, b));

var result = (b, a) => (b / a);
console.log (result (b, a));