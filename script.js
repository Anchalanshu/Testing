var swiper = new Swiper(".slide-contentr", {
    slidesPerView: 3,
    spaceBetween:25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        e1: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
    0: {
        slidesPerView:1,
    },
        520: {
            slidesPerView:2,
    },
        950: {
            slidesPerView: 3,
        },
    },
  });