<html>
<head>
<title>Yuanmate iDeskView View</title>
<style>
#pratA{
width: 680px;
height: 340px;
color: white;
}
#pratB{
width: 340px;
height: 170px;
color: white;
}
</style>
<script src="js/date.js"></script> 
<script src="js/musi.js"></script> 
<script src="js/event.js"></script>
<script src="js/sensor.js"></script> 
<script type="text/javascript">
window.onload=function(){
showDate("date");
showTime("time");
eventNext();
showMoto();
checkSensor();
setInterval("showDate(\"date\")","2000");
setInterval("showTime(\"time\")","2000");
setInterval("eventNext()","5000");
setInterval("showMoto()","30000");
//playNext();
InitLast();
} </script>
<script type="text/javascript">
function setLoop(loop){
if(loop.checked){
    document.getElementById("aud").loop = "loop";
}else{
	document.getElementById("aud").loop = null;
}
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
function clearCookie(name) {    
    setCookie(name, "", -1);    
}
function InitLast()
{
username=getCookie('lastplay')
username2=getCookie('lastplay2')
if (username!=null && username!="" && username2!=null && username2!="")
  {
	document.getElementById("aud").src=username
	document.getElementById("musicname").innerHTML=username2
	clearCookie("lastplay")
	clearCookie("lastplay2")
  }
else 
  {
  playNext()
  }
}
function SaveLast()
{
username=document.getElementById("aud").src
username2=document.getElementById("musicname").innerHTML
if (username!=null && username!="")
  {
	setCookie('lastplay',username,14)
	setCookie('lastplay2',username2,14)
  }
}
</script>

</head>

<body background="src/img/img106_bg.png">
<h1 style="font-family:arial;color:white;text-align:center">Yuanmate iDeskView</h1>
<hr />
<!--<div id="prat1">InfoHere</div>
<div id="prat2">TimeHere</div>
<div id="prat3">EvntHere</div>
<div id="prat4">MusiHere</div> -->
<div>
     <div id="pratA" style="float:left;width:49%">
	 <div>
     <div id="pratB" style="float:left;width:49%">
	 <div name="sensorview">
	 <table border="1" style="font-family:arial;color:white">
     <tr>
     <th style="width:23%">Sensor</th>
     <th style="width:26%">Value</th>
	 <th style="width:23%">Sensor</th>
	 <th style="width:26%">Value</th>
     </tr>
     <tr>
     <td>室内温度</td>
     <td><span id="inTemp">NoData</span></td>
	 <td>室外光照</td>
     <td><span id="inTemp">NoData</span></td>
     </tr>
     <tr>
     <td>室内湿度</td>
     <td><span id="inHumi">NoData</span></td>
     </tr>
	 <tr>
     <td>室外温度</td>
     <td><span id="outTemp">NoData</span></td>
     </tr>
	 <tr>
     <td>室外气压</td>
     <td><span id="outPres">NoData</span></td>
     </tr>
     </table>
	 </div>
	 </div>
     <div id="pratB" style="float:right;width:49%">
	 InfoB
	 </div>
	 </div>
	 <div>
     <div id="pratB" style="float:left;width:49%">
	 InfoC
	 </div>
     <div id="pratB" style="float:right;width:49%">
	 InfoD
	 </div>
	 </div>
	 </div>
     <div id="pratA" style="float:right;width:49%">
	 <div>
     <div id="pratB" style="float:left;width:49%">
		<h3 style="font-family:arial;color:white">
			<span id="evntAName">无事件(----)</span>
		</h3>
		<h4 style="font-family:arial;color:white">
			<span id="evntADate">余-天</span>
		</h4>
		<h5 style="font-family:arial;color:white;text-align:center">
			<span id="evntAText">无备注</span>
		</h5>		
	 </div>
     <div id="pratB" style="float:right;width:49%">
		<h3 style="font-family:arial;color:white">
			<span id="evntBName">无事件(----)</span>
		</h3>
		<h4 style="font-family:arial;color:white">
			<span id="evntBDate">余-天</span>
		</h4>
		<h5 style="font-family:arial;color:white;text-align:center">
			<span id="evntBText">无备注</span>
		</h5>
	 </div>
	 </div>
	 <div>
     <div id="pratB" style="float:left;width:49%">
		<h3 style="font-family:arial;color:white">
			<span id="evntCName">无事件(----)</span>
		</h3>
		<h4 style="font-family:arial;color:white">
			<span id="evntCDate">余-天</span>
		</h4>
		<h5 style="font-family:arial;color:white;text-align:center">
			<span id="evntCText">无备注</span>
		</h5>
	 </div>
     <div id="pratB" style="float:right;width:49%">
		<h3 style="font-family:arial;color:white">
			<span id="evntDName">无事件(----)</span>
		</h3>
		<h4 style="font-family:arial;color:white">
			<span id="evntDDate">余-天</span>
		</h4>
		<h5 style="font-family:arial;color:white;text-align:center">
			<span id="evntDText">无备注</span>
		</h5>
	 </div>
	 </div>
	 </div>
</div>
<div>
     <div id="pratA" style="float:left;width:49%">
	 <!--Time-->
	 <div style="font-family:arial;color:white;font-size:120px;margin-left:50px;">
	 <span id="timeShow"></span>
	 </div>
	 <div style="font-family:arial;color:white;font-size:80px;margin-left:50px;">
	 <span id="dateShow"></span>
	 </div>
	 <div style="font-family:arial;color:white;font-size:40px;margin-left:40px;">
	 <span id="motoShow"></span>
	 </div>
	 </div>
     <div id="pratA" style="float:right;width:49%">
	 <div style="font-family:arial;color:white;font-size:32px;margin-left:0px;">
	 <span id="musicname" onclick="playNext()">No playlist given.</span>
	 </div>
	 <audio id="aud" controls="controls" autoplay="autoplay" onplaying="SaveLast()" onended="playNext()" src="" style="width:650px;"></audio><form><input type="checkbox" id="check1" onclick="setLoop(this)">LOOP</input></form>
	 </div>
</div>
</body>
</html>