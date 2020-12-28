// Selectors
const openBtnEl = document.querySelector('.btn-open');
const nextBtnEl = document.querySelector('.btn-next');
const giftEl = document.querySelector('.gift');
const capEl = document.querySelector('.cap');

const openGift = () => {
  capEl.classList.add('open');
  openBtnEl.disabled = true;
};

const nextGift = () => {
  nextBtnEl.disabled = true;
  openBtnEl.disabled = true;
  giftEl.classList.add('fall');

  setTimeout(() => {
    capEl.classList.remove('open');
    giftEl.classList.remove('fall');
    giftEl.classList.add('appear');
    setTimeout(() => {
      giftEl.classList.remove('appear');
      nextBtnEl.disabled = false;
      openBtnEl.disabled = false;
    }, 1000);
  }, 1000);
};

openBtnEl.addEventListener('click', openGift);
nextBtnEl.addEventListener('click', nextGift);
