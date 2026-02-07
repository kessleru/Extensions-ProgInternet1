import { getExtensionsData } from './fetchData.js';

function toggleOff() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const toggle = card.querySelector('.card-toggle input');
    const data = getExtensionsData();
    const cardName = card.dataset.name;
    const index = data.findIndex((item) => item.name === cardName);

    if (toggle) {
      if (!toggle.checked) {
        card.classList.add('inactive');
      }

      toggle.addEventListener('change', () => {
        if (!toggle.checked) {
          data[index].isActive = false;
          card.classList.add('inactive');
        } else {
          data[index].isActive = true;
          card.classList.remove('inactive');
        }
      });
    }
  });
}

function removeCard() {
  const removeButtons = document.querySelectorAll('.card-btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const data = getExtensionsData();

      if (card) {
        const cardName = card.dataset.name;
        const index = data.findIndex((item) => item.name === cardName);
        data.splice(index, 1);

        card.remove();
      }
    });
  });
}

export { toggleOff, removeCard };
