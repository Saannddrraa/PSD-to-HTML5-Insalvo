$(document).ready(function () {
    // Slick Slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                autoplay: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                autoplay: true,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                infinite: true,
                autoplay: true,
                dots: false
              }
            }
          ]
    });
});
