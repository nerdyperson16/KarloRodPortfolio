/*
    Karlo Rodriguez - Online Portfolio
    globaljs.js
    Created: October 23, 2022 at 9:40 PM (PST)
    Updated: October 23, 2022
*/

/* "Want a break from the ads? If you tap now to watch a short video, you'll receive 30 minutes of ad free music" - Spotify */

var userAgent = window.navigator.userAgent; // Internet Explorer Warning
var internetExplorer = /MSIE|Triedent/.test(userAgent); // Internet Explorer Warning
var navArrow = document.getElementById("skipnavbutton"); // Skip Navigation Button
var topNavButton = document.getElementById("topnavbutton"); // Responsive Design For Navigation
var counter = 0; // Fun Easter Egg Video

// Internet Explorer Warning
if (internetExplorer == true) {
    document.getElementById("iewarning").style.display = "block";
} else {
    document.getElementById("iewarning").style.display = "none";
}

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

// Skip Navigation Button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navArrow.style.display = "block";
    } else {
        navArrow.style.display = "none";
    }
}
function scrollDetection() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Open Overlay / Close Overlay
function openOverlay(exact) {
    document.getElementById(exact).style.display = "block";
}
function closeOverlay(exact) {
    document.getElementById(exact).style.display = "none";
}

// Fun Easter Egg Video
function funVideo() {
    if (counter == 3) {
        document.getElementById("secretvideonoshow").style.display = "block";
    } else {
        counter++;
    }
}