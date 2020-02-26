function info(){
	var x = document.getElementById("name1").value;
	var y = document.getElementById("name2").value;
	var z = document.getElementById("gender").value;
	var a = document.getElementById("email").value;
	var b = document.getElementById("origin").value;
	var c = document.getElementById("destination").value;
	var d = document.getElementById("departure").value;
	var e = document.getElementById("return").value;
	var check = 0;
	if(x==0){
		document.getElementById("1").innerHTML = "input required";
	}
	else{
		check ++;
	}
	if(y==0){
		document.getElementById("2").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(z==0){
		document.getElementById("3").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(a==0){
		document.getElementById("4").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(b==0){
		document.getElementById("5").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(c==0){
		document.getElementById("6").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(d==0){
		document.getElementById("7").innerHTML = "input required";
		check --;
	}
	else{
		check ++;
	}
	if(e==0){
		document.getElementById("8").innerHTML = "input required";
		check --;
	}
	if(d>e){
		document.getElementById("8").innerHTML = "invalid date";
		check --;
	}
	if(a.includes("@yahoo.com")){
		check++;
	}
	else if(a.includes("@gmail.com")){
		check++;
	}
	else if(a.includes("@up.edu.ph")){
		check++;
	}
	else{
		document.getElementById("4").innerHTML = "invalid email";
		check--;
	}
	if(check>6){
		alert("Booking successfull");
	}
	check=0;
}
