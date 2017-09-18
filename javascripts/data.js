"use strict";

const eventListener = require('./eventListener');
const dom = require('./dom');
const breads = require('./bread');
const cheeses = require('./cheese');
const condiments = require('./condiments');
const meats = require('./meat');
const veggies = require('./veggies');

let sandwichArray = [];

const errorFunction = () => {
	console.log("You broke everything");
};

//When GIF Loads

const breadsLoad = function() {
	let breadArray = JSON.parse(this.responseText).bread;
	console.log("Bread Array", breadArray);
	dom.domStrings("Choose your bread:", breadArray);
	cheeses.loadCheeses(cheesesLoad, errorFunction);
	// (whenMeatsLoad, errorFunction);
};

const cheesesLoad = function() {
	let cheeseArray = JSON.parse(this.responseText).cheese;
	console.log("Cheese array", cheeseArray);
	dom.domStrings("Choose your cheese:", cheeseArray);
	condiments.loadCondiments(condimentsLoad, errorFunction);
};

const condimentsLoad = function() {
	let condimentsArray = JSON.parse(this.responseText).condiments;
	console.log("Condiments array", condimentsArray);
	dom.domStrings("Choose your condiments:", condimentsArray);
	meats.loadMeats(meatsLoad, errorFunction);
};

const meatsLoad = function() {
	let meatsArray = JSON.parse(this.responseText).meat;
	console.log("Meats array", meatsArray);
	dom.domStrings("Choose your meat:", meatsArray);
	veggies.loadVeggies(veggiesLoad, errorFunction);
};

const veggiesLoad = function() {
	let veggiesArray = JSON.parse(this.responseText).veggies;
	console.log("Veggies array", veggiesArray);
	dom.domStrings("Choose your veggies:", veggiesArray);
	eventListener.rewriteEvent();
};

// TODO: set up 'initializer' - load gifs
const initializer = () => {
	breads.loadBreads(breadsLoad, errorFunction);
};



module.exports = {initializer};