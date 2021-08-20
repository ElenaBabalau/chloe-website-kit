const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__mobile');
  const navLinks = document.querySelectorAll('.nav-link li');

burger.addEventListener('click', () => { 
  //TOGGLE NAV
  nav.classList.toggle('nav-active');
  //ANIMATE LINKS
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
    }
  });
  //BURGER ANIMATION
  burger.classList.toggle('toggle')

  });
}
navSlide();