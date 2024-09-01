const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));// precision value outputs 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//********************************************* MATHS **********************************************************************/

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
