document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.more-button');
    const mainContent = document.querySelector('.text-all__text');
    const textButton = document.querySelector('.text-all__button-text');
    const svgArrows = document.querySelector('.more-button__down-blue');
    let isHidden = true;
  
    openButton.addEventListener('click', () => {
      if (!isHidden) {
        mainContent.style.height = "134.5px";
        textButton.textContent = 'Читать далее';
        svgArrows.classList.remove('more-button__down-blue--hide');
      } else {
        mainContent.style.height = mainContent.scrollHeight + "px";
        textButton.textContent = 'Скрыть';
        svgArrows.classList.add('more-button__down-blue--hide');
      }
      isHidden = !isHidden;
    });
  });
  