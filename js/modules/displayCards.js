async function loadData() {
  try {
    const response = await fetch('./data.json');
    const extensions = await response.json();

    console.log(extensions);

    return extensions;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

function displayCards(card) {
  const gridCards = document.querySelector('.gridCards');
  
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
        <input type="checkbox" ${card.isActive ? 'checked' : ''} />
        <span class="cardToggleSlider"></span>
      </label>
    </div>
  `;
  
  gridCards.appendChild(cardElement);
}

async function initDisplayCards() {
  const data = await loadData();

  data.forEach(card => {
    displayCards(card);
  });
}

export { loadData, displayCards, initDisplayCards };
