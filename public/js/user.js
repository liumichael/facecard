var groups = ["BIO100", "BIO101", "BIO102", "BIO103", "BIO104", "BIO105"];


var decks = {"BIO100 test 1":["midochondria 1", "midochondria 2"], "BIO100 test 2":["membrane 1"], "BIO100 test 3":["enzymes 1"], "BIO100 final": ["virus 1"]};


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
		$('#catalog').append("<li class='card' id='" + listOfCards[index] + "'><button><h1><strong>Click to show card</strong></h1></button></li>");
	}
}

function hideOverlay() {
	
	document.getElementById("catalog").innerHTML = '';
	
	document.getElementById("deck-overlay").style.display = "none";
}

