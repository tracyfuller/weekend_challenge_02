var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];﻿
var newArray;
var dividedTeams;


$(document).ready(function(){
	$(".numButton").click(function(){
		dividedTeams = $(this).data("numteams");
		console.log("number of teams chosen: " + dividedTeams);
	})

	$(".generate").on("click", function(){
		if (dividedTeams > 0) {
			newArray = _.shuffle(people);
			// console.log("original", people);
			// console.log("new array", newArray);
			for (var i = 0; i < dividedTeams; i++){
				$(".table").append("<div class='column list" + (i+1) + "'><p><u>Team " + (i+1) + "</u></p><p>Some stuff here</p></div>");
			}
			

		} else {
			alert("Please pick the number of groups you wish to generate");
		};
	});

});
