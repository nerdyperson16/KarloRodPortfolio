// I'm procrastinating

function input(value) {
    if (value == "y") {
        document.getElementById("intro").style.display = "none";
        document.getElementById("procrastinating").style.display = "block";
        document.getElementById("foot").style.display = "none";
    }
    if (value == "n") {
        document.getElementById("intro").style.display = "none";
        document.getElementById("notprocrastinating").style.display = "block";
        document.getElementById("foot").style.display = "none";
    }
}