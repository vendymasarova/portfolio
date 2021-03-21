window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

// Reveal section
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// scrolling navbar
// document.querySelector(".navigation").addEventListener("click", function (e) {
//   function scrolling() {
//     e.preventDefault();
//     console.log(e.target);

//     if (e.target.classList.contains("nav-link")) {
//       const id = e.target.getAttribute("href");
//       document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     }
//   }
//   scrolling();
// });

document.querySelector(".text-button").addEventListener("click", function (e) {
  const scrolling = function () {
    e.preventDefault();
    console.log(e.target);

    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  };
  scrolling();
});

// document.querySelector(".text-button").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.target);
//   if(e.ta)
//   if(e.target.classList.contains('nav-link')){
//     const
//   }
// });

const loader = document.querySelector(".preload");
const main = document.querySelector(".main");

function preloader() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.classList.add("main-active");
  }, 4000);
}

preloader();
