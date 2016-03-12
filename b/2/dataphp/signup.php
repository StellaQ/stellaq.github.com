<?php

require 'config.php'; 

$email= isset($_POST['email'])?$_POST['email']:'';
$password=isset($_POST['password'])?$_POST['password']:'';
$name=isset($_POST['name'])?$_POST['name']:'';
$fn=isset($_POST['fn'])?$_POST['fn']:-1;

switch ($fn) {
	case 0:
		$query_one="SELECT * FROM users WHERE email='$email'";
		$result_one = $conn->query($query_one);
		$results_one=array();
		while(!!$row = $result_one->fetch_array(MYSQLI_ASSOC)){
			$results_one[]=$row;
		};
		if ($results_one!==[]) {
			echo 0;
		}else{
			echo 1;
		}
		break;
	case 1:
		$query_two="SELECT * FROM users WHERE name='$name'";
		$result_two = $conn->query($query_two);
		$results_two=array();
		while(!!$row = $result_two->fetch_array(MYSQLI_ASSOC)){
			$results_two[]=$row;
		};
		if ($results_two!==[]) {
			echo 2;
		}else{
			echo 3;
		}
		break;
	case 2:
		$query="INSERT INTO users(
			email,
			password,
			name,
			regdate)
		VALUES(
			'$email',
			'$password',
			'$name',
			NOW()
		)";
		$result = $conn->query($query);

		$query_three="SELECT uid FROM users WHERE name='$name'";
		$result_three=$conn->query($query_three);
		$results_three=array();
		while(!!$row = $result_three->fetch_array(MYSQLI_ASSOC)){
			$results_three[]=$row;
		}
		$uid=$results_three[0][uid];

		if ($result) {
			setcookie("uid", $uid, time()+3600,'/');  
			setcookie("name", $name, time()+3600,'/'); 
			echo 4;
		}else{
			echo 5;
		}
		break;
}

?>