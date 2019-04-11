function receiveMessage(event){
    if(event.data != "Passwort bekommen"){return}

    document.getElementById("Symbols").checked = false;
    d2O();
    passwort = document.getElementById("final_pass").value;

    event.source.postMessage("Passwort: " + passwort, event.origin);
    window.close();
}

window.addEventListener("message", receiveMessage, false);
