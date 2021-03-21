const nav = function () {
  const burger = document.querySelector(".burger");
  const navOpen = document.querySelector(".nav-open");

  burger.addEventListener("click", function () {
    navOpen.classList.toggle("nav-active");
    burger.animation;
    burger.classList.toggle("toggle");
  });
};

nav();

//h1 tranistion
const slidingText = function () {
  const title = document.querySelector(".hero h1");

  const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
  let index = 0;

  function animateText() {
    for (let i = 0; i < txtsLen; i++) {
      txts[i].classList.remove("text-in");
    }
    txts[index].classList.add("text-in");
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }

    setTimeout(animateText, 3000);
  }
  window.onload = animateText;
};

slidingText();

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
