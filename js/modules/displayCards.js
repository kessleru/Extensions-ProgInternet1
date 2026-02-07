import { removeCard, toggleOff } from './cardFunctions.js';
import { getExtensionsData } from './fetchData.js';

function renderCards(card, index) {
  const gridCards = document.querySelector('.grid-cards');

  const cardElement = document.createElement('article');
  cardElement.classList.add('card');
  cardElement.dataset.name = card.name;

  cardElement.innerHTML = `
    <div class="card-header">
      <img
        class="card-logo"
        src="${card.logo}"
        alt="${card.name} logo"
      />
      <div class="card-info">
        <h3 class="card-title">${card.name}</h3>
        <p class="card-description">
          ${card.description}
        </p>
      </div>
    </div>
    <div class="card-actions">
      <button class="card-btn-remove">Remove</button>
      <label class="card-toggle">
        <input class="card-toggle-input" type="checkbox" ${card.isActive ? 'checked' : ''} />
        <span class="card-toggle-slider"></span>
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
