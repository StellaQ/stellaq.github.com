<?php

require 'config.php';

$uid=$_COOKIE['uid'];
$name=$_COOKIE['name'];
$content=$_POST['message'];

$query="INSERT INTO contents(
	uid,
	name,
	content,
	pubdate)
VALUES(
	'$uid',
	'$name',
	'$content',
	NOW()
	)";
$result = $conn->query($query);

if ($result) {
	echo 1;
}；

?>