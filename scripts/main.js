const toggleMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", (evt) => {
    evt.target.classList.toggle("inactive");
    overlay.classList.toggle("overlay-slide");
  });
};

toggleMenu();
