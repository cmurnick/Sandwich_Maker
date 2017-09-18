"use strict";

const loadCondiments = (onCondimentLoad, errorList) => {
	const condimentLoader = new XMLHttpRequest();
	condimentLoader.addEventListener('load', onCondimentLoad);
	condimentLoader.addEventListener('error', errorList);
	condimentLoader.open('GET', '../data/condiments.json');
	condimentLoader.send();
};

module.exports = {loadCondiments};