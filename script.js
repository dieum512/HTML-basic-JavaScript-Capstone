import data from './datainfo.js';

const click = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const header = document.querySelector('.main-header');
const myCards = data.card;

click.addEventListener('click', () => {
  click.classList.toggle('active');
  menu.classList.toggle('active');
  header.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  click.classList.remove('active');
  menu.classList.remove('active');
  header.classList.remove('active');
}));

const cardGrid = document.querySelector('.rappers-cards-container');

function implementCards() {
  myCards.forEach((card) => {
    const cardArticle = `
    <div class="card-div">
      <div class="card-image">
        <img src="${card.cardImage}" alt="${card.cardAlt}" />
      </div>
      <div class="rapper-story">
        <h3>${card.cardName}</h3>
        <h5>${card.cardInfo}</h5>
        <hr />
        <p>
          ${card.cardDetail}
        </p>
      </div>
    </div>
    `;
    cardGrid.innerHTML += cardArticle;
  });
}

implementCards();
