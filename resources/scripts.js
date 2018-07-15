function Points() {
	// Get points
	president_points = document.getElementById("president_points").value;
	councillor1_points = document.getElementById("councillor1_points").value;
	councillor2_points = document.getElementById("councillor2_points").value;
	councillor3_points = document.getElementById("councillor3_points").value;
	councillor4_points = document.getElementById("councillor4_points").value;
	councillor5_points = document.getElementById("councillor5_points").value;
	// Validity check
	if (president_points + councillor1_points + councillor2_points + councillor3_points + councillor4_points + councillor5_points > 3){
		document.getElementById("error").innerHTML = "You can't spend more than 3 points.";
	}
	// Good
	else {
		// New request
		xmlhttp = new XMLHttpRequest();
		// Request to send (method is "POST", url, asynchronous)
		points = btoa("p;" + president_points + ";" + councillor1_points + ";" + councillor2_points + ";" + councillor3_points + ";" + councillor4_points + ";" + councillor5_points);
		url = "./php/db.php?i=" + points;
		xmlhttp.open("POST",url,true);
		// Code to execute upon response ("4" = finished and response is ready, "200" = correct request)
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				// Response
				response = this.responseText;
				// Output
				document.getElementById("error").innerHTML = "Success!";
			}
			else if (this.readyState == 4 && this.status != 200) {
				document.getElementById("error").innerHTML = "There was an error (" + this.status + "). Please try again.";
			}
		};
		// Send request
		xmlhttp.send();
	}
};