function dpfunction() {
	if (document.getElementById("Children").value > document.getElementById("Adults").value) {
		alert('NHAP LAI');
	}
	if (document.getElementById("Adults").value<1 || document.getElementById("Adults") == null) {
		alert("NHAP LAI SO NGUOI LON");
	}
}
function checkEmail() {
	var email = document.getElementById('email');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!filter.test(email.value)) {
		alert("please re-enter email");
		email.focus;
		return false;
	}
}
function ConvertMonth(month) {
	if (month < 10) {
		return "0"+month;
	}else{
		return month;
	}
}
function chekDate() {
	var Day = document.getElementById("Day").value;
	var Deparman = document.getElementById("Deparman").value;
	var date = new Date();
	dataNow = date.getFullYear() + "-" + ConvertMonth(date.getMonth() + 1) + "-" +date.getDate();
	if (Day < dataNow) {
		alert("Arrival date must be greater than or equal to the current date");
	}
	if (Deparman < Day) {
		alert("The departure date must be greater than or equal to the arrival date");
	}
}
function AvartaGender() {
	var gender = document.getElementById("gender").value;
	var color = document.getElementById("color").value;
	document.getElementById("GenderImage").style.border =  "5px solid"+color;
	if(gender == "Mr"){
		document.getElementById("GenderImage").src = "Mr.jpg";
	}else{
		document.getElementById("GenderImage").src = "Ms.jpg";
	}
}
function sovel() {
	dpfunction();
	checkEmail();
	chekDate();
}