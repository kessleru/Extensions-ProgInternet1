import { getExtensionsData } from './displayCards.js';
import { toggleOff, removeCard } from './cardFunctions.js';

function clearCards() {
  const gridCards = document.querySelector('.gridCards');
  gridCards.innerHTML = '';
}

function renderCards(cards) {
  const gridCards = document.querySelector('.gridCards');

  cards.forEach((card) => {
    const cardElement = document.createElement('article');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
      <div class="cardHeader">
        <img
          class="cardLogo"
          src="${card.logo}"
          alt="${card.name} logo"
        />
        <div class="cardInfo">
          <h3 class="cardTitle">${card.name}</h3>
          <p class="cardDescription">
            ${card.description}
          </p>
        </div>
      </div>
      <div class="cardActions">
        <button class="cardBtnRemove">Remove</button>
        <label class="cardToggle">
          <input class="cardToggleInput" type="checkbox" ${card.isActive ? 'checked' : ''} />
          <span class="cardToggleSlider"></span>
        </label>
      </div>
    `;

    gridCards.appendChild(cardElement);
  });

  toggleOff();
  removeCard();
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
    setActiveFilter(allButton);
    clearCards();
    renderCards(data);
  });

  activeButton.addEventListener('click', () => {
    const data = getExtensionsData();
    const activeCards = data.filter((card) => card.isActive === true);
    setActiveFilter(activeButton);
    clearCards();
    renderCards(activeCards);
  });

  inactiveButton.addEventListener('click', () => {
    const data = getExtensionsData();
    const inactiveCards = data.filter((card) => card.isActive === false);
    setActiveFilter(inactiveButton);
    clearCards();
    renderCards(inactiveCards);
  });
}

export { filterCards };
