import vars from '../_vars';
import Swiper from '../vendor/swiper.min';

try {
  const galleryThumbsItem = new Swiper(vars.$mainSliderThumbs, {
    spaceBetween: 1,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false
  });
  
  const introSliderItem = new Swiper(vars.$introSlider, {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
      nextEl: '.home__slide-next',
      prevEl: '.home__slide-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 400,
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: galleryThumbsItem
    },
    pagination: {
      el: '.home__slider-pagination',
      clickable: true,
    }
  });
} catch(err) {

}

