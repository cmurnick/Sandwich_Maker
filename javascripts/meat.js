"use strict";

const loadMeats = (onMeatLoad, errorList) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener('load', onMeatLoad);
	meatLoader.addEventListener('error', errorList);
	meatLoader.open('GET', '../data/meat.json');
	meatLoader.send();
};

module.exports = {loadMeats};