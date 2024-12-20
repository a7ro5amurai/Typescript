console.log("02_strings");

const kurzesBeispiel = "Guten Morgen Morgen"
// ->bei Zeilenumbrüchen bietet sich die Stringauszeichnung mit Backticks an

const langesBeispiel = `Die String-Methoden helfen dir, mit Strings zu arbeiten bzw.`

console.log(kurzesBeispiel.length); 
// ->length: gibt die länge alle Zeichen an

// ! .indexof("")
// wir suchen in einem langen Beispiel an der das Wort 'Methoden' vorkommt
// Hier kann man ein bestimmtes Wort suchen mit ""

const index = langesBeispiel.indexOf("Methoden")
console.log(index);
console.log(langesBeispiel.indexOf("Zimtschnecke"));

// ! .slice((startIndex, und endIndex))
// kann mit (startIndex) oder mit (startIndex, und endIndex) einen Abschnitt sliced das ganze geht auch umgekehrt mit (-startIndex) oder mit (-startIndex, und -endIndex)

console.log(langesBeispiel.slice(4, 19)); //sliced nicht den ursprünglichen string
console.log(langesBeispiel);

// ! .replace(("searchIndex", "replaceIndex"))
console.log(kurzesBeispiel.replace("Morgen", "Abend")); //nimmt nur den ersten Parameter

// console.log(kurzesBeispiel.replaceAll("Morgen", "Abend")); //nimmt in dem Fall alle Parameter

// ! .toUpperCase()
// ! .toLowerCase()

console.log(kurzesBeispiel.toUpperCase());
console.log(kurzesBeispiel.toLowerCase());

// ! .concat()
// setzt strings zu einem größerem String zusammen

const zusammengesetzterString = kurzesBeispiel.concat(" Das Wetter ist schön")
console.log(zusammengesetzterString);

console.log(zusammengesetzterString.concat(langesBeispiel));

const zusammengesetzterString2 = zusammengesetzterString + " Wie geht es dir" + langesBeispiel
console.log(zusammengesetzterString2);


// ! .tofixed()
//runden Zahlen nach dem komma

const zahl = 1.23796492364789

console.log(zahl.toFixed(1));

// ! dom

const überschrift = document.querySelector("h2");

// if() //Bedingungsblock {
    //Funtkionskörper
// }

if(überschrift !== null){
    überschrift.innerHTML = "Tag 2 - Strings Wuuu"
    überschrift.style.color = "coral"
    überschrift.style.fontSize = "3rem"
    überschrift.innerText += " hallo"
    const classes = überschrift.classList
    console.log(classes);
    überschrift.classList.add("testKlasse")
    console.log(überschrift);
} else {
    window.alert("Es gibt keine Überschrift")
}

//!   !== (nicht gleich) + === (gleich)