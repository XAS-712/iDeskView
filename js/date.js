var xmlHttp
var xmlHttp2

function showDate()
{
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url="core.php"
url=url+"?do=date"
url=url+"&sid="+Math.random()
xmlHttp.onreadystatechange=stateChanged 
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
//setTimeout(showTime,1000)
} 

function showTime()
{
xmlHttp2=GetXmlHttpObject()
if (xmlHttp2==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url="core.php"
url=url+"?do=time"
url=url+"&sid="+Math.random()
xmlHttp2.onreadystatechange=stateChangedt 
xmlHttp2.open("GET",url,true)
xmlHttp2.send(null)
//setTimeout(showTime,1000)
} 

function showMoto()
{
xmlHttp3=GetXmlHttpObject()
if (xmlHttp3==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url="core.php"
url=url+"?do=moto"
url=url+"&sid="+Math.random()
xmlHttp3.onreadystatechange=stateChangedmt 
xmlHttp3.open("GET",url,true)
xmlHttp3.send(null)
//setTimeout(showTime,1000)
} 

function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 document.getElementById("dateShow").innerHTML=xmlHttp.responseText 
 } 
}

function stateChangedmt() 
{ 
if (xmlHttp3.readyState==4 || xmlHttp3.readyState=="complete")
 { 
 document.getElementById("motoShow").innerHTML=xmlHttp3.responseText 
 } 
}

function stateChangedt() 
{ 
if (xmlHttp2.readyState==4 || xmlHttp2.readyState=="complete")
 { 
 document.getElementById("timeShow").innerHTML=xmlHttp2.responseText 
 } 
}

function GetXmlHttpObject()
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