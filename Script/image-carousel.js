document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'fade', // Type of the slider
      perPage: 1, // Number of slides to display at once
      autoplay: true, // Autoplay the slider
      interval: 5000, // Autoplay interval in milliseconds
      rewind: true,
      autoplay: true,
      arrows:false,
      pagination: false,
      transition: 'fade', // Use fade transition
      speed: 2000, // Duration of the transition in milliseconds
      
    });
  
    splide.mount(); // Mount the slider
  });
  