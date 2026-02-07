import { renderCards } from './displayCards.js';
import { getExtensionsData } from './fetchData.js';

function clearCards() {
  const gridCards = document.querySelector('.grid-cards');
  gridCards.innerHTML = '';
}

function renderCardList(cards) {
  cards.forEach((card, index) => {
    renderCards(card, index);
  });
}

function setActiveFilter(activeButton) {
  const filters = document.querySelectorAll('.filter');
  filters.forEach((filter) => filter.classList.remove('on'));
  activeButton.classList.add('on');
}

function filterCards() {
  const allButton = document.getElementById('all');
  const activeButton = document.getElementById('active');
  const inactiveButton = document.getElementById('inactive');

  allButton.addEventListener('click', () => {
    const data = getExtensionsData();
    if (!data) {
      return;
    }
    setActiveFilter(allButton);
    clearCards();
    renderCardList(data);
  });

  activeButton.addEventListener('click', () => {
    const data = getExtensionsData();
    if (!data) {
      return;
    }
    const activeCards = data.filter((card) => card.isActive === true);
    setActiveFilter(activeButton);
    clearCards();
    renderCardList(activeCards);
  });

  inactiveButton.addEventListener('click', () => {
    const data = getExtensionsData();
    if (!data) {
      return;
    }
    const inactiveCards = data.filter((card) => card.isActive === false);
    setActiveFilter(inactiveButton);
    clearCards();
    renderCardList(inactiveCards);
  });
}

export { filterCards };
