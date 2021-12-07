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
};

function goToSection(button) {
    unclickButtons();
    if(button === "about") {
        about.style.borderLeft = "3px solid white";
        about.style.borderRight = "3px solid white";
        projectsSwitch.style.display = "none";
        window.scrollTo(0,0);
    } else if(button === "studies") {
        studies.style.borderLeft = "3px solid white";
        studies.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        projectsSwitch.style.display = "none";
        window.scrollTo(0,0.923 * height);
    } else if(button === "projects") {
        projects.style.borderLeft = "3px solid white";
        projects.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        window.scrollTo(0,1.923 * height);
        setTimeout(() => {projectsSwitch.style.display = "flex";}, 600);
    } else if(button === "contact") {
        contact.style.borderLeft = "3px solid white";
        contact.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        projectsSwitch.style.display = "none";
        window.scrollTo(0,2.923 * height);
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
    window.open("https://alescandruu.github.io/webwork/index.html");
}

function goToWf() {
    window.open("https://alescandruu.github.io/weatherForecast/");
}

function goToGs() {
    window.open("https://alescandruu.github.io/gamesStore/");
}

var college = 0;
var faculty = 0; 
var siit1 = 0;
var siit2 = 0;

function switchSection (button) {
    if(button === "college") {
        if(college % 2 == 0) {
            collegeDetails.style.display = "block";
            collegeName.style.display = "none";
            college++;
        }
        else {
            collegeDetails.style.display = "none";
            collegeName.style.display = "block";
            college++;
        }
    } else if (button === "faculty") {
        if(faculty % 2 == 0) {
            facultyDetails.style.display = "block";
            facultyName.style.display = "none";
            faculty++;
        }
        else {
            facultyDetails.style.display = "none";
            facultyName.style.display = "block";
            faculty++;
        }
    } else if(button === "siit1") {
        if(siit1 % 2 == 0) {
            siitDetails1.style.display = "block";
            siitName1.style.display = "none";
            siit1++;
        }
        else {
            siitDetails1.style.display = "none";
            siitName1.style.display = "block";
            siit1++;
        }
    } else if(button === "siit2") {
        if(siit2 % 2 == 0) {
            siitDetails2.style.display = "block";
            siitName2.style.display = "none";
            siit2++;
        }
        else {
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