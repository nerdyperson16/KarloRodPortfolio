var count = 0;

function zoom(num) {
    count = num + count;
    if (count == 1) {
        document.getElementById("mainsection").style.fontSize = "x-large";
    } else if (count == 2) {
        document.getElementById("mainsection").style.fontSize = "16px";
        count = 0;
    }
}