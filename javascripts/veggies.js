"use strict";

const loadVeggies = (onVeggieLoad, errorList) => {
	const veggieLoader = new XMLHttpRequest();
	veggieLoader.addEventListener('load', onVeggieLoad);
	veggieLoader.addEventListener('error', errorList);
	veggieLoader.open('GET', '../data/meat.json');
	veggieLoader.send();
};

module.exports = loadVeggies;