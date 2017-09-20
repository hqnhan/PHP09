function changeBorder() {
	document.getElementById("firstname").style.border = "1px solid red";
	document.getElementById("surnam").style.border = "1px solid red";
	document.getElementById("mobile").style.border = "1px solid red";
	document.getElementById("newpassword").style.border = "1px solid red";
	document.getElementById("day").style.border = "1px solid red";
	document.getElementById("month").style.border = "1px solid red";
	document.getElementById("year").style.border = "1px solid red";	
}
function textBorder(id){
	var t = document.getElementById(id).value;
	if( t == ""){
		document.getElementById(id).style.border = "1px solid red";
	}else {
		document.getElementById(id).style.border = "1px solid black";
	}
}
function checkEmail() {
	var email = document.getElementById('email');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!filter.test(email.value)) {
		alert("please re-enter email");
	}
}
function checkPassword() {
	var password = document.getElementById('password');
	var filter = /[a-zA-Z0-9]{6,}/;
		if(!filter.test(password.value)) {
			alert("please re-enter password");
		}
}
function checkeorpass(){
	checkEmail();
	checkPassword();
}
function yearFunction() {
 	select = document.getElementById("year");
    for (var i = 2017; i>=1900; i--){
    	var opt = document.createElement("option");
    	var t = document.createTextNode(i);
        	opt.appendChild(t);
        	select.add(opt);
     }

}
function dayFunction() {
 	select = document.getElementById("day");
    for (var i = 1; i<=31; i++){
    	var opt = document.createElement("option");   	
    	var t = document.createTextNode(i);
        opt.appendChild(t);
        select.add(opt);
    
    }
}
