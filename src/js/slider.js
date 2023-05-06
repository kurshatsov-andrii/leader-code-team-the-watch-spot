const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // SlidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // keyboard: {
  //   enabled: true,
  // },
  // If we need pagination
  pagination: {
    // el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1-button-next',
    prevEl: '.swiper1-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  on: {
    slideChange() {
      let ollSliders = this.slides.length,
        slIndex = this.realIndex + 1,
        numIndex = (slIndex <= 9) ? '0' : '',
        numOll = (ollSliders <= 9) ? '0' : '';
      this.el.parentNode.querySelector(".carousel-number-of-watches").innerHTML = numIndex.toString() + slIndex.toString() + '<span class="dash"></span>' + numOll.toString() + ollSliders.toString();
    }
  }

});