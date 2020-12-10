console.log("werkt");

/* HAMBURGER MENU */

/* const is een waarde die niet veranderd */
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false; /* let is de nieuwe versie van var */
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
/* BRON: https://www.youtube.com/watch?v=dIyVTjJAkLw&t=350s */
