<?php

require_once('mysql_credentials.php');

$min = intval($_GET['min']);
$max = intval($_GET['max']);

$code = uniqid();

$randomNumber = rand( $min, $max); //do some work

//$query = "INSERT INTO `currentNumber` SET (`number`, `numberCode`) VALUES ({$randomNumber}, '{$code}')";
$query = "INSERT INTO `currentNumber` SET `number`={$randomNumber}, `numberCode`='{$code}' ";

//oop
$result = $db->query($query);
//procedural
//$result = mysqli_query($conn, $query);

$output = [
	'success'=>false,
];
if($result){
	//the query worked?
	//oop

	if($db->affected_rows>0){
		$output['success'] = true;
		$output['code'] = $code; 
	} else {
		$output['error'] = $db->error;
	}
	//procedural
	// if(mysqli_affected_rows($conn)){
	// 	$output = [  //ready your response
	// 		'success'=>true,
	// 		'number'=> $randomNumber,
	// 		'code'=>$code
	// 	];		
	// } else {
	// 	$output['error'] = mysqli_error($conn);
	// }
} else {
	//the query failed
	$output['error']=$db->connect_error;
}
$json_output = json_encode( $output ); //convert response to json

print( $json_output );  //send the response

?>







