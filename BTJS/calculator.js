var t = '';
function showNumber(number) {
	t += number;
 	document.getElementById('txtshow').value = t;
}

function delShow() {
	t = t.substr(0, t.length-1);
	document.getElementById('txtshow').value = t;
}

function acShow() {
	document.getElementById('txtshow').value = '';
	t = '' ;
}

function evalShow() {
		document.getElementById('txtshow').value = eval(document.getElementById('txtshow').value);
		t = eval(document.getElementById('txtshow').value);

}