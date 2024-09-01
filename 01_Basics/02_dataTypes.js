"use strict"; //treat all JS code as newer version

//alert("hello")
//alert(3+3)
console.log(3+3);

//tc39.es & nvm for documentation

//DATA TYPES
//number => 2 to power 32
//bigint => bigger than number
//string => " "
//boolean => true/false
//null => standalone value
//undefined =>
//symbol => unique
//typeof => shows data type 

console.log(typeof null);// type of null is OBJECT
console.log(typeof undefined);



// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// Non-Primitive

// Arrays , Objects , Functions

const heroes = ["Superman","Spiderman","IronMan"]
let myObj = {
    name : "Ishika",
    age : 21,
}
console.log(heroes);
console.log(myObj);


const myFunction = function(){
    console.log("Hello World");
}