var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if ( isIE ) {
    document.write("You're currently using Internet Explorer which is now an outdated browser.")
}