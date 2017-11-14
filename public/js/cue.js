var content = [{
    "question": "What is the powerhouse of the cell?",
    "answer": "Mitochondria"
}, {
    "question": "What type of cells have cell walls?",
    "answer": "Plant Cells"
}, {
    "question": "What type of cells produce energy by Photosynthesis?",
    "answer": "Plant Cells"
}]

var currentId;

$(document).ready(function() {
    currentId = 0
    setContent(currentId);
    hideAnswer();
});

function setContent(id) {
    var num = id + 1;
    $("#card-count").html('<p>' + num + '/' + content.length + '</p>');
    $("#card-question").html('<h2 class="card-title text-center">' + content[id].question + '</h2>');
    $("#card-answer").html("<h3 class='card-title text-center'>" + content[id].answer + "</h3>");

}

function rate(rating) {
    if (currentId + 1 < content.length){
        currentId = currentId + 1;
        setContent(currentId);
        hideAnswer();
    }
}

function hideAnswer() {
    $("#card-answer").hide();
    $("#card-bottom-answer").hide();
    $("#card-bottom-question").show();
}


function showAnswer() {
    $("#card-answer").show();
    $("#card-bottom-question").hide();
    $("#card-bottom-answer").show();
}
