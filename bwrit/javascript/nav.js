/* "Want a break from the ads? If you tap now to watch a short video, you'll receive 30 minutes of ad free music" - Spotify */

// Made on 3/9/2023

var topNavButton = document.getElementById("topnavbutton"); // Responsive Design For Navigation

// Responsive Design For Navigation
function navbarhamburger() {
    if (topNavButton.className === "topnav") {
        topNavButton.className += " responsive";
        document.getElementById("myself").style.display = "none";
    } else {
        topNavButton.className = "topnav";
        document.getElementById("myself").style.display = "block";
    }
}