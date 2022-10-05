//user input
let passwordEnd = 21
console.log(passwordEnd);
const passwordEndString = passwordEnd.toString();   //example of how to convert a number to string
console.log(passwordEndString ,typeof(passwordEndString), typeof(passwordEnd));

const userName = prompt("What's your name?");
const userSurname = prompt("What's your surname?");
const userColor = prompt("What's your favourite color?"); 
console.log(userName,userSurname,userColor);
const userLuckyNumber = parseInt (prompt ("What's your lucky number")); //example for me to understand how parseint works.
console.log(userLuckyNumber, typeof(userLuckyNumber));  //example for me to understand how typeof works.

//data processing
const password = ` ${userName}  ${userSurname} ${" "} ${userColor} ${passwordEndString} ${userLuckyNumber}`; //in this case when you add a single string to a number the result is always a string 
console.log(password, typeof(password));

//output
document.getElementById("password-generated").innerHTML = password