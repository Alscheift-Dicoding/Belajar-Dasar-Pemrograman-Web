///////////////////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navbar.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Scroll into view
const navbarnav = document.querySelectorAll(".navbar--nav li a");

const hobbies = document.querySelector(".section--hobbies");
const contact = document.querySelector(".footer");

navbarnav[0].addEventListener("click", (e) => {
    e.preventDefault();
    header.scrollIntoView({ behavior: "smooth" });
});

navbarnav[1].addEventListener("click", (e) => {
    e.preventDefault();
    hobbies.scrollIntoView({ behavior: "smooth" });
});

navbarnav[2].addEventListener("click", (e) => {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth" });
});
