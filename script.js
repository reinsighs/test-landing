let offerBtn = document.getElementById("openModal");
let modal = document.getElementById("modal");
let bg = document.getElementById("bg");

let menu = document.getElementById("nav-mobile");



function openModal() {
    modal.style.display = "block";
    bg.classList.add("bg");

}

function closeModal() {
    modal.style.display = "none";
    bg.classList.remove("bg");
}

function openMenu() {
    menu.style.display="block";
    bg.classList.add("bg");
}

function closeMenu() {
    menu.style.display="none";
    bg.classList.remove("bg");
}
