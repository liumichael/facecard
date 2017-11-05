var groups = ["BIO100", "BIO101", "BIO102", "BIO103", "BIO104", "BIO105"];


$(function() {
	makeGroupList();
});


function makeGroupList() {
	for (index in groups) {
		$('#group-list').append("<li><a href='/group' class='group'><span><strong>" + groups[index] + "</strong></span></a></li>");
	}
}
