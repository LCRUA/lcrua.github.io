<?php
	// Get request from URL and split it on ";"
	$request = $_POST["i"];
	$request = base64_decode($request);
	$request = explode(";", $request);
	if ($request[0] == "p"){
		$president_points = $request[1];
		$councillor1_points = $request[2];
		$councillor2_points = $request[3];
		$councillor3_points = $request[4];
		$councillor4_points = $request[5];
		$councillor5_points = $request[6];
		
	}
?>