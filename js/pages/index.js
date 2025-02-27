document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.hero__carousel-container');
  const slides = document.querySelectorAll('hero-component');
  const dots = document.querySelectorAll('.hero__dot--hero');

  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('hero__dot--active');

      } else {
        dot.classList.remove('hero__dot--active');
      }
    });
  };

  showSlide(currentIndex);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  /*
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);*/
});