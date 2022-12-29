const textInput=document.querySelector("#txt-input")
const button=document.querySelector("#btn")
const outputBox=document.querySelector("#output")

var URL="https://api.funtranslations.com/translate/dothraki.json"


function getTranslationUrl(text){
    return URL+ "?" + "text=" + text
 }

 function clickHandler(){
    var inputText=textInput.value;
    
    fetch(getTranslationUrl (inputText))

    .then(response=>response.json())
    .then(json=>{
        let translatedText=json.contents.translated;
        outputBox.innerText=translatedText;
    })
 }

 button.addEventListener("click", clickHandler);
