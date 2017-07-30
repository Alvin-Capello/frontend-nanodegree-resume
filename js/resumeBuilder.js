var projects = {
	["Random Sentence Generator" : "https://github.com/Alvin-Capello/random-sentence-generator",
	"Portfolio Template" : "https://github.com/Alvin-Capello/portfolio-template",
	"Mock Google Front Page" : "https://github.com/Alvin-Capello/mock-google-front-page",
	"Mock Google Results Page" : "https://github.com/Alvin-Capello/mock-google-results-page",
	"Random Philosophy Quotes" : "https://github.com/Alvin-Capello/random-philosophy-quotes",
	"Kurt Godel Tribute Page" : "https://github.com/Alvin-Capello/kurt-godel-tribute-page",
	"Etch-A-Sketch" : "https://github.com/Alvin-Capello/etch-a-sketch",
	"Calculator" : "https://github.com/Alvin-Capello/calculator",
	"Restaurant Page" : "https://github.com/Alvin-Capello/restaurant-page",
	"Front End Nanodegree Resume" : "https://github.com/Alvin-Capello/frontend-nanodegree-resume"]
};


//$("#header").append(work["position"]);
//("#header").append(education.name);
function displayWork() {
if (bio.skills.length > 0) {

	$("#header").append(HTMLheaderName.replace("%data%",bio.name));
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.employer) + HTMLworkTitle.replace("%data%", work.position));
	
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.dates));
	
	for (var j = 0; j < work.description.length; j++) {
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.description[j]));
	};
}

displayWork();

function inName(string) {
	var lowStr = string.toLowerCase();
	var arrStr = lowStr.split(" ");
	var firstName = arrStr[0].charAt(0).toUpperCase() + arrStr[0].slice(1);
	var lastName = arrStr[1].toUpperCase();
	return firstName + ' ' + lastName;
}
	
$("#main").append(internationalizeButton);
$("#intButton").on("click", function() {
	var tag = $("#main").text();
	console.log(tag);
	"Alvin Capello".replace("Alvin Capello", inName("Alvin Capello"));
});

$("#projects").append(HTMLprojectStart);

for (property in projects) {
	var firstRep = HTMLprojectTitle.replace("#", projects[property]);
	$(".project-entry:last").append(firstRep.replace("%data%", property));
};

$("#education").append(HTMLschoolStart);

$(".education-entry:last").append(HTMLschoolName.replace("%data%", education["name"]));
$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education["degree"]));
$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education["years"]));
$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education["city"]));
$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education["major"]));
