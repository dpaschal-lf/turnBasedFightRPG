
$(document).ready(initializeApp);

var game;
function initializeApp(){
	game = new RPG();

	game.createCharacter('Kelsey','Merchant');
	game.createCharacter('Brian','Slave');
}

document.querySelector('button').addEventListener('click', function(){
	game.startBattle(game.characters)
});




