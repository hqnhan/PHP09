
function iffunction(n) {
		var i = n;
		if (i % 3 == 0 & i % 5 == 0 & i % 15 == 0 ) {
			return "BA, NAM, MUOI LAM";
		}
		if( i % 3 == 0 ){
			return "BA";
		}
		if( i % 5 == 0 ){
			return "NAM";
		}
		if(i % 15 == 0){
			return "MUOI LAM";
		}	
	
}
document.getElementById("demo").innerHTML = iffunction(30);
function forfunction(){
	for(var i = 0; i<=100; i++){
		if(i % 15 == 0){
			document.write("MUOI LAM");
			document.write("<br>");
		}else if(i % 5 == 0){
			document.write("NAM");
			document.write("<br>");

		}else if(i % 3 == 0){
			document.write("BA");
			document.write("<br>");
		}
	}
}
document.getElementById("demo1").innerHTML = forfunction();