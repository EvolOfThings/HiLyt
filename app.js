

function selectedText() {
    let txt = "";
    if(window.getSelection) {
     txt = window.getSelection().toString();
    }
    console.log(txt);
    return txt;
    }
    
    selectedText();