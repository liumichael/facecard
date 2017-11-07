$(document).ready(function() {
    $("#cueCardBack").hide();
    
    $("revealAnswer").click(function() {
        $("#cueCardFront").hide();
        $("#cueCardBack").show();
    });
});
