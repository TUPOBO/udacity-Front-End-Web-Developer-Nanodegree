/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    name: "LiuBo",
    role: "Web Developer",
    welcomeMessage: "The true nobility is in being superior to your previous self!",
    biopic: "images/me.jpg",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery.js", "p5.js"],
    contacts: {
        mobile: "+86-18795558930",
        email: "tupobogit@gmail.com",
        github: "TUPOBO",
        location: "Wuxi China"
    },

    display: function() {
        var formattedHeader = [];
        formattedHeader.push(HTMLbioPic.replace("%data%", bio.biopic));
        // formattedHeader.push(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        formattedHeader.push(HTMLheaderRole.replace("%data%", bio.role));
        formattedHeader.push(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        var formattedContact = [];
        formattedContact.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContact.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));

        formattedHeader.forEach(function(header) {
            $("#header").prepend(header);
        });

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }

        formattedContact.forEach(function(contact) {
            $("#topContacts").append(contact);
            $("#footerContacts").append(contact);
        });
    }

};


var work = {
    jobs: [{
        employer: "WUXI PAIHO TEXTILES CO.,LTD.",
        title: "automation engineers",
        location: "Wuxi China",
        dates: "2015-2017",
        description: "Machine transformation that improving the efficiency of automated production"
    }],

    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));



        })
    }
};


var projects = {
    projects: [{
        title: "personal blog",
        dates: "2017",
        description: "Use GitHub page and Hexo to build your personal blog",
        images: ["images/blog.png"]
    }],

    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates) + HTMLprojectDescription.replace("%data%", project.description));

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
                })
            }
        })

    }
}


var education = {
    schools: [{
        name: "HuaiHai Institute of Technology",
        location: "Lianyungang China",
        degree: "bachelor",
        mahors: "automation",
        dates: "2010-2014",
        url: "http://www.hhit.edu.cn/"
    }],

    onlineCourses: [{
        title: "Front-End Web Developer Nanodegree",
        school: "Udacity",
        dates: "2017",
        url: "http://cn.udacity.com/fend/"
    }],

    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.mahors));
        })
        
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
        })


    }
};

bio.display();
projects.display();
work.display();
education.display();

$('#mapDiv').append(googleMap);
