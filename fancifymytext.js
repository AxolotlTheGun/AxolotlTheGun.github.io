//enlarge text in textbox
function enlargeText() { 
    document.getElementById("text-input").style.fontSize= "24pt";
}

//changing text based on radio button pressed
function fancifyText() {
    const fancyRadio = document.getElementById("fancy");
    const textArea = document.getElementById("text-input");

    if (fancyRadio.checked) { 
        textArea.style.fontWeight = "bold"; 
        textArea.style.color = "blue"; 
        textArea.style.textDecoration = "underline"; 
    } else { 
        textArea.style.fontWeight = "normal"; 
        textArea.style.color = "black"; 
        textArea.style.textDecoration = "none"; 
    }
}

//alert and change text style
function alertAndChangeStyle() { 
    alert("You changed the style!"); 
    fancifyText(); 
}

//pressing the moo button uppercases all text and adds -MOO at the end of sentences
function mooifyText() { 
    const textArea = document.getElementById("text-input"); 
    let text = textArea.value.toUpperCase(); 
    text = text.split('.').map(sentence => sentence.trim() + "-Moo").join('. '); 
    textArea.value = text;
}