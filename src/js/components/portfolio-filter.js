import vars from '../_vars';
import mixitup from 'mixitup';

try {
  var mixer = mixitup(vars.$projectsList, {
    animation: {
      effects: 'fade translateZ(-100px)'
    },
  });

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
          vars.$projectsItem.forEach((item) => {
            if (item.dataset.cat != catFilter) {
              item.classList.remove('projects__btn--active');
            }
          });
        }
      }
    }
  }

  vars.$projectsFilter.addEventListener('click', filterFunc, false);
} catch (err) {
  // console.log('Ошибка: ' + e.name);
}
