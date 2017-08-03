/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /* bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional. */

var bio = {
  "name" : "Jewel Jacob",
  "role" : "System Engineer" ,
  "welcomeMessage" : "Hello there",
  "biopic" : "http://sample.com/dp.jpg",
  "contacts" : {
    "mobile" : "+91 7736847936",
    "email" : "jewelsmail@tkgrp.com",
    "github" : "jewlshub",
    "twitter" : "jewltweet",
    "location" : "Aloor"
  },
  "skills" : ["HTML", "CSS", "JavaScript", "AJAX", "jQuery"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Infosys",
      "title" : "System Engneer",
      "location" : "Mysore",
      "datesWorked" : ["29/10/16 - 16/12/16", "29/02/17 - 16/11/17"],
      "description" : "It was a good experience working there as a system engg.it will be good if those who see thid add something to this. my mind is totally blank about what to type. So i do this - blah blah kla kli klu klakla my heart is thirsty to get your lofe, and ill go to ny end to get that. If god allows me none will stand in my path. youre mine.blum blah jewel is my name cheese is very good for health. butter is fatty and cholestrol.bbuu ugqjd utursi wyidv njdjiuef."
    },
    {
      "employer" : "Google",
      "title" : "Web developers",
      "location" : "LA",
      "datesWorked" : ["29/10/16 - 16/12/16", "29/02/17 - 16/11/17"],
      "description" : "It was a good experience working there as a Web Dev. It was a good experience working there as a system engg.it will be good if those who see thid add something to this. my mind is totally blank about what to type. So i do this - blah blah kla kli klu klakla my heart is thirsty to get your lofe, and ill go to ny end to get that. If god allows me none will stand in my path. youre mine.blum blah jewel is my name cheese is very good for health. butter is fatty and cholestrol.bbuu ugqjd utursi wyidv njdjiuef."
    }
  ]
};
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var logEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var logTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var logEmpDetail = logEmp + logTitle;

    $(".work-entry:last").append(logEmpDetail);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].datesWorked));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
  }
}

var projects = {
  "projects" : [
    {
      //title, dates and description strings, and an images array with URL strings for project images.
      "title" : "Intelligent Line Follower",
      "date" : "01/07/1995",
      "description" : "A line follower which can follow lines and also determine directions at junctions",
      "images" : ["images/01.jpg", "images/02.jpg", "images/03.jpg"]
    },
    {
      //title, dates and description strings, and an images array with URL strings for project images.
      "title" : "Intelligent Home Manager",
      "date" : "01/07/1995",
      "description" : "An All-In-One destination for those who wish to monitor and contron the home resources",
      "images" : ["images/01.jpg", "images/02.jpg", "images/03.jpg"]
    }
  ]
}
/*education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.
education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.  */
var education = {
  "schools" : [
    {
    "name" : "St.Annes U P School",
    "location" : "Anathadam",
    "degree dates" : "2000 - 2002",
    "url" : "blabla.com",
    "majors" : ""
  },
  {
    "name" : "St.Josephs EMHSS",
    "location" : "Aloor",
    "degree dates" : "2002 - 2010",
    "url" : "blumblum.com",
    "majors" : ""
  },
  {
    "name" : "St.Antoys HSS",
    "location" : "Mala",
    "degree dates" : "2010 - 2013",
    "url" : "klakla.com",
    "majors" : ""
  }
  ],
  "onlineCourses" : [
    {
      "title" : "xyz",
      "school" : "",
      "dates" : "",
      "url" : ""
    },
    {
      "title" : "",
      "school" : "",
      "dates" : "",
      "url" : ""
    }
  ]
}

if (bio.skills.length != 0) {
  $("#header").append(HTMLskillsStart);
  for( skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
  }
}

$("#main").append(internationalizeButton);

function inName(fullName) {
  var splitted = fullName.split(" ");
  var first = splitted[0];
  var formattedFirst = first[0].toUpperCase() + first.slice(1).toLowerCase();
  var second = splitted[1].toUpperCase();
  return(formattedFirst + " " + second);
}
