window.onload = choose;

var coconuts = new Array("images/Coconut.png", "images/Logo.png");

function popupFunction() { // Pop-Up Text
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function choose() { // Random Picture of Coconut
    var random = Math.floor(Math.random() * coconuts.length);
    document.getElementById("main_picture").src = coconuts[random];
}