
  const contactContainer = document.querySelector('.contact-information');
  const menuContainer = document.querySelector('.menu-container');
  const topLine = document.querySelector('#line-one');
  const mouseCursor= document.querySelector('#cursor-container');


function contactDisplay() {
    contactContainer.classList.toggle('active');
    console.log('I AM A BUTTON!');
}

function menuDisplay() {
  menuContainer.classList.toggle('is-active');
  topLine.classList.toggle('rotate-top');
  console.log('I AM A MENU BUTTON!');
}

window.addEventListener("mousemove", cursor)

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px"
}

// window.addEventListener("mousedown", () => {
//   mouseCursor.classList.add("mouse-down")
// })