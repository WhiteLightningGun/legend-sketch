$(document).ready(function () {
  let currentSlide = 1;
  const totalSlides = 2;
  let slideInterval;
  let intervalTimeMS = 7000;

  function showSlide(slideNumber) {
    $(`#slide-${currentSlide}`).fadeOut(500, function () {
      currentSlide = slideNumber;
      $(`#slide-${currentSlide}`).fadeIn(500);
    });
  }

  function startSlideShow() {
    slideInterval = setInterval(function () {
      const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
      showSlide(nextSlide);
    }, intervalTimeMS);
  }

  function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  $("#next-slide").click(function () {
    const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(nextSlide);
    resetSlideShow();
  });

  $("#prev-slide").click(function () {
    const prevSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    showSlide(prevSlide);
    resetSlideShow();
  });

  // Initialize by showing the first slide and hiding the others
  $(`#slide-${currentSlide}`).show();
  for (let i = 1; i <= totalSlides; i++) {
    if (i !== currentSlide) {
      $(`#slide-${i}`).hide();
    }
  }

  // Start the slideshow
  startSlideShow();
});
