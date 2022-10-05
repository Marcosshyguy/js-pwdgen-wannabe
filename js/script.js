//user input
let passwordEnd = "21"
console.log(passwordEnd);
const naMe = prompt("What's your name?");
const surname = prompt("What's your surname?");
const color = prompt("What's your favourite color?");
console.log( naMe,surname,color);

//data processing
const password = naMe + surname + color + passwordEnd;
console.log(password);

//output
document.getElementById("password-generated").innerHTML = password
