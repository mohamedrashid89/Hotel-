const NavMenu = document.getElementById("nav-menu");
const NavLink = document.getElementById("nav-link");
const MenuBtnIcon = document.querySelector("i");


NavMenu.addEventListener("click", (e) => {
    NavLink.classList.toggle("open");

    const isOpen = NavLink.classList.contains("open");
    MenuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

NavLink.addEventListener("click", (e) => {
    NavLink.classList.remove("open");
    MenuBtnIcon.setAttribute("class", "ri-menu-line");
});


// Scroll
document.addEventListener("DOMContentLoaded", () => {
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".header-container p", {
        ...scrollRevealOption,
    });
    ScrollReveal().reveal(".header-container h1", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".about-image img", {
        ...scrollRevealOption,
        origin: "left",
    });
    ScrollReveal().reveal(".about-content .section-subheader", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".about-content .section-header", {
        ...scrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".about-content .section-description", {
        ...scrollRevealOption,
        delay: 1500,
    });
    ScrollReveal().reveal(".about-btn", {
        ...scrollRevealOption,
        delay: 2000,
    });
    ScrollReveal().reveal(".room-card", {
        ...scrollRevealOption,
        interval: 500,
    });
    ScrollReveal().reveal(".service-list li", {
        ...scrollRevealOption,
        interval: 500,
        origin: "right",
    });
});
