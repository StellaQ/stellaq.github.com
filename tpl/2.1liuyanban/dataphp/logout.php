<?php

$uid=$_COOKIE['uid'];
$name=$_COOKIE['name'];

setcookie("uid", $uid, time()-1,'/');  
setcookie("name", $name, time()-1,'/'); 

echo 1;
?>