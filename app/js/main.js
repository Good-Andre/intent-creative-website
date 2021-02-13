const $navLink=document.querySelectorAll(".nav__link"),$introSlider=document.querySelector(".home__slider"),$mainSliderThumbs=document.querySelector(".home__slider-thumbs"),$projectsFilter=document.querySelector(".projects__filter"),$projectsItem=document.querySelectorAll(".projects__item"),$projectsList=document.querySelector(".projects__list"),$menuHeaderBurger=document.querySelector(".menu-header__burger"),$menuHeaderNav=document.querySelector(".menu-header__nav"),$headerTop=document.querySelector(".header__top"),$contactForm=document.getElementById("footer-form"),$upBtn=document.querySelector(".up-btn"),galleryThumbsItem=new Swiper($mainSliderThumbs,{spaceBetween:1,slidesPerView:10,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,allowTouchMove:!1}),introSliderItem=new Swiper($introSlider,{loop:!0,slidesPerView:1,grabCursor:!0,navigation:{nextEl:".slider-btns__next",prevEl:".slider-btns__prev"},autoplay:{delay:5e3,disableOnInteraction:!1},speed:400,keyboard:{enabled:!0},thumbs:{swiper:galleryThumbsItem},pagination:{el:".home__slider-pagination",clickable:!0}});try{var mixer=mixitup($projectsList,{animation:{effects:"fade translateZ(-100px)",animateResizeTargets:!0}});function filterFunc(e){if(e.target.classList.contains("projects__btn")){let t=e.target.getAttribute("data-filter");"all"==t?e.target.classList.contains("projects__btn--active")||(this.querySelector(".projects__btn--active").classList.remove("projects__btn--active"),e.target.classList.add("projects__btn--active")):e.target.classList.contains("projects__btn--active")||(this.querySelector(".projects__btn--active").classList.remove("projects__btn--active"),e.target.classList.add("projects__btn--active"),$projectsItem.forEach(e=>{e.dataset.cat!=t&&e.classList.remove("projects__btn--active")}))}}$projectsFilter.addEventListener("click",filterFunc,!1),$contactForm.addEventListener("submit",e=>{e.preventDefault(),$contactForm.reset()})}catch(e){}$menuHeaderBurger.addEventListener("click",()=>{$menuHeaderBurger.classList.toggle("_active"),$menuHeaderNav.classList.toggle("_active"),$headerTop.classList.toggle("_active")});const activeDelete=()=>{$menuHeaderBurger.classList.remove("_active"),$menuHeaderNav.classList.remove("_active"),$headerTop.classList.remove("_active")},resizeContent=(e,t=576,r,s=null,i=null)=>{r?(window.innerWidth<=t&&"false"==e.dataset.pluginActivated&&(i(),e.dataset.pluginActivated="true"),window.innerWidth>t&&(s(),e.dataset.pluginActivated="false")):window.innerWidth>t?s():i()};window.addEventListener("resize",()=>{resizeContent($menuHeaderBurger,480,!0,activeDelete,()=>{})}),window.addEventListener("scroll",()=>{window.scrollY>400?$upBtn.classList.add("_btn-show"):$upBtn.classList.remove("_btn-show")}),$upBtn.addEventListener("click",()=>{window.scroll({behavior:"smooth",top:document.getElementById("top")})});