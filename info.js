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
		document.getElementById("1").innerHTML = "";
		check ++;
	}
	if(y==0){
		document.getElementById("2").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("2").innerHTML = "";
		check ++;
	}
	if(z==0){
		document.getElementById("3").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("3").innerHTML = "";
		check ++;
	}
	if(a==0){
		document.getElementById("4").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("4").innerHTML = "";
		check ++;
	}
	if(b==0){
		document.getElementById("5").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("5").innerHTML = "";
		check ++;
	}
	if(c==0){
		document.getElementById("6").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("6").innerHTML = "";
		check ++;
	}
	if(d==0){
		document.getElementById("7").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("7").innerHTML = "";
		check ++;
	}
	if(e==0){
		document.getElementById("8").innerHTML = "input required";
		check --;
	}
	else{
		document.getElementById("8").innerHTML = "";
	}
	if(d>e){
		document.getElementById("8").innerHTML = "invalid date";
		check --;
	}
	if(a.includes("@yahoo.com")){
		document.getElementById("4").innerHTML = "";
		check++;
	}
	else if(a.includes("@gmail.com")){
		document.getElementById("4").innerHTML = "";
		check++;
	}
	else if(a.includes("@up.edu.ph")){
		document.getElementById("4").innerHTML = "";
		check++;
	}
	else{
		document.getElementById("4").innerHTML = "invalid email";
		check--;
	}
	if(check>7){
		alert("Booking successfull");
	}
	check=0;
}
