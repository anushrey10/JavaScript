// ARRAYS

const myArr1 = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5,6)

//console.log(myArr1[0],myArr2[0]);

//myArr1.push(6);
//myArr2.pop()

//console.log(myArr1);
//console.log(myArr2);

myArr2.unshift(0) // adds element to the first index of arrays shifting rest of the elements by 1 place

myArr1.shift() // removes the first element of the array

//console.log(myArr1);
//console.log(myArr2);

const newArr = myArr1.join() // converts the array to string
console.log(myArr1);
console.log(newArr);

