
  const contactContainer = document.querySelector('.contact-information');
  const menuContainer = document.querySelector('.menu-container');
  const topLine = document.querySelector('#line-one');


function contactDisplay() {
    contactContainer.classList.toggle('active');
    console.log('I AM A BUTTON!');
}

function menuDisplay() {
  menuContainer.classList.toggle('is-active');
  topLine.classList.toggle('rotate-top');
  console.log('I AM A MENU BUTTON!');
}