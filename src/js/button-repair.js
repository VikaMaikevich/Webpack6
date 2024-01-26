document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.section-repair__content-button-down');
    const mainContent = document.querySelector('.section-repair__swiper');
    const textButton = document.querySelector('.section-repair__content-button-down_text');
    const svgArrows = document.querySelector('.section-repair__content-button-down-blue');
    let isHidden = true;
  
    openButton.addEventListener('click', () => {
      if (!isHidden) {
        mainContent.style.height = "164px";
        textButton.textContent = 'Показать все';
        svgArrows.classList.remove('section-repair__content-button-down-blue--hide');
      } else {
        mainContent.style.height = mainContent.scrollHeight + "px";
        textButton.textContent = 'Скрыть';
        svgArrows.classList.add('section-repair__content-button-down-blue--hide');
      }
      isHidden = !isHidden;
    });
  }); 
