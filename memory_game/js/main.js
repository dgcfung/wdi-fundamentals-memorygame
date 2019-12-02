console.log("Up and Running!");

const cards = ["Queen","Queen","King","King"];
const cardsInPlay = [];//empty array to hold cards in play

var cardOne= cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped" + " " +  cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " +  cardTwo);

console.log(cardsInPlay);
console.log(cardsInPlay.length);

const match= (cardsInPlay.length);

if (match === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}
}


//var cardOne = "Queen";
//var cardTwo = "Queen";
//var cardThree = "King";
//var 1cardFour = "King";

//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardThree);