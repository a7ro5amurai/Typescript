let firstName = "Mohammad"
let lastName = "Shuhait"

console.log(firstName.length);
console.log(lastName.length);

let fullName = firstName + lastName

console.log(fullName.length);


//- Aufgabe 1_2


const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));   


//- Aufgabe 1_4


const susisStatus = 'Susi is going to codingschool'

console.log(susisStatus.slice(0, 4));
console.log(susisStatus.slice(5, 7));
console.log(susisStatus.slice(5, 17) + susisStatus.slice(23, 29));
console.log(susisStatus.slice(23, 29));
console.log(susisStatus.slice(0, 8) + susisStatus.slice(23, 29));

let susisErgebniss = document.querySelector("main")

if(susisErgebniss !== null){
    let a = (susisStatus.slice(0, 4))
susisErgebniss.innerHTML += a + "<br>"

let b = (susisStatus.slice(5, 7))
susisErgebniss.innerHTML += b + "<br>"

let c = (susisStatus.slice(5, 17) + susisStatus.slice(23, 29))
susisErgebniss.innerHTML += c + "<br>"

let d = (susisStatus.slice(23, 29))
susisErgebniss.innerHTML += d + "<br>"

let e = (susisStatus.slice(0, 8) + susisStatus.slice(23, 29))
susisErgebniss.innerHTML += e + "<br>" 
}


//- Aufgabe 1_5


const whereIsSusi = 'Susi is back from codingschool'

console.log(whereIsSusi.substring(0, 5));
console.log(whereIsSusi.substring(5, 8));
console.log(whereIsSusi.substring(24, 30));
console.log(whereIsSusi.substring(0, 8) + whereIsSusi.substring(24, 30));

let f = (whereIsSusi.substring(0, 5))
let g = (whereIsSusi.substring(5, 8))
let h = (whereIsSusi.substring(24, 30))
let i = (whereIsSusi.substring(0, 8) + whereIsSusi.substring(24, 30))

document.open()
document.write(`${f} <br> ${g} <br> ${h} <br> ${i} <br>`)
// document.write(f + "<br>" + g + "<br>" + h + "<br>" + i)
document.close()


//- Aufgabe 1_5


const samsStatus = "Sam is good at codingschool"



let codingSchool = samsStatus.replace("good", "bad").replace("coding", "")
console.log(codingSchool);
// console.log(samsStatus.replaceAll("Sam is good at codingschool", "Sam is bad at school"));
// console.log(samsStatus.replace("Sam", "Susi"));
console.log(samsStatus.replaceAll("Sam is good at codingschool", "Susi is bad at school"));
console.log(samsStatus.replace("codingschool", "tennis"));

let j = (samsStatus.replaceAll("Sam is good at codingschool", "Sam is bad at school"))
let k = (samsStatus.replaceAll("Sam is good at codingschool", "Susi is bad at school"))
let l = (samsStatus.replace("codingschool", "tennis"))

document.open()
document.write(j + "<br>" + k + "<br>" + l)
document.close()


//- Aufgabe 1_9


const infoAboutSam = "Sam is going to codingschool"
const susi = "Susi"
const and = "and"

// Sam is going to school and to the movie theater
let m = infoAboutSam.replace("coding", "").concat(" " + and + " to the movie theater")
console.log(m);
//Sam is going to the movie theater
let n = infoAboutSam.replace("codingschool", "the movie theater")
console.log(n);
//Susi and Sam are going to school
let o = susi + " " + and + " " + infoAboutSam.replace("is", "are").replace("coding", "")
console.log(o);
//Susi and Sam are going to gym and to the movie theater
let p = susi + " " + and + " " + infoAboutSam.replace("is", "are").replace("codingschool", "gym").concat(" " + and + " to the movie theater")
console.log(p);
//Susi is going to school and to the movie theater
let q = infoAboutSam.replace("Sam", susi).replace("coding", "").concat(" " + and + " to the movie theater")
console.log(q);

document.open()
document.write(m + "<br>" + n + "<br>" + o + "<br>" + p + "<br>" + q )
document.close()


//- Aufgabe 1_8


const whereIsSam = "Sam is going to school"
console.log(whereIsSam.toUpperCase());
console.log(whereIsSam.toLowerCase());

//SAM is going to SCHOOL
let r = whereIsSam.slice(0,4).toUpperCase() + whereIsSam.slice(4, 16) + "school".toUpperCase()
console.log(r);

//sam IS GOING TO school
let s = "Sam" + whereIsSam.slice(3, 16).toUpperCase() + "school"
console.log(s);


