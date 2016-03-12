<?php

require 'config.php';

$page=isset($_GET['page'])?$_GET['page']:1;
$n=5;

$result_count=$conn->query("SELECT count('cid') as count FROM contents");
$count=0;
while(!!$obj = $result_count->fetch_object()){
	$count=$obj->count;
}

$pages=ceil($count/$n);
if ($page>$pages) {
	echo 1;
	return;
}

$start=($page-1)*$n;   //Q3：此处待研究
$query="SELECT cid,uid,name,content,pubdate FROM contents
ORDER BY cid DESC LIMIT {$start},{$n}";
$result = $conn->query($query);

$results=array();
while(!!$row = $result->fetch_array(MYSQLI_ASSOC)){
	$results[]=$row;
}
echo json_encode($results,JSON_UNESCAPED_UNICODE);
?>