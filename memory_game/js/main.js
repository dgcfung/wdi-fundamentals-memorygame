console.log("Up and Running!");

//const cards = ["Queen","Queen","King","King"];

var cards =[
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png",
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",
}
]

const cardsInPlay = [];//empty array to hold cards in play

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}
}

function flipCard(cardID){
console.log("User Flipped " + cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);

console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);

console.log(cardsInPlay);//use to check if card pushed
console.log(cardsInPlay.length);//use to see cards inside cardsInPlay

const match= (cardsInPlay.length);

	if (match === 2){
		checkForMatch();
		}
}
//const match= (cardsInPlay.length);

//if (match === 2){
//	if(cardsInPlay[0] === cardsInPlay[1]){
//		alert("You found a match!");
//	}else{
//		alert("Sorry, try again.");
//	}
//}


flipCard(0);
flipCard(1);

//function checkForMatch(){
//	if (match === 2){
//		if(cardsInPlay[0] === cardsInPlay[1]){
//		alert("You found a match!");
//		}else{
//			alert("Sorry, try again.");
//		}
//}
//const match=(cardsInPlay.length);









//console.log(cardsInPlay);
//console.log(cardsInPlay.length);

//const match= (cardsInPlay.length);

//var cardOne= cards[0];

//cardsInPlay.push(cardOne);
//console.log("User flipped" + " " +  cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped" + " " +  cardTwo);


//var cardOne = "Queen";
//var cardTwo = "Queen";
//var cardThree = "King";
//var 1cardFour = "King";

//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardThree);