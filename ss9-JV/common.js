var x=10, y=7;
/*
*sum function
*7/9/2017
*/ 
function sumfunction(x,y) {
	return x + y;
}
//ham Subtration
function hfunction(x,y) {
	return x - y;
}
//ham Multiplication
function nfunction(x,y) {
	return x * y;
}
//function Divison
function tfunction(x,y) {
	return x / y;
}
//function Modul
function dfunction(x,y) {
	return x % y;
}
function iffunction(n) {
	for(var i ; i<=n;x++){
		if(i % 3 == 0 & i % 5 == 0 & i % 15 == 0) {
			document.write("BA");
		}
	}
}
document.getElementById("demo").innerHTML = sumfunction(x,y);
document.getElementById("demo1").innerHTML = hfunction(x,y);
document.getElementById("demo2").innerHTML = nfunction(x,y);
document.getElementById("demo3").innerHTML = tfunction(x,y);
document.write("<br>");
document.write(dfunction(x,y));
document.getElementById("price").value;
document.getElementById("price").value - document.getElementById("price").value * document.getElementById("discount").value /100;
var Hvt = "Ho Quy Nhan";
document.write("<br>");
document.write("2:",Hvt.length);
document.write("<br>");
document.write(Hvt.search("n"));
document.write("<br>");
document.write(Hvt.slice("3"));	
document.write("<br>");
document.write(Hvt.replace("Quy","PHP09"));
document.write("<br>");
document.write(Hvt.toUpperCase());
document.write("<br>");
document.write(Hvt.toLowerCase());

