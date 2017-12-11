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
picture.img1 = seeds[Math.floor((Math.random() * seeds.length))];
picture.img2 = seeds[Math.floor((Math.random() * seeds.length))];
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
	var theImg;
	if(ev.target.nodeName.toLowerCase() != "img")
	{
		return;
	}
	theImg = ev.target.dataset.pic;
	if (theImg === "img1")
	{
		ev.target.src = seeds[Math.floor((Math.random() * seeds.length))];
		ev.target.dataset.pic = "img2";
	}
	else
	{
		ev.target.src = seeds[Math.floor((Math.random() * seeds.length))];
		ev.target.dataset.pic = "img1";
	}
	
	
}


//********************************************




window.onload = function()
{
	picture.randomize();
	
	utl.eid("resetti").addEventListener('click', picture.randomize);
	utl.eid("picTable").addEventListener('click', picture.params);
}