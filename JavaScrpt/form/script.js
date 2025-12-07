
let headingColor = document.getElementById("Heading");
let bgColor = document.getElementById("Background");
let paraColor = document.getElementById("paragraph");

let heading = document.querySelector("#smallContainer h3");
let smallBox = document.getElementById("smallContainer");
let paragraph = document.querySelector("#smallContainer p");


headingColor.addEventListener("change", function () {
    heading.style.color = headingColor.value;
});


bgColor.addEventListener("change", function () {
    smallBox.style.backgroundColor = bgColor.value;
});




paraColor.addEventListener("change", function () {
    paragraph.style.color = paraColor.value;
});

