var groups = ["BIO100", "BIO101", "BIO102", "BIO103", "BIO104", "BIO105"];


var decks = {"BIO100 test 1":["hi"], "BIO100 test 2":["hello"], "BIO100 test 3":["hello"], "BIO100 final": ["hello"]};


$(function() {
	makeGroupList();
	makeDecks();
});


function makeGroupList() {
	for (index in groups) {
		$('#group-list').append("<li><a href='/group' class='group'><span><strong>" + groups[index] + "</strong></span></a></li>");
	}
}

function makeDecks() {
	for (deck in decks) {
		$('#deck-list').append("<div id='" + deck + "' class='cards' onclick='showOverlay(this.id)'><button><h1><strong>" + deck + "</strong></h1></button></div>");
	}
}

function showOverlay(id) {
	document.getElementById("deck-overlay").style.display = "block";
	
	var listOfCards = decks[id];

	
	for (index in listOfCards) {
		console.log(listOfCards[index]);
		$('#catalog').append("<li class='card' id='" + listOfCards[index] + "'><h1><strong>" + listOfCards[index] + "</strong></h1></li>");
	}
}

