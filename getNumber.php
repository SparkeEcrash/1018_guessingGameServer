<?php

require_once('mysql_credentials.php');

if( empty($_POST['exchangeCode'])){
	$output = [
		'success'=> false,
		'error'=>'missing exchange code'
	];
	$json_output = json_encode($output);
	print($json_output);
	exit();
}

$code = addslashes( $_POST['exchangeCode'] );

$query = "SELECT * FROM currentNumber WHERE numberCode='{$code}'";

$output = [
	'success'=>false
];

//procedural
// $result = mysqli_query($conn, $query);
// if($result){
// 	if(mysqli_num_rows($result)>0){
// 		$data = mysqli_fetch_assoc($result);
// 		$output['number'] = $data['number'];
// 	}
// }

//oop
$result = $db->query($query);
if($result){
	if( $result->num_rows>0){
		$output['success']= true;
		$data = $result->fetch_assoc();
		$output['number'] = $data['number'];
	} else {
		//there was no data
		$output['error'] = 'invalid code';
	}
} else {
	//the query was wrong
	$output['error'] = $db->error;
	//procedural
	//$output['error'] = mysqli_error($conn);
}

$json_output = json_encode($output);
print($json_output);
?>
















