
  const contactBtn= document.querySelector('#contact-btn');
  const contactContainer = document.querySelector('.contact-information');

  const contactDisplay = () => {
      
      contactContainer.classList.toggle('active');
  }

  contactBtn.addEventListener('click', contactDisplay);