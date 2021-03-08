let currentIndex;

function initSlider(options) {
    currentIndex = 1;
    showSlide(currentIndex);
    if (options && options.autoPlay) {
        setAutoPlay(options.autoPlayInterval);
    }
}

function nextSlide() {
    showSlide(currentIndex += 1);
}

function previousSlide() {
    showSlide(currentIndex -= 1);  
}

function currentSlide(slideIndex) {
    showSlide(currentIndex = slideIndex);
}

function setAutoPlay(interval) {
    const intervalTime = interval || 3000;
    setInterval(() => nextSlide(), intervalTime);
}

function showSlide(slideIndex) {
    const slides = document.getElementsByClassName("slide");
    const greaterThanSlides = slideIndex > slides.length;
    
    // Check if index is greater than slides length so that we reset it 
    if (greaterThanSlides) {
      currentIndex = 1
    }

    // Check if index is less than slides length so that we set it to the last slide 
    if (slideIndex < 1) {
        currentIndex = slides.length
    }
  
    // Hide the other slides
    for (const slide of slides) {
        slide.style.display = "none";
    }

    // Show the currentSlide
    slides[currentIndex - 1].style.display = "block";    
}