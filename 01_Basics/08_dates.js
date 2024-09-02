// Dates

let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);*/

//let myCreatedDate = new Date(2024,7,25,5,3)
//console.log(myCreatedDate.toString());

//let newDate = new Date("08-25-2024")
//console.log(newDate.toString());

let myTimeStamp = Date.now()

console.log(Math.floor(myTimeStamp/1000)); // to convert milliseconds to seconds
//console.log(newDate.getTime());

let newDate = new Date();
/*console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());*/

console.log(newDate.toLocaleString('default',{weekday: "long"}));
