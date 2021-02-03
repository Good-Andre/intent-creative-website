const navLink = document.querySelectorAll('.nav__link');

if (document.location.pathname === '/index.html' || document.location.pathname === '/') {
  navLink.forEach(item =>{
    if (item.pathname === '/index.html' || item.pathname === '/') {
      item.classList.add('nav__link--active');
    }
  })
} else if (document.location.pathname === '/blog.html') {
  navLink.forEach(item =>{
    if (item.pathname === '/blog.html') {
      item.classList.add('nav__link--active');
    }
  })
} else if (document.location.pathname === '/portfolio.html') {
  navLink.forEach(item =>{
    if (item.pathname === '/portfolio.html') {
      item.classList.add('nav__link--active');
    }
  })

} else if (document.location.pathname === '/contact.html') {
  navLink.forEach(item =>{
    console.log(item.pathname);
    if (item.pathname === '/contact.html') {
      item.classList.add('nav__link--active');
    }
  })
};

import './components/main-slider';
import './components/portfolio-filter';