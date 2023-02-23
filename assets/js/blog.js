let blogSwiper = new Swiper(".swiper-blog", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    mousewheel: true,

    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        700: {
            slidesPerView: 2
          },
          // 1200px and up shoes 3 slides
          1200: {
              slidesPerView: 3
          }
    }   
  });

