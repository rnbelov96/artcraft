export {};

let currentTab = 1;
const offset = 100;

const sliderEl = document.querySelector('.js-launch-slider') as HTMLDivElement;
const currentTabLabelEl = document.querySelector(
  '.js-current-tab',
) as HTMLParagraphElement;
const navBoxEl = document.querySelector('.js-nav-box');
const prevBtnEl = document.querySelector('.js-prev-btn') as HTMLButtonElement;
const nextBtnEl = document.querySelector('.js-next-btn') as HTMLButtonElement;

const btnClickHandler = (e: Event) => {
  const clickedBtn = e.currentTarget as HTMLButtonElement;

  navBoxEl?.children[currentTab - 1].classList.remove('launch__nav_active');

  if (clickedBtn.classList.contains('js-prev-btn')) {
    currentTab -= 1;
    if (currentTab === 1) {
      prevBtnEl.disabled = true;
    }
    if (currentTab === 4) {
      nextBtnEl.disabled = false;
    }
  } else {
    currentTab += 1;
    if (currentTab === 5) {
      nextBtnEl.disabled = true;
    }
    if (currentTab === 2) {
      prevBtnEl.disabled = false;
    }
  }
  navBoxEl?.children[currentTab - 1].classList.add('launch__nav_active');
  sliderEl.style.transform = `translateX(-${(currentTab - 1) * offset}%)`;
  currentTabLabelEl.textContent = `0${currentTab}`;
};

prevBtnEl.addEventListener('click', btnClickHandler);
nextBtnEl.addEventListener('click', btnClickHandler);
