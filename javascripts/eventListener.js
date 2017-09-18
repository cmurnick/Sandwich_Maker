"use strict";

const main = require('./main');
const data = require('./data');
const dom = require('./dom');
const breads = require('./bread');
const cheeses = require('./cheese');
const condiments = require('./condiments');
const meats = require('./meat');
const veggies = require('./veggies');

const checkBox = document.getElementById("output");

const rewriteEvent = () => {
	checkBox.addEventListener("change", function(e) {
		console.log(e);
	var inputs = main.document.getElementsByTagName("input");
	var priceArray = 0;
	var chosenToppings = '';
	
	document.getElementById("finalSandwich").innerHTML = '';
	for(var i = 0; i < inputs.length; i++) {
	    if(inputs[i].type == "checkbox" && inputs[i].checked) {
	                chosenToppings += `<div>`;
	        chosenToppings += `<span> ${inputs[i].id} ${inputs[i].value} </span>`;
	        chosenToppings += `</div>`;

	        document.getElementById("finalSandwich").innerHTML = chosenToppings;

	        priceArray += parseFloat(inputs[i].value);
	        }
	}
	        document.getElementById("finalSandwich").innerHTML += priceArray;
	    }) ;
	};

module.exports = rewriteEvent;