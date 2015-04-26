var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];﻿
var count;
var newArray;
var dividedTeams = 0;
function clearTeams (){
	$(".table").empty();
}


$(document).ready(function(){
	$(".numButton").click(function(){
		dividedTeams = $(this).data("numteams");
		console.log("number of teams chosen: " + dividedTeams);
	})

	$(".generate").on("click", function(){
		clearTeams();

		if (dividedTeams == 0) {
			alert("Please pick the number of groups you wish to generate");
		} else {
			newArray = _.shuffle(people);
			console.log("original", people);
			console.log("new array", newArray);
			for (var i = 0; i < dividedTeams; i++){

				$(".table").append("<div class='column list" + i + "'><p><u>Team " + (i+1) + "</u></p></div>");
			};
			count = 0 
			for (var j = 0; j < newArray.length; j++){

				if (count >= dividedTeams){
					count = 0;
				} else {
					$(".list" + count).append("<p>" + newArray[j] + "</p>");
					count++;
				};
			};
			

		
		};
	});

});
