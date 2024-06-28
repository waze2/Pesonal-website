//bunch of functions for buttons to scroll to a certain section of the word page

function scrollToSection() {
    var section = document.getElementById("main-section");
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSecondary(){
    var section = document.getElementById("secondary-section");
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToThird(){
    var section = document.getElementById("third-section");
    section.scrollIntoView({ behavior: "smooth" });
}