const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("aside")
console.log(nav);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("displayMenu");
})