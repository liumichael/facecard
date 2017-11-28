var decks = { "Test 1": ["midochondria 1", "midochondria 2"], "Test 2": ["membrane 1"], "Test 3": ["enzymes 1"], "Exam": ["virus 1"] };

var cards = {"midochondria 1": {}, "midochondria 2": {}, "membrane 1": {}, "enzymes 1": {}, "virus 1": {}};

var announcements = ["TEST 1: October 31st, 2017", "TEST 2: To be decided", "FINAL EXAM: February 9th, 2018"];
var announcementDetails = ["Coverage: Chapter 1 to and including Chapter 3.", "Coverage: Chapter 3 to (and including) Chapter 7.", "Coverage: Chapter 1 to and including Chapter 12"]

var groups = ["BIO100", "BIO101", "BIO102", "BIO103", "BIO104", "BIO105"];

$(function () {
    makeAnnouncements(); 
    makeDecks();

    $(".exit").click(function(){
        $(".overlay").hide();
    });
});

function addNewDeck() {
	var deckName = document.getElementById("new-deck-name").value;

	decks[deckName] = [];

	document.getElementById("deck-list").innerHTML = '';

	makeDecks();

	hideOverlay('new-deck-overlay');
}

function makeAnnouncements() {
    for (index in announcements) {
        $('#announcement-list').append("<li><span><strong>" + announcements[index] + "</strong></span></li>");
        $('#announcement-list').append("<p style='font-size:20px'> " + announcementDetails[index] + "</p>");
    }
}

function makeDecks() {
    for (deck in decks) {
        $('#deck-list').append("<div id='" + deck + "' class='cards' onclick='showOverlay(this.id)'><button><h1><strong>" + deck + "</strong></h1></button></div>");
    }
}

function showPopup(id) {
	document.getElementById(id).style.display = "block";
}

function addNewDeck() {
	var deckName = document.getElementById("new-deck-name").value;

	decks[deckName] = [];

	document.getElementById("deck-list").innerHTML = '';

	makeDecks();

	hideOverlay('new-deck-overlay');
}

function addNewCard() {
	var deckName = document.getElementById("new-card-name").value;
	var question = document.getElementById("new-card-question").value;
	var answer = document.getElementById("new-card-answer").value;


	decks[openedDeck].push(deckName);
	cards[deckName] = {"question": question, "answer": answer};

	showOverlay(openedDeck);
	hideOverlay('new-card-overlay');
}

function showOverlay(id) {
    document.getElementById("catalog").innerHTML = '';
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

