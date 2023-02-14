const hamburger = document.querySelector(".hamburger")
const navAside = document.querySelector("aside")
const navAsideItem = document.querySelectorAll("aside a")
const main = document.querySelector("main")

hamburger.addEventListener("click", () => {
    navAside.classList.toggle("displayMenu");
    hamburger.classList.toggle("rotateBurger")
})

main.addEventListener("click", () => {
    navAside.classList.remove("displayMenu");
    hamburger.classList.remove("rotateBurger")
})

navAsideItem.forEach((item) => {
    item.addEventListener("click", () => {
        navAside.classList.remove("displayMenu");
        hamburger.classList.remove("rotateBurger")
    })
})




const sections = document.querySelectorAll(".scroll");
const navLi = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {
    let current = "homeAnchor"
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop -200) {
            current = section.getAttribute("id")
        }    
    });

    navLi.forEach((a) => {
        a.classList.remove("active")
        if (a.classList.contains(current)) {
            a.classList.add("active")
        }
    });
})
        

