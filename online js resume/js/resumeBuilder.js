var bio = {
	name: "Himanshu Mehta",
	role: "Web developer",
	contactInfo: {
		mobile: 9813212345,
		email: "helloWorld@xyz.com",
		github: "sample",
		twitter: "@sample",
		location: "india"},
	msg: "Hello WOrld!",
	biopic: "images/fry.jpg",
	skills: ["Cool","Funny","awesome"],

	displayBio: function(){
		var HTMLheader = HTMLheaderName.replace("%data%",bio.name);
		$('#header').append(HTMLheader);
		var headerRole = HTMLheaderRole.replace("%data%",bio.role);
		$('#header').append(headerRole);

		var mobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
		$("#header").append(mobile);
		var email = HTMLemail.replace("%data%",bio.contactInfo.email);
		$("#header").append(email);
		var github = HTMLgithub.replace("%data%",bio.contactInfo.github);
		$("#header").append(github);
		var twitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);	
		$("#header").append(twitter);
		var Hlocation = HTMLlocation.replace("%data%",bio.contactInfo.location);
		$("#header").append(Hlocation);
		var biopic = HTMLbioPic.replace("%data%",bio.biopic);	
		$("#header").append(biopic);
		var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.msg);
		$("#header").append(welcomeMsg);

		$("#header").append(HTMLskillsStart);
		if(bio.skills.length > 0){
			for(var skill in bio.skills){
					var skills = HTMLskills.replace("%data%",bio.skills[skill]);
					$("#header").append(skills);
				}
			}
		}
};

var project = {
	myProjects: [
	{
		title : "Online resume",
		date : "15th June 2017",
		desc : "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range.",
		pictures : ["images/fry.jpg"]
	},
	{
		title : "My android app",
		date : "15th March 2017",
		desc : "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range.",
		pictures : ["images/fry.jpg","images/fry.jpg"]
	}
	],

	display : function() {
		for(var projects in project.myProjects){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.myProjects[projects].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDate = HTMLprojectDates.replace("%data%",project.myProjects[projects].date);
			$(".project-entry:last").append(formattedProjectDate);
			var formattedProjectDesc = HTMLprojectDescription.replace("%data%",project.myProjects[projects].desc);
			$(".project-entry:last").append(formattedProjectDesc);
			for(var pic in project.myProjects[projects].pictures){
			var formattedProjectPicture = HTMLprojectImage.replace("%data%",project.myProjects[projects].pictures[pic]);
			$(".project-entry:last").append(formattedProjectPicture);
			}
		}
	}
};

var education = {
	schools: [
	{
		name: "St.Mary\'s School",
		location: "Hisar,Haryana,India",
		degree: "class 10",
		major:"CS",
		date:"2013"
	},
	{
		name: "Mother Khazani Convent School",
		location: "New Delhi,India",
		degree: "Class 12",
		major: "CS",
		date: "2015"
	}
	],
	onlineClasses: [
	{
		title: "github",
		school: "udacity",
		date: "2017",
		url: "www.udacity.com"
	},
	{
		title: "frontend nanodegree",
		school: "udacity",
		date: "2017",
		url: "www.udacity.com"
	}
	],
	display: function(){
		$("#education").append(HTMLschoolStart);
		for(var school in education.schools){
			var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var schoolTitle = schoolName + schoolDegree;
			$(".education-entry").append(schoolTitle);
			var schoolDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
			$(".education-entry").append(schoolDate);
			var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry").append(schoolLocation);
			var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry").append(schoolMajor);
		}

		$(".education-entry").append(HTMLonlineClasses);
		for(var classes in education.onlineClasses){
			var classTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[classes].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[classes].school);
			var onlineTitle = classTitle + onlineSchool;
			$(".education-entry").append(onlineTitle);
			var onlineDate = HTMLonlineDates.replace("%data%",education.onlineClasses[classes].date);
			$(".education-entry").append(onlineDate);
			var onlineUrl = HTMLonlineURL.replace("%data%",education.onlineClasses[classes].url);
			$(".education-entry").append(onlineUrl);
	}
	}
};

var work = {
	jobs: [
		{
			company: "My company",
			employer: "Software developer",
			date: "20-3-2017 to 20-4-2017",
			desc: "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range."
		},
		{
			company: "My company 2",
			employer: "Software testing",
			date: "21-4-2017 to 21-5-2017",
			desc: "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range."
		}
	],
	displayWork: function(){
		for(var works in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmp = HTMLworkEmployer.replace("%data%",work.jobs[works].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[works].company);
			var formattedEmpTitle = formattedWorkEmp + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmpTitle);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[works].date);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[works].desc);
			$(".work-entry:last").append(formattedDescription);
			}
		}
};

function displayFooter(){
var mobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
	$("#footerContacts").append(mobile);
	var email = HTMLemail.replace("%data%",bio.contactInfo.email);
	$("#footerContacts").append(email);
	var github = HTMLgithub.replace("%data%",bio.contactInfo.github);
	$("#footerContacts").append(github);
	var twitter = HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
	$("#footerContacts").append(twitter);
	var Hlocation = HTMLlocation.replace("%data%",bio.contactInfo.location);
	$("#footerContacts").append(Hlocation);
}


bio.displayBio();

work.displayWork();

project.display();

education.display();
$("#mapDiv").append(googleMap);

displayFooter();