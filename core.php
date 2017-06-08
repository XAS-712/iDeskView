<?php
$KEYKEY = "HUF:OR*M09moiURPO*Q#8qTOUHJf";
switch($_GET['do'])
{
	case "time":
	echo date("H:i");
	break;
	
	case "date":
	echo date("n月j日,D");
	break;
	
	case "musicnext":
	$handler = opendir('src/music');
	$arr = array();
	while( ($filename = readdir($handler)) !== false ) {
    if($filename != "." && $filename != ".."){
        $arr[] = $filename;
    }
	}
	closedir($handler);
	if(sizeof($arr)==0)
	{
		echo "00ddffss";
	}else{
		echo $arr[rand(0,sizeof($arr)-1)];
	}
	break;
	
	case "moto":
	$arr = file("src/moto/mottos.txt");
	echo $arr[rand(0,sizeof($arr)-1)];
	break;
	
	case "evntwrite":
	$tokenSRC = $_GET['token'];
	$tokenTGT = hash_hmac("sha256",$_GET['mes'],$KEYKEY);
	json_decode($_GET['mes']);
	if($tokenSRC==$tokenTGT)
	{
		if(json_last_error() != JSON_ERROR_NONE)
		{
			file_put_contents('./src/json/events.json', $_GET['mes']);
		}else{
			echo rand();
		}
	}else{
		echo rand();
	}
	break;
	
	case "evntread":
	$json_string = file_get_contents('./src/json/events.json');
	echo $json_string;
	break;
}
?>