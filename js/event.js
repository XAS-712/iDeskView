var xmlHttpe

function toJson(str){
 return JSON.parse(str);
}

function eventNext()
{
xmlHttpe=GetXmlHttpObjecte()
if (xmlHttpe==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url="core.php"
url=url+"?do=evntread"
url=url+"&sid="+Math.random()
xmlHttpe.onreadystatechange=stateChangede 
xmlHttpe.open("GET",url,true)
xmlHttpe.send(null)
	
} 

function namechk(instrnc)
{
	if(instrnc==undefined || instrnc.length < 1)
	{
		return "无事件"
	}else{
		return instrnc
	}
}

function textchk(instrtc)
{
	if(instrtc==undefined || instrtc.length < 1)
	{
		return "无备注"
	}else{
		return instrtc
	}
}

function datespan(instrds)
{
	if(instrds==null || instrds.toString().length < 1 || instrds==undefined)
	{
		return "余-天"
	}else{
		var k2=(Date.parse(new Date())) / 1000
		return "余" + Math.ceil((instrds + 1 - k2) / 60 / 60 /24 + 0.7) + "天"
	}
}

Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}

function tosdate(instrtd)
{
	if(instrtd==null || instrtd.toString().length < 1 || instrtd==undefined)
	{
		return "(----)"
	}else{
		var date = new Date()
		date.setTime(instrtd * 1000)
		return "(" + date.pattern("yyMMdd") + ")"
	}
}

function stateChangede() 
{ 
if (xmlHttpe.readyState==4 || xmlHttpe.readyState=="complete")
 {
	 var injson=toJson(xmlHttpe.responseText)
 document.getElementById("evntAName").innerHTML=namechk(injson.aname) + tosdate(injson.adate)
 document.getElementById("evntADate").innerHTML=datespan(injson.adate)
 document.getElementById("evntAText").innerHTML=textchk(injson.atext)
 
 document.getElementById("evntBName").innerHTML=namechk(injson.bname) + tosdate(injson.bdate)
 document.getElementById("evntBDate").innerHTML=datespan(injson.bdate)
 document.getElementById("evntBText").innerHTML=textchk(injson.btext)
 
 document.getElementById("evntCName").innerHTML=namechk(injson.cname) + tosdate(injson.cdate)
 document.getElementById("evntCDate").innerHTML=datespan(injson.cdate)
 document.getElementById("evntCText").innerHTML=textchk(injson.ctext)
 
 document.getElementById("evntDName").innerHTML=namechk(injson.dname) + tosdate(injson.ddate)
 document.getElementById("evntDDate").innerHTML=datespan(injson.ddate)
 document.getElementById("evntDText").innerHTML=textchk(injson.dtext)
 } 
}

function GetXmlHttpObjecte()
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