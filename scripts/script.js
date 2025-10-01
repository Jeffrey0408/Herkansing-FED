// JavaScript Document
console.log("hi");

/* Menu openen met de MENU button */

var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("header > nav");
    deNav.classList.add("toonMenu")
}

/* Menu sluiten met de sluit button */

var sluitButton = document.querySelector("nav > button")

sluitButton.onclick = sluitMenu; 

function sluitMenu() {
    var deNav = document.querySelector("header > nav");
    deNav.classList.remove("toonMenu");
}

/* Menu sluiten met escape */
window.onkeydown = handleKeydown;

function handleKeydown(event) {
    if(event.key == "Escape") {
        var deNav = document.querySelector("header > nav");
        deNav.classList.remove("toonMenu"); 
    }
}