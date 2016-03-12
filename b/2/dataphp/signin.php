<?php

require 'config.php';

$email= isset($_POST['email'])?$_POST['email']:'';
$password=isset($_POST['password'])?$_POST['password']:'';
//Q1:password如何加密传输，加密验证以及加密写入数据库待研究

$query="SELECT uid,email,password,name FROM users WHERE email='$email'";
$result = $conn->query($query);
//mysql_query() 仅对 SELECT，SHOW，EXPLAIN 或 DESCRIBE 语句返回一个资源标识符，
//如果查询执行不正确则返回 FALSE。
//对于其它类型的 SQL 语句，mysql_query() 在执行成功时返回 TRUE，出错时返回 FALSE。
//非 FALSE 的返回值意味着查询是合法的并能够被服务器执行。
//这并不说明任何有关影响到的或返回的行数。
//很有可能一条查询执行成功了但并未影响到或并未返回任何行。
$results=array();
while(!!$row = $result->fetch_array(MYSQLI_ASSOC)){
	$results[]=$row;
};
if($results==[]){
	echo 0;
}else if($results[0][password]!==$password){
	echo 1;
}else{
	setcookie("uid", $results[0][uid], time()+3600,'/');  
	setcookie("name", $results[0][name], time()+3600,'/'); 
	echo 2;
}

?>