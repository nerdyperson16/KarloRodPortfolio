var modal2 = document.getElementById("myModal2");
var images2 = document.getElementsByClassName("myImages2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
for (var i = 0; i < images2.length; i++) {
    var img2 = images2[i];
    img2.onclick = function(evt) {
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = this.alt;
    }
}
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() { 
    modal2.style.display = "none";
}
