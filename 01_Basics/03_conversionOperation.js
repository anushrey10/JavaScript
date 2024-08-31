let score = "Anushrey"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true =>1 , false =>0

let isLoggedIn = 0
let BooleanisLoggedIn = Boolean(isLoggedIn)

console.log(BooleanisLoggedIn);
//1 => true , 0 => false
//"" => false , "abcd" => true

let someNumber = 99

let StringSomeNumber = String(someNumber)

console.log(StringSomeNumber);
console.log(typeof StringSomeNumber);


//************************************************ OPERATIONS **************************************************************

//let value = 4
//let negvalue = -value
//console.log(negvalue);

let str1 = "hello"
let str2 = "anushrey"
let str3 = str1 + str2
console.log(str3)

console.log(1 + 3);
console.log("1" + 3);
console.log(1 + "3");
console.log(1 + 2 + "3");
console.log("1" + 2 + 3)
// when we use integer operation before string, the operation is performed otherwise ; the value are treated as strings and the operations act as string operations.

console.log(+true);//output will be 1
//console.log(true+); //shows error


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
