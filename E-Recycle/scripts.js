var i = 0;
var txt = "Electronic Recycling is a responsiblity. To help our enviornment.";
var speed = 50;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}