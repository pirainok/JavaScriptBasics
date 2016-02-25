var bio = {
	"name":"Kevin Piraino",
	"age":24,
	"skills":["GIS", "SQL", "JavaScript", "Remote Sensing"],
	"role":"GIS Developer",
	"contacts":{
		"email":"pirainok@msu.edu",
		"phone":"630-201-4755"
	},
	"photo":"C:\\Users\\Kevin\\Documents\\GradSchool\\Programming stuff\\Udacity\\JavaScript\\frontend-nanodegree-resume-master\\images\\Kevin_grad.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.photo);
$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedPic);
var formattedEmail = HTMLemail.replace("%data%", ": " + bio.contacts.email);
var formattedPhone = HTMLmobile.replace("%data%", ": " + bio.contacts.phone);
$("#topContacts").append(formattedEmail, formattedPhone);



if(bio.skills.length >0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
}




	
var work = {
	"jobs":[
	{
		"position":"Teaching Assistant",
		"employer":"Michigan State University",
		"dateWorked": "Aug. 2014 - May 2016",
		"city":"East Lansing, Michigan",
		"description":"GEO 206 – Physical Geography: TA for course, created quizzes and tests, graded quizzes, tests, and other assignments. GEO 206L – Physical Geography Laboratory: Instructor for course, prepared lectures, administered tests, graded tests and lab assignments, led instructional field trips, taught non-GIS users basic GIS and ArcGIS tools and functions. GEO 221 – Introduction to Geographic Information: TA for course, graded quizzes and other assignments, technical assistance GIS related information."
	},
	{
		"position":"Research Assistant",
		"employer":"Michigan State University",
		"dateWorked":"Aug. 2015 - May 2016",
		"city":"East Lansing, Michigan",
		"description":"Quantifying vegetation change in Michigan critical dune areas. Use of eCognition to segment and classify aerial photography of Michigan costal dune fields."
	},
	{
		"position":"GIS Intern",
		"employer":"City of Naperville",
		"dateWorked":"May. 2015 - Aug. 2015",
		"city":"Naperville, Illinois",
		"description":"Georeferenced and digitized homes, buildings, parking lots, roads, subdivisions, parcels, storm water infrastructure, and transportation data. Worked with team to create web maps and applications using ArcGIS Online & Arc Collector for transportation data collection. Created temporal parking rate maps for the city. Documented metadata and workflow for web application and data creation methods"
	},
	{
		"position":"Seasonal Road Crew",
		"employer":"DuPage County Forest Preserve",
		"dateWorked":"May 2014 - Aug. 2014",
		"city":"Wheaton, Illinois",
		"description":"GPS Mapping of storm water infrastructure in Forest Preserve Parks. Data management of GIS data in ArcGIS. Creation of storm water infrastructure maps. Sole employee responsible for GIS data collection and maintenance of storm water maintenance data in road crew. Assisted road crew in street and parking lot maintenance in Forest Preserve Parks."
	},
	{
		"position":"Seasonal Road Crew",
		"employer":"DuPage County Forest Preserve",
		"dateWorked":"May 2013 - Aug. 2013",
		"city":"Wheaton, Illinois",
		"description":"GPS Mapping of storm water infrastructure in Forest Preserve Parks. Data management of GIS data in ArcGIS. Creation of storm water infrastructure maps. Assisted other employees with GIS data collection and maintenance of storm water infrastructure. Assisted road crew in street and parking lot maintenance in Forest Preserve Parks."
	}	
]}

var displayWork = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dateWorked);
		$(".work-entry:last").append(formattedworkDates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
	
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});


function inName(){
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}
var name = $("#name").text();
//var nameArray = name.split(" ");

$("#main").append(internationalizeButton);

var education = {
	"schools:":[
	{
		"name":"Indiana State University",
		"years":"2010-2014",
		"degree":"B.S",
		"major":"Human & Environmental Sciences: GIScience",
		"locations":"Terre Haute, Indiana"
	},
	{
		"name":"Michigan State University",
		"years":"2014-2016",
		"degree":"M.S",
		"major": "GIScience",
		"locations":"East Lansing, Michigan"
	}]
}

education.display = function(){
	for (school in education.schools){
		$("education").append(HTMLschoolStart);
		var formattedName = HTMLschoolTitle.replace("%data%",education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].locations)
		
		$(".education-entry:last").append(formattedName, formattedLocation, formattedDates, formattedDegree, formattedMajor);
	}
}
education.display();


var projects = {
	"projects":[
	{		
		"title":"Sample Project 1",
		"date":"Aug.2014",
		"description":"This is a sample project. It does not mean anything."
	},
	{
		"title":"Sample Project 2",
		"date":"Sep. 2012",
		"description":"This is a sample project. It does not mean anything."
	}]
}

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDate);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}	
}

projects.display();

//$("mapDiv").append(googleMap);


/* var projects = {
	"RA":"Quantifying Vegetation Increases Across Critical Dune Areas Within the State of Michigan"
} */