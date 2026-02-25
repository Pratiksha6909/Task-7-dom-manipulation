// Select elements using querySelector
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const changeTextBtn = document.querySelector("#changeTextBtn");
const toggleStyleBtn = document.querySelector("#toggleStyleBtn");

// Change text dynamically
changeTextBtn.addEventListener("click", function () {
    content.textContent = "The content has been changed using querySelector!";
});

// Toggle class using classList
toggleStyleBtn.addEventListener("click", function () {
    title.classList.toggle("highlight");
    content.classList.toggle("new-style");
});