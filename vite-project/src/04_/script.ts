console.log(27);

let weekdayAsNumber: Number;
let weekdayAsString: String;
let wP;
// wP= window.prompt("Please insert a number from 1 to 7")
weekdayAsNumber = Number(wP);
switch (weekdayAsNumber) {
  case 1:
    weekdayAsString = "Monday";
    break;
  case 2:
    weekdayAsString = "Tuesday";
    break;
  case 3:
    weekdayAsString = "Wednesday";
    break;
  case 4:
    weekdayAsString = "Thursday";
    break;
  case 5:
    weekdayAsString = "Friday";
    break;
  case 6:
    weekdayAsString = "Saturday";
    break;
  case 7:
    weekdayAsString = "Sunday";
    break;
  default:
    weekdayAsString = "Error";
    break;
}

console.log(weekdayAsString);

//

const zahl1 = Math.floor(Math.random() * 77);
const zahl2 = Math.floor(Math.random() * 77);
console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);
if (zahl1 === zahl2) {
  console.log("Was für ein Zufall");
} else if (zahl1 > zahl2) {
  console.log("Erste Zahl größer");
} else {
  console.log("Zweite Zahl größer");
}

const zahl3 = Math.floor(Math.random() * 77);
const zahl4 = Math.floor(Math.random() * 77);
console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);

switch (true) {
  case zahl3 === zahl4:
    console.log("Was für ein Zufall");
    break;
  case zahl3 > zahl4:
    console.log("Erste Zahl größer");
    break;
  case zahl3 < zahl4:
    console.log("Zweite Zahl größer");
    break;
}

//

const schoolGrade = Math.floor(Math.random() * 10 + 1);
console.log(schoolGrade);
let school;
switch (schoolGrade) {
  case 1:
    school = "sehr gut";
    break;
  case 2:
    school = "gut";
    break;
  case 3:
    school = "befriedigend";
    break;
  case 4:
    school = "ausreichend";
    break;
  case 5:
    school = "mangelhaft";
    break;
  case 6:
    school = "ungenügent";
    break;
  case 7:
    school = "Das ist keine gültige Schulnote.";
    break;
  case 8:
    school = "Das ist keine gültige Schulnote.";
    break;
  case 9:
    school = "Das ist keine gültige Schulnote.";
    break;
  case 10:
    school = "Das ist keine gültige Schulnote.";
    break;
}
console.log(school);

const salesMonth = Math.round(Math.random() * 12 + 1);
let sales;
switch (true) {
  case salesMonth < 3:
    sales = "1.Quartal";
    break;
  case salesMonth < 6:
    sales = "2.Quartal";
    break;
  case salesMonth < 9:
    sales = "3.Quartal";
    break;
  case salesMonth < 12:
    sales = "4.Quartal";
    break;
  default:
    console.log("Error");
    break;
}
console.log(sales);

const totalSales = Math.round(Math.random() * (10000 - 1000) + 1000);
let total;
switch (true) {
  case totalSales <= 2500:
    total = "schlecht";
    break;
  case totalSales <= 5000:
    total = "mittelmäßig";
    break;
  case totalSales <= 7500:
    total = "hoch";
    break;
  case totalSales <= 10000:
    total = "unglaublich";
    break;
}
console.log(total);

console.log(`Im ${sales} war der Umsatz ${total}`);

// Math

const PI = Math.PI;
console.log(PI);
const roundedPI = Math.round;
console.log(roundedPI);

let ball;
ball = ball = Math.round;
console.log(ball);

const randomNum = Math.random();
const randomNum1_10 = Math.floor(Math.random() * 10 + 1);
const randomNum1_100 = Math.floor(Math.random() * 100 + 1);

let gN = window.prompt("Guess a number between 1 - 10");

const rN = Math.round(Math.random() * 10 + 1);
if (Number(gN) === rN) {
  console.log("You guessed correct !!!");
} else {
  console.log("Looser");
}

// Datum

const nowDate = new Date();
console.log(nowDate);

const now = Date.now();
console.log(now);

const output = document.querySelector("#ausgabe") as HTMLParagraphElement;

const year = nowDate.getFullYear();
const month = nowDate.getMonth();
const day = nowDate.getDate();

const hour = nowDate.getHours();
const minute = nowDate.getMinutes();
const second = nowDate.getSeconds();

console.log(day, month, year);

nowDate.toLocaleString("de-DE");
nowDate.toLocaleTimeString("de-DE");

if (output) {
  output.innerHTML = ` ${day}.${month}.${year}  ${hour}:${minute}:${second} <br> ${nowDate}`;
}

const input = document.querySelector<HTMLInputElement>("#input");

function clilogInput() {
  const value = input?.value ?? "Kein Wert";
  console.log(value);
}

clilogInput();