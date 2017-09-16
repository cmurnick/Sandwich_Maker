"use strict";

const loadBreads = (onBreadLoad, errorList) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener('load', onBreadLoad);
	breadLoader.addEventListener('error', errorList);
	breadLoader.open('GET', '../data/bread.json');
	breadLoader.send();
};

module.exports = {loadBreads};