var about = document.getElementById("aboutButton");
var studies = document.getElementById("studiesButton");
var projects = document.getElementById("projectsButton");
var contact = document.getElementById("contactButton");
var app = document.getElementById("body");
var sbImage = document.getElementById("sbImage");
var nwgImage = document.getElementById("nwgImage");
var collegeDetails = document.getElementById("collegeDetails");
var collegeName = document.getElementById("collegeName");
var facultyName = document.getElementById("facultyName");
var facultyDetails = document.getElementById("facultyDetails");
var siitName1 = document.getElementById("siitName1");
var siitDetails1 = document.getElementById("siitDetails1");
var siitName2 = document.getElementById("siitName2");
var siitDetails2 = document.getElementById("siitDetails2");
var projectsSwitch = document.getElementById("projectsSwitch");

window.onload = () => {
    goToSection("about");
    markSection();
    resize();
};

window.addEventListener("resize", resize);

window.addEventListener("scroll", markSection);

function goToSection(button) {
    unclickButtons();
    if(button === "about") {
        about.style.borderLeft = "3px solid white";
        about.style.borderRight = "3px solid white";
        // projectsSwitch.style.display = "none";
        window.scrollTo(0,0);
    } else if(button === "studies") {
        // projectsSwitch.style.display = "none";
        studies.style.borderLeft = "3px solid white";
        studies.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        window.scrollTo(0,0.923 * height);
    } else if(button === "projects") {
        projects.style.borderLeft = "3px solid white";
        projects.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        window.scrollTo(0,1.923 * height);
        // setTimeout(() => {projectsSwitch.style.display = "flex";}, 600);
    } else if(button === "contact") {
        contact.style.borderLeft = "3px solid white";
        contact.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        // projectsSwitch.style.display = "none";
        window.scrollTo(0,2.923 * height);
    }
}

function markSection() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if(width <= 1000) {
        if(window.scrollY >= 0 && window.scrollY <= 0.25 * height) {
            about.style.borderLeft = "3px solid white";
            about.style.borderRight = "3px solid white";
            studies.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            studies.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
        }  
        if ( window.scrollY >= 0.9 * height && window.scrollY <= 1.1 * height) {
            studies.style.borderLeft = "3px solid white";
            studies.style.borderRight = "3px solid white";
            about.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            about.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
        } 
        if (window.scrollY >= 1.9 * height && window.scrollY <= 2.1 * height) {
            studies.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            studies.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            about.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            about.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderLeft = "3px solid white";
            projects.style.borderRight = "3px solid white";
            contact.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            // projectsSwitch.style.display = "flex";
        }
        if (window.scrollY >= 2.7 * height) {
            studies.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            studies.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            about.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            about.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
            projects.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
            contact.style.borderLeft = "3px solid white";
            contact.style.borderRight = "3px solid white";
        }
    }
}

function unclickButtons() {
    about.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
    about.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
    studies.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
    studies.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
    projects.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
    projects.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
    contact.style.borderLeft = "3px solid rgba(0, 0, 0, 0)";
    contact.style.borderRight = "3px solid rgba(0, 0, 0, 0)";
}

sbImage.addEventListener("click", () => {
    sbImage.style.border = "2px 2px solid white";
    setTimeout(() => {sbImage.setAttribute("src", "images/sb2.png");}, 500);
    setTimeout(() => {sbImage.setAttribute("src", "images/sb3.png");}, 3000);
    setTimeout(() => {sbImage.setAttribute("src", "images/sb4.png");}, 5000);
    setTimeout(() => {sbImage.setAttribute("src", "images/sb5.png");}, 7000);
    setTimeout(() => {sbImage.setAttribute("src", "images/sb6.png");}, 9000);
    setTimeout(() => {sbImage.setAttribute("src", "images/sb1.png");}, 11000);
})

nwgImage.addEventListener("click", () => {
    setTimeout(() => {nwgImage.setAttribute("src", "images/nwg2.png");;}, 500);
    setTimeout(() => {nwgImage.setAttribute("src", "images/nwg1.png");}, 3000);
    setTimeout(() => {nwgImage.setAttribute("src", "images/nwg3.png");}, 5000);
})

function goToLinkedin() {
    window.open("https://www.linkedin.com/in/marian-alexandru-daniliuc-a51486206/");
}

function goToGithub() {
    window.open("https://github.com/alescandruu");
}

function goToSb() {
    window.open("https://github.com/alescandruu/webwork");
}

function goToWf() {
    window.open("https://github.com/alescandruu/weatherForecast");
}

function goToGs() {
    window.open("https://github.com/alescandruu/gamesStore");
}

