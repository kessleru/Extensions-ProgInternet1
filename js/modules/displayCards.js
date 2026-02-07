import { removeCard, toggleOff } from './cardFunctions.js';
import { getExtensionsData } from './fetchData.js';

function renderCards(card, index) {
  const gridCards = document.querySelector('.gridCards');

  const cardElement = document.createElement('article');
  cardElement.classList.add('card');
  cardElement.dataset.name = card.name;

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

  toggleOff();
  removeCard();

  gridCards.appendChild(cardElement);
}

function initDisplayCards() {
  const data = getExtensionsData();

  data.forEach((card, index) => {
    renderCards(card, index);
  });
}

export { initDisplayCards, renderCards };
