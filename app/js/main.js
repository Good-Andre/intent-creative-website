const $navLink = document.querySelectorAll('.nav__link');
const $introSlider = document.querySelector('.home__slider');
const $mainSliderThumbs = document.querySelector('.home__slider-thumbs');
const $projectsFilter = document.querySelector('.projects__filter');
const $projectsItem = document.querySelectorAll('.projects__item');
const $projectsList = document.querySelector('.projects__list');
const $menuHeaderBurger = document.querySelector('.menu-header__burger');
const $menuHeaderNav = document.querySelector('.menu-header__nav');
const $headerTop = document.querySelector('.header__top');
const $upBtn = document.querySelector('.up-btn');

// SMALL SLIDER thumbs

const galleryThumbsItem = new Swiper($mainSliderThumbs, {
  spaceBetween: 1,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});

// MAIN SLIDER

const introSliderItem = new Swiper($introSlider, {
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

// PROJECTS FILTER mixitup lib.

try {
  var mixer = mixitup($projectsList, {
    animation: {
      effects: 'fade translateZ(-100px)'
    },
  });

  // PROJECTS FILTER active btn

  function filterFunc(e) {
    if (e.target.classList.contains('projects__btn')) {
      let catFilter = e.target.getAttribute('data-filter');
      if (catFilter == 'all') {
        if (!e.target.classList.contains('projects__btn--active')) {
          this.querySelector('.projects__btn--active').classList.remove(
            'projects__btn--active'
          );
          e.target.classList.add('projects__btn--active');
        }
      } else {
        if (!e.target.classList.contains('projects__btn--active')) {
          this.querySelector('.projects__btn--active').classList.remove(
            'projects__btn--active'
          );
          e.target.classList.add('projects__btn--active');
          $projectsItem.forEach((item) => {
            if (item.dataset.cat != catFilter) {
              item.classList.remove('projects__btn--active');
            }
          });
        }
      }
    }
  }

  $projectsFilter.addEventListener('click', filterFunc, false);

} catch (err) {
  // console.log('Ошибка: ' + e.name);
}

// BURGER

$menuHeaderBurger.addEventListener('click', ()=> {
  $menuHeaderBurger.classList.toggle('_active');
  $menuHeaderNav.classList.toggle('_active');
  $headerTop.classList.toggle('_active');
});

const activeDelete = () => {
  $menuHeaderBurger.classList.remove('_active');
  $menuHeaderNav.classList.remove('_active');
  $headerTop.classList.remove('_active');
}

// resize plugin

const resizeContent = (
  selector,
  mobileWidth = 576,
  isPlugin,
  desktopAction = null,
  mobileAction = null
) => {
  if (!isPlugin) {
    if (window.innerWidth > mobileWidth) {
      desktopAction();
    } else {
      mobileAction();
    }
  } else {
    if (
      window.innerWidth <= mobileWidth &&
      selector.dataset.pluginActivated == 'false'
    ) {
      mobileAction();
      selector.dataset.pluginActivated = 'true';
    }
    if (window.innerWidth > mobileWidth) {
      desktopAction();
      selector.dataset.pluginActivated = 'false';
    }
  }
};

// RESIZE EVENTS

window.addEventListener('resize', () => {
  resizeContent(
    $menuHeaderBurger,
    480,
    true,
    activeDelete,
    ()=>{}
  );
});

// BTN-UP scroll to TOP

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    $upBtn.style.display = 'block';
  } else {
    $upBtn.style.display = 'none';
  }
});

$upBtn.addEventListener('click', () => {
  window.scroll({
    behavior: 'smooth',
    top: document.getElementById('top')
  });
});

//# sourceMappingURL=main.js.map
