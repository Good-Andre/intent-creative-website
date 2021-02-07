const vars = {
  $introSlider: document.querySelector('.home__slider'),
  $mainSliderThumbs: document.querySelector('.home__slider-thumbs'),
  $projectsFilter: document.querySelector('.projects__filter'),
  $projectsItem: document.querySelectorAll('.projects__item'),
  $projectsList: document.querySelector('.projects__list'),
  $menuHeaderBurger: document.querySelector('.menu-header__burger'),
  $menuHeaderNav: document.querySelector('.menu-header__nav'),
  $headerTop: document.querySelector('.header__top'),
}

const navLink = document.querySelectorAll('.nav__link');
const gitUrl = "/intent-creative-website/app";

if (document.location.pathname === gitUrl + '/index.html' || document.location.pathname === gitUrl + '/') {
  navLink.forEach(item =>{
    if (item.pathname === gitUrl + '/index.html' || item.pathname === gitUrl + '/') {
      item.classList.add('nav__link--active');
    }
  })
} else if (document.location.pathname === gitUrl + '/blog.html') {
  navLink.forEach(item =>{
    if (item.pathname === gitUrl + '/blog.html') {
      item.classList.add('nav__link--active');
    }
  })
} else if (document.location.pathname === gitUrl + '/portfolio.html') {
  navLink.forEach(item =>{
    if (item.pathname === gitUrl + '/portfolio.html') {
      item.classList.add('nav__link--active');
    }
  })

} else if (document.location.pathname === gitUrl + '/contact.html') {
  navLink.forEach(item =>{
    console.log(item.pathname);
    if (item.pathname === gitUrl + '/contact.html') {
      item.classList.add('nav__link--active');
    }
  })
};

import './components/main-slider';
import './components/portfolio-filter';

vars.$menuHeaderBurger.addEventListener('click', ()=> {
  vars.$menuHeaderBurger.classList.toggle('_active');
  vars.$menuHeaderNav.classList.toggle('_active');
  vars.$headerTop.classList.toggle('_active');
});