/* eslint-disable no-param-reassign */
export {};

const leftColor = '#FADE40';
const rightColor = '#ffffff';

const rangeElList = document.querySelectorAll('.js-range');

const rentRange = document.querySelector('.js-rent-range') as HTMLInputElement;
const trainingRange = document.querySelector(
  '.js-training-range',
) as HTMLInputElement;
const clientsRange = document.querySelector(
  '.js-clients-range',
) as HTMLInputElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let rentCurrentStep = 2;
let trainingCurrentStep = 2;
let clientsCurrentStep = 2;

const calcResult = () => {
  result = (Number(rentRange.value) * 3000
      + Number(trainingRange.value) * 34000
      + Number(clientsRange.value) * 1500)
    * 0.25;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

rentRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  rentCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (rentCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (rentCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

trainingRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  trainingCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (trainingCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (trainingCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

clientsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  clientsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (clientsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (clientsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
