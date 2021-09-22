export {};

const firstScrollBtnEl = document.querySelector('.js-first-scroll-btn');
const firstScrollFormEl = document.querySelector('.js-first-scroll-form');
const secondScrollBtnEl = document.querySelector('.js-second-scroll-btn');
const secondScrollFormEl = document.querySelector('.js-second-scroll-form');

firstScrollBtnEl?.addEventListener('click', () => {
  firstScrollFormEl?.scrollIntoView({ behavior: 'smooth' });
});

secondScrollBtnEl?.addEventListener('click', () => {
  secondScrollFormEl?.scrollIntoView({ behavior: 'smooth' });
});
