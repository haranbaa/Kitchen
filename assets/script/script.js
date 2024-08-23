// Select the mode toggle input element
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const shoppingCart = document.querySelector('.shopping_cart');
let shopping_BTN;

if (shoppingCart) {
  shopping_BTN = shoppingCart.firstElementChild;
}

let isColor = true;

let currentMode = localStorage.getItem('mode');

if (currentMode === 'dark-mode') {
  body.classList.add('dark-mode');
  isColor = false;
} else if (currentMode === 'light-mode') {
  body.classList.add('light-mode');
  isColor = true;
}

if (shoppingCart && currentMode === 'dark-mode') {
  shopping_BTN.firstElementChild.src = "assets/img/shopping_cart_white.webp";
} else {
  if (shoppingCart && currentMode === 'light-mode') {
    shopping_BTN.firstElementChild.src = "assets/img/shopping_cart.png";
  }
}

modeToggle.addEventListener('change', () => {
  if (isColor) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark-mode');
    isColor = false;
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('mode', 'light-mode');
    isColor = true;
  }

  if (shoppingCart && !isColor) {
    shopping_BTN.firstElementChild.src = "assets/img/shopping_cart_white.webp";
  } else {
    if (shoppingCart && isColor) {
      shopping_BTN.firstElementChild.src = "assets/img/shopping_cart.png";
    }
  }
});

// review box
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const testimonials = document.querySelectorAll('.testimonial-card');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

if (testimonialsWrapper && testimonials.length > 0 && leftBtn && rightBtn) {
  let currentIndex = 0;
  const visibleCards = Math.floor(testimonialsWrapper.offsetWidth / testimonials[0].offsetWidth);
  const totalCards = testimonials.length;

  function scrollToCard(index) {
    const offset = index * (testimonials[0].offsetWidth + 20); // Card width + margin
    testimonialsWrapper.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  }

  leftBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalCards - visibleCards;
    }
    scrollToCard(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalCards - visibleCards) {
      currentIndex = 0;
    }
    scrollToCard(currentIndex);
  });
}

// hover blur review
testimonials.forEach((testimonial, index) => {
  testimonial.addEventListener('mouseover', () => {
    testimonials.forEach(otherTestimonial => {
      if (otherTestimonial !== testimonial) {
        otherTestimonial.style.filter = 'blur(2px)';
        otherTestimonial.style.transform = 'scale(0.9)';
      }
    });
  });

  testimonial.addEventListener('mouseout', () => {
    testimonials.forEach(otherTestimonial => {
      otherTestimonial.style.filter = '';
      otherTestimonial.style.transform = '';
    });
  });
});