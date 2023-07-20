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
// Smooth Scroll into view

document.querySelectorAll(".navbar--nav li a").forEach((nav)=>{
    nav.addEventListener("click",(e) => {
        e.preventDefault();
        const id = nav.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});


///////////////////////////////////////
// Slider
const slidesContainer = document.getElementById("slides-container");
const slidesLength = slidesContainer.children.length;
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slideWidth = slide.clientWidth;
let curSlide = 1;

slidesContainer.scrollTo(curSlide * slideWidth, 0);
slidesContainer.children[curSlide].classList.add("active");

nextButton.addEventListener("click", () => {
    slidesContainer.children[curSlide].classList.remove("active");
    if(curSlide === slidesLength - 1) curSlide = -1;
    curSlide++;
    slidesContainer.children[curSlide].classList.add("active");
    slidesContainer.scrollTo(curSlide * slideWidth, 0);
});

prevButton.addEventListener("click", () => {
    slidesContainer.children[curSlide].classList.remove("active");
    if(curSlide === 0) curSlide = slidesLength;
    curSlide--;
    slidesContainer.children[curSlide].classList.add("active");
    slidesContainer.scrollTo(curSlide * slideWidth, 0);
});
