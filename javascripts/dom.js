// "use strict";

// const outputDiv = document.getElementById('output');

// const domStrings = (message, input) => {
//     let price = Object.values(input);
//     let name = Object.keys(input);
//     let sandwichString = '';
   
//   	var domString2 = `<h3> ${message}</h3>`;
    
//     for (var i =0; i < name.length; i++) {
//        let domString = '';
      
// 	  domString +=   `<input type="checkbox" id="${name[i]}" class="${clazz}" value="${price[i]}">${name[i]}</input><br>`
//     sandwichString += domString;
//     }
//       writeToDom(domString2 + sandwichString);
//     }
  

// function writeToDom(strang) {
//     createSandwich.innerHTML += strang;
//     }

//   domStrings("Choose your bread:", myBread);
//   domStrings("Choose your cheese:", myCheese);
//   domStrings("Choose your condiments:", myCondiments);
//   domStrings("Choose your meat:", myMeat);
//   domStrings("Choose your veggies:", myVeggies);


// const printToDom = (gifArray) => {
// 	outputDiv.innerHTML = domOutput(gifArray);
// };

// module.exports = printToDom;