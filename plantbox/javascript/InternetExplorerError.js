var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);
if ( isIE ) {
    document.write("You're currently using Internet Explorer which is an outdated browser. Some features may be unavailable or wouldn't work properly. It's recommended to use Google Chrome, Microsoft Edge, or Mozilla Firefox.")
}