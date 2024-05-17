//Slideshow js, used in the CMDA Signage Project

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n, n > 0 ? 'right' : 'left');
}

function showSlides(n, direction = 'right') {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slide-active', 'slide-next', 'slide-prev'); // Reset all slides by removing specific classes
  }
  // Prepare the current and next/previous slides for the transition
  slides[slideIndex-1].classList.add('slide-active'); // Mark the current slide as active
  if (direction === 'right') {
    slides[slideIndex-1].classList.add('slide-next');
    setTimeout(() => {
      slides[slideIndex-1].classList.remove('slide-next');
    }, 500); // Adjust timeout to match the transition duration
  } else {
    slides[slideIndex-1].classList.add('slide-prev');
    setTimeout(() => {
      slides[slideIndex-1].classList.remove('slide-prev');
    }, 500);
  }
}

function startSlideShow() {
  setInterval(() => {
    plusSlide(1);
  }, 8000); // Change slides every 8 seconds
}

startSlideShow();
