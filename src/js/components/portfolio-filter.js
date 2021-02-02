import vars from '../_vars';

try {

  function filterFunc(e) {
    if (e.target.classList.contains('projects__btn')) {
      let catFilter = e.target.getAttribute('data-filter');
      if (catFilter == 'all') {
        if (!e.target.classList.contains('projects__btn--active')) {
          this.querySelector('.projects__btn--active').classList.remove(
            'projects__btn--active'
          );
          e.target.classList.add('projects__btn--active');
          vars.$projectsItem.forEach((item) => {
            item.classList.add('projects__hide-work');
            setTimeout(() => {
              item.classList.remove('projects__hide-work');
              item.classList.add('projects__fade-in');
            }, 20);
          });
        }
      } else {
        if (!e.target.classList.contains('projects__btn--active')) {
          this.querySelector('.projects__btn--active').classList.remove(
            'projects__btn--active'
          );
          e.target.classList.add('projects__btn--active');
          vars.$projectsItem.forEach((item) => {
            if (item.dataset.cat != catFilter) {
              item.classList.add('projects__hide-work');
              item.classList.remove('projects__btn--active');
            } else {
              item.classList.add('projects__hide-work');
              if (item.classList.contains('projects__fade-in')) {
                item.classList.remove('projects__fade-in');
              }
              setTimeout(() => {
                item.classList.remove('projects__hide-work');
                item.classList.add('projects__fade-in');
              }, 20);
            }
          });
        }
      }
    }
  }

  vars.$projectsFilter.addEventListener('click', filterFunc, false);
} catch (err) {

}
