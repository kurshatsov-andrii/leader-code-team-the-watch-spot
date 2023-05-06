const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  SlidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
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
});