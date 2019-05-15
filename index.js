function delayLoadPage()  {
  setTimeout("", 2000);
  document.getElementById("main").style.display = 'none';
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
