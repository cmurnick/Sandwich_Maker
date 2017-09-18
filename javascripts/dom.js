"use strict";

const eventListener = require('./eventListener');
const data = require('./data');
const breads = require('./bread');
const Cheeses = require('./cheese');
const Condiments = require('./condiments');
const Meats = require('./meat');
const Veggies = require('./veggies');

const outputDiv = document.getElementById('output');

const domStrings = (message, input) => {
 	
    let price = Object.values(input);
    let name = Object.keys(input);
    let sandwichString = '';
   
  	var domString2 = `<h3> ${message}</h3>`;
    
    for (var i =0; i < name.length; i++) {
       let domString = '';
      
	  domString +=   `<input type="checkbox" id="${name[i]}" value="${price[i]}">${name[i]}</input><br>`;
    sandwichString += domString;
    }
      writeToDom(domString2 + sandwichString);
    };
  

function writeToDom(strang) {
    outputDiv.innerHTML += strang;
    }

  

module.exports = {domStrings};