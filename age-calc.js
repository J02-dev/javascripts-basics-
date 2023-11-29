document.querySelector('form').addEventListener('submit', checkAge);

const license = 18;
const jrop = 16;
const rental = 25;

function checkAge(e) {
    e.preventDefault();

    let myAge = document.querySelector('input').value;

    let message = `<ul>`;

    console.log('RUNNING ... ')
    if (myAge < license && myAge >= jrop) {
    message += `<li>'you can have a JrOp Lincense'`;
    }

    if (myAge >= license) {
    message += `<li>'you can have a regular license'`;
    }

    if (myAge >= rental) {
    message += `<li>'you can rent a car'`;
    }

    if (myAge >= jrop) {
    message += `<li>"Your're too young to drive"`;
    }
    message += `</ul>`
    document.querySelector('#output').innerHTML = message;
} 

