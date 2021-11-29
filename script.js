var about = document.getElementById("aboutButton");
var studies = document.getElementById("studiesButton");
var projects = document.getElementById("projectsButton");
var contact = document.getElementById("contactButton");
var app = document.getElementById("body");
var sbImage = document.getElementById("sbImage");
var nwgImage = document.getElementById("nwgImage");

window.onload = () => {
    goToSection("about");
};

function goToSection(button) {
    unclickButtons();
    if(button === "about") {
        about.style.borderLeft = "3px solid white";
        about.style.borderRight = "3px solid white";
        window.scrollTo(0,0);
    } else if(button === "studies") {
        studies.style.borderLeft = "3px solid white";
        studies.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        window.scrollTo(0,0.923 * height);
    } else if(button === "projects") {
        projects.style.borderLeft = "3px solid white";
        projects.style.borderRight = "3px solid white";
        var height = window.innerHeight;
        window.scrollTo(0,1.923 * height);
    } else if(button === "contact") {
        contact.style.borderLeft = "3px solid white";
        contact.style.borderRight = "3px solid white";
        var height = window.innerHeight;
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