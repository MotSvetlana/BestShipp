//  Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 53000
    },
    breakpoints: {
        561: {
            direction: "horizontal",
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        767: {
            direction: "horizontal",
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        992: {
            direction: "horizontal",
            slidesPerView: 4.2,
            slidesPerGroup: 4,
        },


    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        
    },clickable: true,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