var college = 0;
var faculty = 0; 
var siit1 = 0;
var siit2 = 0;

function switchSection (button) {
    if(button === "college") {
        if(college % 2 == 0) {
            document.getElementById("atlImage").src = "images/details-modified1.png";
            collegeDetails.style.display = "block";
            collegeName.style.display = "none";
            college++;
            if( facultyDetails.style.display === "block") {
                document.getElementById("fsegaImage").src = "images/fsega-modified.png";
                facultyDetails.style.display = "none";
                facultyName.style.display = "block";
                faculty++;
            }
            if(siitDetails1.style.display === "block") {
                document.getElementById("siitImage1").src = "images/siit-modified.png";
                siitDetails1.style.display = "none";
                siitName1.style.display = "block";
                siit1++;
            }
            if(siitDetails2.style.display === "block") {
                document.getElementById("siitImage2").src = "images/siit-modified.png";
                siitDetails2.style.display = "none";
                siitName2.style.display = "block";
                siit2++;
            }
        }
        else {
            document.getElementById("atlImage").src = "images/atl-modified.png";
            collegeDetails.style.display = "none";
            collegeName.style.display = "block";
            college++;
        }
    } else if (button === "faculty") {
        if(faculty % 2 == 0) {
            if(collegeDetails.style.display === "block") {
                document.getElementById("atlImage").src = "images/atl-modified.png";
                collegeDetails.style.display = "none";
                collegeName.style.display = "block";
                college++; 
            }
            document.getElementById("fsegaImage").src = "images/details-modified1.png";
            facultyDetails.style.display = "block";
            facultyName.style.display = "none";
            faculty++;
            if(siitDetails1.style.display === "block") {
                document.getElementById("siitImage1").src = "images/siit-modified.png";
                siitDetails1.style.display = "none";
                siitName1.style.display = "block";
                siit1++;
            }
            if(siitDetails2.style.display === "block") {
                document.getElementById("siitImage2").src = "images/siit-modified.png";
                siitDetails2.style.display = "none";
                siitName2.style.display = "block";
                siit2++;
            }
        }
        else {
            document.getElementById("fsegaImage").src = "images/fsega-modified.png";
            facultyDetails.style.display = "none";
            facultyName.style.display = "block";
            faculty++;
        }
    } else if(button === "siit1") {
        if(siit1 % 2 == 0) {
            if(collegeDetails.style.display === "block") {
                document.getElementById("atlImage").src = "images/atl-modified.png";
                collegeDetails.style.display = "none";
                collegeName.style.display = "block";
                college++;
            }
            if(facultyDetails.style.display === "block") {
                document.getElementById("fsegaImage").src = "images/fsega-modified.png";
                facultyDetails.style.display = "none";
                facultyName.style.display = "block";
                faculty++;
            }
            document.getElementById("siitImage1").src = "images/details-modified1.png";
            siitDetails1.style.display = "block";
            siitName1.style.display = "none";
            siit1++;
            if(siitDetails2.style.display === "block") {
                document.getElementById("siitImage2").src = "images/siit-modified.png";
                siitDetails2.style.display = "none";
                siitName2.style.display = "block";
                siit2++;
            }
        }
        else {
            document.getElementById("siitImage1").src = "images/siit-modified.png";
            siitDetails1.style.display = "none";
            siitName1.style.display = "block";
            siit1++;
        }
    } else if(button === "siit2") {
        if(siit2 % 2 == 0) {
            if(collegeDetails.style.display === "block") {
                document.getElementById("atlImage").src = "images/atl-modified.png";
                collegeDetails.style.display = "none";
                collegeName.style.display = "block";
                college++;
            }
            if(facultyDetails.style.display === "block") {
                document.getElementById("fsegaImage").src = "images/fsega-modified.png";
                facultyDetails.style.display = "none";
                facultyName.style.display = "block";
                faculty++;
            }
            if(siitDetails1.style.display === "block") {
                document.getElementById("siitImage1").src = "images/siit-modified.png";
                siitDetails1.style.display = "none";
                siitName1.style.display = "block";
                siit1++;
            }
            document.getElementById("siitImage2").src = "images/details-modified1.png";
            siitDetails2.style.display = "block";
            siitName2.style.display = "none";
            siit2++;
        }
        else {
            document.getElementById("siitImage2").src = "images/siit-modified.png";
            siitDetails2.style.display = "none";
            siitName2.style.display = "block";
            siit2++;
        }
    }
}

function switchTo(section) {
    if(section === "first") {
        document.getElementById("projectsSection2").style.display = "none";
        document.getElementById("projectsSection1").style.display = "flex";
    } else {
        document.getElementById("projectsSection1").style.display = "none";
        document.getElementById("projectsSection2").style.display = "flex";
    }
}

