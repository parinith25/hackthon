function toggleParagraph() {
    var paragraph = document.getElementById("hiddenParagraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}


function togglePersonalInfo() {
    var personalInfo = document.getElementById("personalInfo");
    personalInfo.style.display = (personalInfo.style.display === "none") ? "block" : "none";
}



document.addEventListener('DOMContentLoaded', function () {

    function toggleTable() {
        var educationTable = document.getElementById('educationTable');
        if (educationTable.style.display === 'none' || educationTable.style.display === '') {
            educationTable.style.display = 'table';
        } else {
            educationTable.style.display = 'none';
        }
    }
});

/*project*/
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}
