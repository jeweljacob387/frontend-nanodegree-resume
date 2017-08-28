var bio = {
  "name" : "Jewel Jacob",
  "role" : "System Engineer" ,
  "contacts" : {
    "mobile" : "+91 7736847936",
    "email" : "jewelsmail@tkgrp.com",
    "github" : "jewlshub",
    "twitter" : "jewltweet",
    "location" : "Aloor"
  },
  "welcomeMessage" : "Jewel welcomes you to his life",
  "skills" : ["HTML", "CSS", "JavaScript", "AJAX", "jQuery"],
  "biopic" : "http://via.placeholder.com/250x250",
  display : function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
    var topBar = HTMLmobile.replace("%data%",bio.contacts.mobile) +  HTMLgithub.replace("%data%",bio.contacts.github) + HTMLtwitter.replace("%data%",bio.contacts.twitter) + HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile) +  HTMLgithub.replace("%data%",bio.contacts.github) + HTMLtwitter.replace("%data%",bio.contacts.twitter) + HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    if (bio.skills.length !== 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach( function(elem){
        $("#skills").append(HTMLskills.replace("%data%",elem));
      });
    }
  }
};


var education = {
  "schools" : [
    {
    "name" : "St.Annes U P School",
    "location" : "Anathadam",
    "degree": "Lower Primary LOL!",
    "majors" : ["XYZ"],
    "dates" : "2000 - 2002",
    "url" : ""
  },
  {
    "name" : "St.Josephs EMHSS",
    "location" : "Aloor",
    "degree" : "High School",
    "majors" : ["XYZ"],
    "dates" : "2002 - 2010",
    "url" : ""
  },
  {
    "name" : "St.Antoys HSS",
    "location" : "Mala",
    "degree" : "Higher Secondary",
    "majors" : ["XYZ"],
    "dates" : "2010 - 2013",
    "url" : ""
  },
  {
    "name" : "SSET",
    "location" : "Karukutty",
    "degree" : "Graduate",
    "majors" : ["XYZ"],
    "dates" : "2013 - 2017",
    "url" : "http://www.scmsgroup.org/sset/"
  }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Developer",
      "school" : "Udacity",
      "dates" : "23/06/17 - 23/11/17",
      "url" : "www.udacity.com"
    },
    {
      "title" : "Coursera",
      "school" : "something",
      "dates" : "from - to",
      "url" : "www.coursera.org"
    }
  ],
  display : function() {
    education.schools.forEach( function(elem) {
      $("#education").append(HTMLschoolStart);
      var opSchool = HTMLschoolName.replace("%data%",elem.name) + HTMLschoolDegree.replace("%data%",elem.degree);
      if(elem.url) {
        opSchool = opSchool.replace("%url%",elem.url);
      }
      else {
        opSchool = opSchool.replace("%url%","#");
      }
      $(".education-entry:last").append(opSchool + HTMLschoolDates.replace("%data%",elem.dates) + HTMLschoolLocation.replace("%data%",elem.location) + HTMLschoolMajor.replace("%data%",elem.majors) );
      });
    if(education.onlineCourses.length !== 0)
     {
       $("#education").append(HTMLonlineClasses);
       education.onlineCourses.forEach( function(elem) {
         $("#education").append(HTMLschoolStart);
         $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", elem.title) + HTMLonlineSchool.replace("%data%", elem.school) + HTMLonlineDates.replace("%data%", elem.dates) + HTMLonlineURL.replace("%data%", elem.url) );
       });
     }
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Infosys",
      "title" : "System Engineer",
      "location" : "Mysore",
      "dates" : "in progress",
      "description" : "It was a good experience working there as a system engg.it will be good if those who see thid add something to this. my mind is totally blank about what to type. So i do this - blah blah kla kli klu klakla my heart is thirsty to get your lofe, and ill go to ny end to get that. If god allows me none will stand in my path. youre mine.blum blah jewel is my name cheese is very good for health. butter is fatty and cholestrol.bbuu ugqjd utursi wyidv njdjiuef."
    },
    {
      "employer" : "Google",
      "title" : "Web Developer",
      "location" : "LA",
      "dates" : "in progress",
      "description" : "It was a good experience working there as a Web Dev. It was a good experience working there as a system engg.it will be good if those who see thid add something to this. my mind is totally blank about what to type. So i do this - blah blah kla kli klu klakla my heart is thirsty to get your lofe, and ill go to ny end to get that. If god allows me none will stand in my path. youre mine.blum blah jewel is my name cheese is very good for health. butter is fatty and cholestrol.bbuu ugqjd utursi wyidv njdjiuef."
    }
  ],
  display : function() {
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function (elem) {
      var logEmp = HTMLworkEmployer.replace("%data%", elem.employer);
      var logTitle = HTMLworkTitle.replace("%data%", elem.title);
      var logEmpDetail = logEmp + logTitle;

      $(".work-entry:last").append(logEmpDetail + HTMLworkDates.replace("%data%",elem.datesWorked) + HTMLworkLocation.replace("%data%",elem.location) + HTMLworkDescription.replace("%data%",elem.description) );
    });
  }
};

var projects = {
  "projects" : [
    {
      //title, dates and description strings, and an images array with URL strings for project images.
      "title" : "Intelligent Line Follower",
      "dates" : "01/07/1995",
      "description" : "A line follower which can follow lines and also determine directions at junctions",
      "images" : ["images/l01.jpg", "images/l02.jpg", "images/l03.jpg"]
    },
    {
      //title, dates and description strings, and an images array with URL strings for project images.
      "title" : "Intelligent Home Manager",
      "dates" : "01/07/1995",
      "description" : "An All-In-One destination for those who wish to monitor and contron the home resources",
      "images" : ["images/i01.jpg", "images/i02.jpg", "images/i03.jpg"]
    }
  ],
  display : function() {
    $("#projects").append(HTMLprojectStart);

    for(var project in projects.projects) {
      var opTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(opTitle);
      var opDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
      $(".project-entry:last").append(opDate);
      var opDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(opDesc);

      for(var img in projects.projects[project].images) {
        var opImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
        $(".project-entry:last").append(opImg);
      }
    }
  }
};

$("#mapDiv").append(googleMap);

work.display();
bio.display();
projects.display();
education.display();