function resize() {
    let height = window.outerHeight;
    let width = window.outerWidth;
    if(width <= 1000) {
        document.getElementById("aboutButton").setAttribute("onclick", "");
        document.getElementById("studiesButton").setAttribute("onclick", "");
        document.getElementById("projectsButton").setAttribute("onclick", "");
        document.getElementById("contactButton").setAttribute("onclick", "");
    }
    else {
        document.getElementById("aboutButton").setAttribute("onclick", "goToSection('about')");
        document.getElementById("studiesButton").setAttribute("onclick", "goToSection('studies')");
        document.getElementById("projectsButton").setAttribute("onclick", "goToSection('projects')");
        document.getElementById("contactButton").setAttribute("onclick", "goToSection('contact')");
    }
    let result = height/width;
    if(result > 1.15) {
        document.getElementById("meSection").style.flexDirection = "column-reverse";
        document.getElementById("mePhoto").style.width = 23 + result * 5 + "vw";
        document.getElementById("meDetails").style.fontSize = 2 + 0.6 * result + "vw";
        document.getElementById("meSection").style.gap = result * 6 + "vh";
    }
    else {
        document.getElementById("meSection").style.flexDirection = "row";
        document.getElementById("mePhoto").style.width = "23vw";
        document.getElementById("meDetails").style.fontSize = "1.7vw";
        document.getElementById("meSection").style.gap = "5vw";
    }
    if(result > 1.63) {
        document.getElementById("topSubSection").style.flexDirection = "column";
        document.getElementById("topSubSection").style.justifyContent = "space-around";
        document.getElementById("bottomSubSection").style.flexDirection = "column";
        document.getElementById("bottomSubSection").style.justifyContent = "space-around";
        document.getElementById("studiesSection").style.fontSize = 1 + 0.6 *  result + "vw";
    } else {
        document.getElementById("topSubSection").style.flexDirection = "row";
        document.getElementById("topSubSection").style.justifyContent = "center";
        document.getElementById("bottomSubSection").style.flexDirection = "row";
        document.getElementById("bottomSubSection").style.justifyContent = "center";
        document.getElementById("studiesSection").style.fontSize = "1vw";
    }
    if(result > 0.83) {
        document.getElementById("projectsSection1").style.flexDirection = "column";
        document.getElementById("projectsSection2").style.flexDirection = "column";
        document.getElementById("projectsSection1").style.fontSize = 1 + 1.2 *(result - 0.73) + "vw";
        document.getElementById("projectsSection2").style.fontSize = 1 + 1.2 * (result - 0.73) + "vw";
        document.getElementById("noWheelGap").style.width = "90%";
        document.getElementById("sneakersBoutique").style.width = "90%";
        document.getElementById("gamesStore").style.width = "90%";
        document.getElementById("weatherForecast").style.width = "90%";
        document.getElementById("sbImage").style.width = 50 + 5 * result + "%";
        document.getElementById("nwgImage").style.width = 50 + 5 * result + "%";
        document.getElementById("wfImage").style.width = 50 + 5 * result + "%";
        document.getElementById("gsImage").style.width = 50 + 5 * result + "%";
    }
    else {
        if(result > 0.4) {
            document.getElementById("projectsSection1").style.marginTop = 4 * result + "vw";
            document.getElementById("projectsSection2").style.marginTop = 4 * result + "vw";
        }
        document.getElementById("projectsSection1").style.flexDirection = "row";
        document.getElementById("projectsSection2").style.flexDirection = "row";
        document.getElementById("projectsSection1").style.fontSize = "1.1vw";
        document.getElementById("projectsSection2").style.fontSize = "1.1vw";
        document.getElementById("noWheelGap").style.width = "75%";
        document.getElementById("sneakersBoutique").style.width = "75%";
        document.getElementById("gamesStore").style.width = "75%";
        document.getElementById("weatherForecast").style.width = "75%";
        document.getElementById("sbImage").style.width = "75%";
        document.getElementById("nwgImage").style.width = "75%";
        document.getElementById("wfImage").style.width = "80%";
        document.getElementById("gsImage").style.width = "80%";
    }
    document.getElementById("contact1").style.fontSize = 3 + 3 * result + "vw";
    document.getElementById("contact2").style.fontSize = 0.5 + 0.8 * result + "vw";
    markSection();
}

function showContact() {
    document.getElementById("contactButton1").style.display = "none";
    document.getElementById("contact2").style.display = "block";
}

// document.getElementById("meSection").style.gap = "5vw";