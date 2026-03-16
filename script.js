let balance = 1000;
let correctPin = 1234;

function login(){

let pin = document.getElementById("pin").value;

if(pin == correctPin){

document.getElementById("login").style.display="none";
document.getElementById("menu").style.display="block";

}

else{
alert("Wrong PIN");
}

}

function deposit(){

let amount = Number(document.getElementById("amount").value);

balance += amount;

updateBalance();

}

function withdraw(){

let amount = Number(document.getElementById("amount").value);

if(amount > balance){

alert("Insufficient Balance");

}

else{

balance -= amount;

}

updateBalance();

}

function checkBalance(){

alert("Your balance is ₹" + balance);

}

function updateBalance(){

document.getElementById("balance").innerText = "Balance : ₹" + balance;

}