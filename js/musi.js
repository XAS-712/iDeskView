var xmlHttpm

function playNext()
{
	if(document.getElementById("aud").loop!="loop")
	{
xmlHttpm=GetXmlHttpObjectm()
if (xmlHttpm==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url="core.php"
url=url+"?do=musicnext"
url=url+"&sid="+Math.random()
xmlHttpm.onreadystatechange=stateChangedm 
xmlHttpm.open("GET",url,true)
xmlHttpm.send(null)
//setTimeout(showTime,1000)
	}
} 

function stateChangedm() 
{ 
if (xmlHttpm.readyState==4 || xmlHttpm.readyState=="complete")
 { 
/*if (xmlHttpm.responseText=="00ddffss")
{
	document.getElementById("nusicname").innerHTML="No playlist given."
	document.getElementById("aud").src=""
	alert("No File!")
}else*/{
 document.getElementById("musicname").innerHTML=xmlHttpm.responseText 
 document.getElementById("aud").src="src/music/"+xmlHttpm.responseText
 } 
}
}

function GetXmlHttpObjectm()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 // Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}