// Selectors
const openBtnEl = document.querySelector('.btn-open');
const capEl = document.querySelector('.cap');

const openGift = () => {
  capEl.classList.add('open');
};

openBtnEl.addEventListener('click', openGift);
