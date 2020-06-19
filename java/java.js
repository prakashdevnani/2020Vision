
function show(k)
{
	document.getElementById(k).style.visibility="visible";
}
function hide(k)
{
	document.getElementById(k).style.visibility="hidden";
}

function show1(k,x,y)
{
	document.getElementById(k).style.visibility="visible";
	document.getElementById(k).style.position="static";
	document.getElementById(x).style.height="330px";
	document.getElementById(y).style.visibility="hidden";
	document.getElementById(y).style.position="absolute";
}
function hide1(k,x,y)
{
	document.getElementById(k).style.visibility="hidden";
	document.getElementById(k).style.position="absolute";
	document.getElementById(x).style.height="220px";
	document.getElementById(y).style.visibility="visible";
	document.getElementById(y).style.position="static";
}