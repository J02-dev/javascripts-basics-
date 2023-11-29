console.log("Hello World");

// wierd scope = Don't use
// var x = 5;
let y = 6;
y=10;  // you can change the value

const z = 7; // this is a constant. Can't be changed // z=10; // this throws and error.

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // this does division but returns the remainder 
console.log(y**z); // exponents

let fname="Jose";
let lname="De Leon"
console.log(fname + lname);

console.log(`${fname} ${lname}`);
console.log(`${fname} ${5*9}`);
console.log( lname + 6);


let user = "Jose";
let pass = "hello123";

if (user== "Jose") {
    console.log(`you are ` + user);
}

user = "jos"
if (user == "Jose"){
    console.log(`you are ` + user);
} else {
    console.error("DENIED")
}

user = "Jose"
if (user == "Jose" && pass ==  "hello123") {
    console.log(`you are ` + user + ' and your pass is ' + pass);
} else {
    console.error("DENIED")
}

const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 15;

function checkAge(myAge) {
    console.log('RUNNING ... ')
    if (myAge < license && myAge >= jrop) {
    console.log('you can have a JrOp Lincense');
    }

    if (myAge >= license) {
    console.log('you can have a regular license');
    }

    if (myAge >= rental) {
    console.log('you can rent a car');
    }

    if (myAge >= jrop) {
    console.log("Your're too young to drive");
    }
} 

checkAge(15);
checkAge(17);
checkAge(19);
checkAge(37);