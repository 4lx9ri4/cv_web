//image qui suit la souris
var Xpos = 50;
var Ypos = 50;
var vara="DIV ID";
var varb="/DIV";
var styl='style="position:absolute;left:0px;top:0px;width:32px;height:32px;visibility:hidden;"'
chaine='<'+vara+'="obj1" '+styl+'>'
chaine='<'+vara+'="obj1" '+styl+'>'
/*placez le nom de l'image ici sur ts les obj*/
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj2" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj3" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj4" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj5" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj6" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'
+'<'+vara+'="obj7" '+styl+'>'
+'<img src="img/flo.png" border=0>'
+'<'+varb+'>'

document.write(chaine);
var div1 = document.getElementById("obj1").style;
var div2 = document.getElementById("obj2").style;
var div3 = document.getElementById("obj3").style;
var div4 = document.getElementById("obj4").style;
var div5 = document.getElementById("obj5").style;
var div6 = document.getElementById("obj6").style;
var div7 = document.getElementById("obj7").style;

var objet;var coordx;var coordy;
objet = new Array(div1,div2,div3,div4,div5,div6,div7);
coordx = new Array(0,0,0,0,0,0,0);coordy = new Array(0,0,0,0,0,0,0);
function placeObj(i,px,py) {
 objet[i].left=px;
 objet[i].top=py;}
function voirObj(i) {
 objet[i].visibility="visible";}
function cacheObj(i) {
 objet[i].visibility="hidden";}
function cacheObj(i) {
 objet[i].visibility="hidden";}

if (document.getElementById)
   {if(navigator.appName.substring(0,3) == "Net")
      document.captureEvents(Event.MOUSEMOVE);
   document.onmousemove = Pos_Souris;}

function Pos_Souris(e)
   {Xpos = (navigator.appName.substring(0,3) == "Net") ? e.pageX : event.x+document.body.scrollLeft;
   Ypos = (navigator.appName.substring(0,3) == "Net") ? e.pageY : event.y+document.body.scrollTop;}

function vole() {
 x0=coordx[0];y0=coordy[1];ex=Xpos+50;ey=Ypos+50
 reelx=x0+0.6;reely=y0+0.6;
 rx=reelx;ry=reely;
 rx+=(ex-rx)*0.6;ry+=(ey-ry)*0.6;
 reelx=rx;reely=ry;
 x0=Math.round(reelx);y0=Math.round(reely);

 for (var i = 9; i > 0; i--) {
  coordx[i]=coordx[i-1];
  coordy[i]=coordy[i-1]; }

 coordx[0]=x0;coordy[0]=y0;
 for (var i = 0; i < 7; i++) { voirObj(i);placeObj(i,coordx[i]+i-2,coordy[i]-i);}
 /* vitesse de d�filement*/
 setTimeout("vole()",150)}
if(document.getElementById)
	window.onload = vole;

//effet arc en ciel sur lien
var lien = "";
function rand(max) {
  return (Math.floor(Math.random() * max));
}

function initaec() {
	for (var i=0;i<document.links.length;i++) {
		if (document.links[i].className == "email") {
			document.links[i].onmouseover = aec;
			document.links[i].onmouseout = unaec;
			document.links[i].aecTimer = null;
		}
	}
}

function aec(isFF) {
	if (isFF) {
		lien = isFF.target;
		isFF.target.aecTimer = setInterval('lien.style.color = "rgb("+rand(256)+","+rand(256)+","+rand(256)+")";',100);
	}
}

function unaec(isFF) {
	if (isFF) {
		clearInterval(isFF.target.aecTimer);
		isFF.target.aecTimer = null;
		isFF.target.style.color = "";
	}
}
