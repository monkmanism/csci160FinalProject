utl = {};

//*******************************
utl.eid = function(id)
{
return document.getElementById(id);
}

//*******************************
// First param is ID of scope element,
// second is tag name.
//-------------------------------
utl.tag = function(id, tag)
{
return document.getElementById(id).getElementsByTagName(tag);
}

//*******************************

utl.name = function(nm)
{
return document.getElementsByName(nm);
}



farm = {};
farm.mout = function()
{
	utl.eid("seedDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "none";
}

farm.rando = function()
{
		utl.eid("seedDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "none";
	utl.eid("seedDiv").style.display = "block";
}
farm.play = function()
{
		utl.eid("seedDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "block";
}
farm.pepp = function()
{
	utl.eid("seedDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "block";
}
farm.tomat = function()
{
	utl.eid("seedDiv").style.display = "none";
	utl.eid("playerDiv").style.display = "none";
	utl.eid("pepperDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "none";
	utl.eid("tomatoDiv").style.display = "block";
}






window.onload = function()
{
	utl.eid("randoSeeds").addEventListener('mouseout', farm.mout);
	utl.eid("player").addEventListener('mouseout', farm.mout);
	utl.eid("peppers").addEventListener('mouseout', farm.mout);
	utl.eid("tomatoes").addEventListener('mouseout', farm.mout);
	
	utl.eid("randoSeeds").addEventListener('mouseover', farm.rando);
	utl.eid("player").addEventListener('mouseover', farm.play);
	utl.eid("peppers").addEventListener('mouseover', farm.pepp);
	utl.eid("tomatoes").addEventListener('mouseover', farm.tomat);
}


