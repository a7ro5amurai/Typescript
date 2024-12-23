console.log("test");

//1. Inputfelder deklarieren


const numberInputA = document.querySelector("#number-a") as HTMLInputElement;
const numberInputB = document.querySelector("#number-b") as HTMLInputElement;
const button = document.querySelector("#additon-button") as HTMLButtonElement;
const resultElement = document.querySelector("#result") as HTMLSpanElement;

// die funktion die beim klicken ausgelöst werden soll

function add() {
    console.log("TEEEEEST");

    //parseInt("2000.01 Euro") => 2000
    //parseFloat("2000.01 Euro") => 2000.01
    // h     +("2000.01 Euro") => NaN
    // Number("2000.01 Euro") => NaN
    // Number und + sind deutlich strenger als parseInt und parseFloat und tolerieren keine Buchstaben nach Zahlen
    
    const numberA = Number(numberInputA.value)
    const numberB = Number(numberInputB.value)

    const result = numberA + numberB
    console.log(result);

    // resultElement.innerText = `Ergebnis: ${result}`
    // .toFixed macht automatisch einen String
    resultElement.innerText = result.toString()


}

button.onclick = add