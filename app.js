/*
Ahsana Tasnim
JavaScript Programming Exercixe 7
Functions
*/

/**
 * @description Log anything to the console
 * @param {*} obj The object to write to the console. 
 */
function l(obj) {
console.log(obj);
}

/**
 * This is a declaration function with no parameters or arguments
 */
function doThings() {
    l('I do stuff but have nothing to contribute or accept.');
}

doThings();

/**
 * @description Adds numbers. This is a declaration funstion. Declarative functions are hoisted.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} sum of value1 and value2
 */
function add(value1, value2) {
    return value1 + value2;
}

/**
 * @description Substract two numbers. This is a function expression.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} The difference between value1 and value2
 */
let substract = function(value1, value2) {
    return value1 - value2;
}

/**
 * @description Multiply two numbers. This is an Arrow function.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} The product of value1 and value2
 */
let multiple = (value1, value2) => {return value1 * value2; }

/**
 * @description Divide two numbers
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} The dividend of value1 and value2
 */
 let divide = (value1, value2) => {return value1/value2; }

 l("Call declarative add function");
 let a = add(3,2);
 l(a);
 l("~~~~~~~~~~~~~~~");


 l("Call substract function expression");
 let b = substract(9, 5);
 l(b);
 l("~~~~~~~~~~~~~~~");

 l("Call multiple arrow function");
 let c = multiple(3, 4);
 l(c);
 l("~~~~~~~~~~~~~~~");

 l("Call devide arrow function");
 let d = divide(3, 4);
 l(d);
 l("~~~~~~~~~~~~~~~");

 //Functions can be reassigned into anything
 //JavaScript is a dynamic language
 add = "Ahsana";
 l(add);
 add = 3*4;
 l(add);

 l(substract(add,10));