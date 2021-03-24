const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const showOverlay = () => {
  hamburger.classList.add("inactive");
  close.classList.remove("inactive");
  overlay.classList.add("show");
  body.classList.add("overlay-open");
};

const hideOverlay = () => {
  hamburger.classList.remove("inactive");
  close.classList.add("inactive");
  overlay.classList.remove("show");
  body.classList.remove("overlay-open");
};

const menuChangeOnResize = () => {
  if (window.innerWidth >= 768) {
    close.classList.add("inactive");
    hamburger.classList.add("inactive");
  } else if (window.innerWidth < 768) {
    hamburger.classList.remove("inactive");
    close.classList.add("inactive");
    overlay.classList.remove("show");
  }
};

hamburger.addEventListener("click", showOverlay);
close.addEventListener("click", hideOverlay);
window.addEventListener("resize", menuChangeOnResize);
