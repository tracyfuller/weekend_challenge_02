var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];﻿
var count;
var newArray;
var dividedTeams = 0;
function clearTeams (){
	$(".table").empty();
}

$(document).ready(function(){
	$(".numButton").click(function(){
		$(this).siblings().removeClass("numButton-highlight");
		dividedTeams = $(this).data("numteams");
		$(this).addClass("numButton-highlight");
	})

	$(".generate").on("click", function(){
		clearTeams();

		if (dividedTeams == 0) {
			alert("Please pick the number of groups you wish to generate");
		} else {
			newArray = _.shuffle(people);
			for (var i = 0; i < dividedTeams; i++){
				$(".table").append("<div class='column list" + i + "'><p><u>Team " + (i+1) + "</u></p></div>");
			};
			count = 0 
			for (var j = 0; j < newArray.length; j++){

				$(".list" + count).append("<p>" + newArray[j] + "</p>").hide().fadeIn("fast");
				count++;
				if (count >= dividedTeams){
					count = 0;
				};
			};
		};
	});
});