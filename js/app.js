/*
 * Define Global Variables
 *
 */ const navP = document.querySelector("#navbar__list");
const navChild = document.createElement("li");
const s1 = document.getElementById("section1");
const s2 = document.getElementById("section2");
const s3 = document.getElementById("section3");
const s4 = document.getElementById("section4");
const goUp = document.querySelector(".up");
const header = document.querySelector(".page__header");
const sections = document.querySelectorAll("section");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

//adding the Active class to the section and the nav
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    linkObj.forEach((link) => {
      if (!entry.isIntersecting) {
        link.classList.remove("Aactive");
        entry.target.classList.remove("active");
      } else if (link.getAttribute("data-link") === entry.target.id) {
        entry.target.classList.add("active");
        link.classList.add("Aactive");
      } else {
        entry.target.classList.add("active");
      }
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// build the nav
let i = 0;
for (section of sections) {
  i++;
  const navChild = document.createElement("li");
  const aChild = document.createElement("a");
  const href = aChild.setAttribute("data-link", `section${i}`);
  const idd = aChild.setAttribute("id", `section ${i}`);
  aChild.classList.add("menu__link");
  aChild.innerHTML = `Section ${i}`;
  navChild.appendChild(aChild);
  navP.appendChild(navChild);
}
const linkObj = document.querySelectorAll("a");

//hidding the nav bar
let isScrolling;
document.addEventListener("scroll", () => {
  header.style.display = "block";
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);
});
// adding the button go up
goUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// scroll smoothly

linkObj.forEach((item) => {
  item.addEventListener("click", function () {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
