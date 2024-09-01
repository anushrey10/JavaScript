// Stack (Primitive)     Heap (Non - Primitive)

//Stack mei copy banta hai

let myName = "Anushrey Shubham"
let yourName = myName
console.log(yourName);

yourName = "Ishika Gupta"
console.log(yourName);
console.log(myName);

//Heap mei original value ka reference milta hai

let userOne = {
    email : "anushrey8shubham@gmail.com",
    upi : "anushrey8shubham@oksbi"
}

console.log(userOne);

let userTwo = userOne

userTwo.email = "squishi4361@gmail.com"

console.log(userOne);
console.log(userTwo);
// here, since object is a non primitive data type & the value of email is changed for userTwo , hence the original value will also change.



