document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.section__content-button-down');
    const mainContent = document.querySelector('.swiper');
    const textButton = document.querySelector('.section__content-button-down_text');
    const svgArrows = document.querySelector('.section__content-button-down-blue');
    let isHidden = true;
  
    openButton.addEventListener('click', () => {
      if (!isHidden) {
        mainContent.style.height = "164px";
        textButton.textContent = 'Показать все';
        svgArrows.classList.remove('section__content-button-down-blue--hide');
      } else {
        mainContent.style.height = mainContent.scrollHeight + "px";
        textButton.textContent = 'Скрыть';
        svgArrows.classList.add('section__content-button-down-blue--hide');
      }
      isHidden = !isHidden;
    });
  });
  