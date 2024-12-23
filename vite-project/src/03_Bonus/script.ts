console.log("funktioniert?");

//inputwert holen
// (mit "as" drücken wir aus, dass es sich bei einem bestimmten Wert definitiv um einen bestimmten Typ handelt


function searchAndHighlight() {

    //deklariere Text Inputfeld in einer Variable
    const inputElement = document.querySelector("#search-input") as HTMLInputElement
    // deklariere den den Inhalt(value/was reingeschrieben wird) im Textffeld in einer neuen Variable
    const inputValue = inputElement.value

    // wenn ich jetzt etwas ins textfeld schreibe kann ich es mir in der Konsole ausgeben
    console.log("inputValue: ");
    console.log(inputValue);

    //auf der anderen Seite deklariere ich jetzt eine neue Variable mit der ich den Inhalt ersetzen möchte mit dem was ich in das Textfeld eingebe
    const replaceValue = `<span class="highlight">${inputValue}</span>`

    console.log("replaceValue: ");
    console.log(replaceValue);

    const articleElement = document.querySelector("article") as HTMLDivElement
    const articleContent = articleElement.innerText

    console.log(articleContent);

    const changedArticleContent = articleContent.replaceAll(
        inputValue, 
        replaceValue)


    articleElement.innerHTML = changedArticleContent

    //textinhalt replacen
}

const buttonElement = document.querySelector("#search-button") as HTMLInputElement

buttonElement.onclick = searchAndHighlight


