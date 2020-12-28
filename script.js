// Selectors
const openBtnEl = document.querySelector('.btn-open');
const nextBtnEl = document.querySelector('.btn-next');
const giftEl = document.querySelector('.gift');
const capEl = document.querySelector('.cap');
let randomColor;

const giftPartsEl = [
  document.querySelector('.gift-box'),
  ...document.querySelectorAll('.cap-red-stripe'),
  ...document.querySelectorAll('.red-stripe'),
  document.querySelector('.bottom'),
];

const generateColor = () => {
  const color = Math.trunc(Math.random() * 3);
  switch (color) {
    case 0:
      return 'red';
    case 1:
      return 'blue';
    case 2:
      return 'green';
  }
};

(function init() {
  randomColor = generateColor();
  giftPartsEl.forEach((el) => {
    el.classList.add(randomColor);
  });
})();

const changeGiftColor = () => {
  giftPartsEl.forEach((el) => {
    el.classList.remove(randomColor);
  });
  randomColor = generateColor();
  giftPartsEl.forEach((el) => {
    el.classList.add(randomColor);
  });
};

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
    changeGiftColor();
    setTimeout(() => {
      giftEl.classList.remove('appear');
      nextBtnEl.disabled = false;
      openBtnEl.disabled = false;
    }, 1000);
  }, 1000);
};

openBtnEl.addEventListener('click', openGift);
nextBtnEl.addEventListener('click', nextGift);
