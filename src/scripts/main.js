'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((pop) => {
  return Number(pop.textContent.split(',').join(''));
});

const totalPopulation = populations.reduce((sum, population) => {
  return sum + population;
}, 0);

const averagePopulation = totalPopulation / populations.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
