console.log("test");

const John = 22 * 5 + 170
console.log("John score: " + John);
const Meike = 34 * 5 + 168
console.log("Meike score: " + Meike);

const Winner = John > Meike
    ? John
    : Meike

console.log(Winner);


//-Aufgabe conditionals-level-2_3


const testNumbers = [35, 74, 123];

testNumbers.forEach((num) => {
    let outputDifference = num - 27;
    if (outputDifference > 27) {
        outputDifference = outputDifference * 2;
    }
    console.log("Output: " + outputDifference);
});


//-Aufgabe conditionals-level-2_3


const inputPasswordElement = document.querySelector("#password") as HTMLInputElement
const outputCheckedPassword = document.querySelector("#checkedPassword") as HTMLParagraphElement


function checkPasswordLenght() {
    const inputPasswordValue = inputPasswordElement.value

    if (inputPasswordValue.length > 8) {
        outputCheckedPassword.innerText = "Welcome to your Account"
        outputCheckedPassword.style.color = "green"
    } else {
        outputCheckedPassword.innerText = "The password is to short"
        outputCheckedPassword.style.color = "red"
    }
}

const button = document.querySelector("#save") as HTMLInputElement
button.onclick = checkPasswordLenght


//-Aufgabe conditionals-level-2_2


let isOnline = true

if (isOnline === true) {
    console.log("online");
} else {
    console.log("offline");
}

let isPremiumUser = false
let monthlyFee: number = 0

if (isPremiumUser !== false) {
    monthlyFee = 19.99
} else {
    monthlyFee = 12.99
}

console.log(monthlyFee);

let isAdult = true

if (isAdult !== true) {
    window.alert("Keine Berechtigung")
} else {
    window.alert("Willkommen")
}

let randomAge: number = 26

let MiddleAged: boolean

if (randomAge >= 40 && randomAge <= 65) {
    MiddleAged = true
} else {
    MiddleAged = false
}

console.log(MiddleAged);

let randomSalary: number = 11844

if (randomSalary >= 10000) {
    console.log("You are rich");
} else if (randomSalary < 10000 && randomSalary >= 1500) {
    console.log("Not to bad");
} else {
    console.log("Not that much");
}


//-Aufgabe conditionals-level-2_4

let zahl1: number = Math.floor(Math.random() * 77)
let zahl2: number = Math.floor(Math.random() * 77)
console.log("Zahl 1: " + zahl1 + ", Zahl 2: " + zahl2);

if (zahl1 === zahl2) {
    console.log("Was für ein Zufall");
} else if (zahl1 > zahl2) {
    console.log("Erste Zahl ist größer");
} else {
    console.log("Zweite Zahl ist größer");
}

