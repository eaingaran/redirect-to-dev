function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
};
function delayLoadPage()  {
  sleep(2000);
  document.getElementById("home").style.display = 'none';
  document.getElementById("ready").style.display = 'block';
};
window.onload = function() {
	document.body.className = '';
	delayLoadPage();
};
window.ontouchmove = function() {
	return false;
};
window.onorientationchange = function() {
	document.body.scrollTop = 0;
};
