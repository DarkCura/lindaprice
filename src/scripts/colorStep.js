var delay = 8000; //set delay between message change (in miliseconds)
var maxsteps=60; // number of steps to take to change from start color to endcolor
var stepdelay=80; // time in miliseconds of a single step
//**Note: maxsteps*stepdelay will be total time in miliseconds of fading effect
var startcolor= new Array(000,000,255); // start color (red, green, blue)
var endcolor=new Array(255,255,255); // end color (red, green, blue)

var fcontent=new Array();
begintag='<div style="font: normal 18px Arial;text-align:center; font-weight:bold; padding: 5px; ">'; //set opening tag, such as font //declarations
fcontent[0]="<a href='abouteme/aboutme.htm'>Top 1% Of All Agents, Realtors In America<br><br>20 Year Member REMAX 100% Club<br><br>16 Year Member REMAX Hall of Fame <br><br>19 Year Member of Residential Council<br><br></a>";
fcontent[1]="<a href='abouteme/aboutme.htm'>20 Year Member of the REMAX Platinum Club <br><br>33 Year Member of the Society of \"Sales Executives\" <br><br>21 Year Member Accredited Buyers Agent (ABR)<br><br>5 Year Member Certified Distressed Property Expert <br><br></a>";
fcontent[2]="<a href='abouteme/aboutme.htm'>17 Year Member Senior Real Estate Specialist (SRES) <br><br>25 Year Member National Association of Realtors (NAR) <br><br>25 Year Member of the Illinois Association of Realtors (IAR)<br><br></a>";
fcontent[3]="<a href='abouteme/aboutme.htm'>25 Year Member Of The Realtor Association West/South Suburban Chicagoland Realtor Board (RWSSC)<br><br>Exclusive Recognition in &#8220;Who's Who&#8221; in Residential Real Estate <br><br>Exclusive Membership in REMAX Lifetime Achievement Award<br><br> 5 Year Member Certified Distressed Property Expert <br><br></a>";

closetag='</div>';

var fwidth='600px'; //set scroller width
var fheight='150px'; //set scroller height

var fadelinks=1;  //should links inside scroller content also fade like text? 0 for no, 1 for yes.

///No need to edit below this line/////////////////


var ie4=document.all&&!document.getElementById;
var DOM2=document.getElementById;
var faderdelay=0;
var index=0;


/*Rafael Raposo edited function*/
//function to change content
function changecontent(){
    if (index>=fcontent.length)
     index=0
    if (DOM2) {
        document.getElementById("fscroller").style.color="rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")"
        document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag
        if (fadelinks)
            linkcolorchange(1);
        colorfade(1, 15);
    }
    else if (ie4)
        document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag;
    index++
}

// colorfade() partially by Marcio Galli for Netscape Communications.  ////////////
// Modified by Dynamicdrive.com

function linkcolorchange(step){
    var obj=document.getElementById("fscroller").getElementsByTagName("A");
    if (obj.length>0){
    for (i=0;i<obj.length;i++)
        obj[i].style.color=getstepcolor(step);
    }
}

/*Rafael Raposo edited function*/
var fadecounter;
function colorfade(step) {
    if(step<=maxsteps) {	
        document.getElementById("fscroller").style.color=getstepcolor(step);
    if (fadelinks)
        linkcolorchange(step);
    step++;
    fadecounter=setTimeout("colorfade("+step+")",stepdelay);
    } else {
        clearTimeout(fadecounter);
        document.getElementById("fscroller").style.color="rgb("+endcolor[0]+", "+endcolor[1]+", "+endcolor[2]+")";
        setTimeout("changecontent()", delay);
    }   
}

/*Rafael Raposo's new function*/
function getstepcolor(step) {
    var diff
    var newcolor=new Array(3);
    for(var i=0;i<3;i++) {
        diff = (startcolor[i]-endcolor[i]);
        if(diff > 0) {
            newcolor[i] = startcolor[i]-(Math.round((diff/maxsteps))*step);
        } else {
            newcolor[i] = startcolor[i]+(Math.round((Math.abs(diff)/maxsteps))*step);
        }
    }
    return ("rgb(" + newcolor[0] + ", " + newcolor[1] + ", " + newcolor[2] + ")");
}

if (ie4||DOM2)
    document.write('<div id="fscroller" style="line-height:1.5em;border:0px solid black; width:'+fwidth+';height:'+fheight+'"></div>');

if (window.addEventListener)
    window.addEventListener("load", changecontent, false)
else if (window.attachEvent)
    window.attachEvent("onload", changecontent)
else if (document.getElementById)
    window.onload=changecontent