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

var seeds = ['blackberry.png', 'spiceBerry.png', 'sweetPea.png', 'grape.png', 'Hazelnut.png', 'Wild_Plum.png'];

var picture = {};
var imgs = {};
picture.randomize = function()
{
	var imgs = document.getElementById("picTable").getElementsByTagName("img"); /*utl.tag("picTable", "img"),*/

	
	for(var i = 0; i < imgs.length; i++)
	{
		imgs[i].src = seeds[Math.floor((Math.random() * seeds.length))];
		imgs[i].style.display = 'block';
	}
	
}
picture.params = function(ev)
{
	if(ev.target.nodeName.toLowerCase() != "td")
	{
		return;
	}
	else
	{
		document.getElementById(ev.target.dataset.pid).src = "";
		document.getElementById(ev.target.dataset.pid).src = seeds[Math.floor((Math.random() * seeds.length))];
	}
}


//********************************************




window.onload = function()
{
	picture.randomize();
	
	utl.eid("resetti").addEventListener('click', picture.randomize);
	utl.eid("picTable").addEventListener('click', picture.params);
}