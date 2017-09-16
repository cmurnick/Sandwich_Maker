"use strict";

const loadCheeses = (onCheeseLoad, errorList) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener('load', onCheeseLoad);
	cheeseLoader.addEventListener('error', errorList);
	cheeseLoader.open('GET', '../data/cheese.json');
	cheeseLoader.send();
};

module.exports = loadCheeses;