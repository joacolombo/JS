let paragraph = document.getElementById("mainParagraph");
let btnNumeric = document.getElementById("numeric");
let btnText = document.getElementById ("text");
let btnBool = document.getElementById ("bool");

btnNumeric.addEventListener("click", writeNumericValue)

btnText.addEventListener("click", writeTextValue)

btnBool.addEventListener("click", writeBoolValue)

function writeNumericValue(){
    let numericValue = 2 + 2; //Tipo dato number
    paragraph.textContent = numericValue;
}

function writeTextValue(){
    let textValue = "Hola Mundo";
    paragraph.textContent = textValue; //Tipo dato string
}

function writeBoolValue(){
    let boolValue = true; // 1/0 1=true y 0=false
    paragraph.textContent = boolValue==1;
}