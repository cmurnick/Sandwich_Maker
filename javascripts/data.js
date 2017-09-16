"use strict";

const printToDom = require('./dom');
const breads = require('./bread');
const Cheeses = require('./cheese');
const Condiments = require('./condiments');
const Meats = require('./meat');
const Veggies = require('./veggies');

let sandwichArray = [];

const errorFunction = () => {
	console.log("You broke everything");
};

//When GIF Loads

const breadsLoad = function() {
	let breadArray = JSON.parse(this.responseText).bread;
	console.log("Bread Array", breadArray);
// 	writeToDom("Choose your bread:", breadArray);
// 	loadMeats(whenMeatsLoad, errorFunction);
};




// TODO: set up 'initializer' - load gifs
const initializer = () => {
	breads.loadBreads(breadsLoad, errorFunction);
};



module.exports = {initializer};