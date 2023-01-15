function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function styleGrid(showMobileLayout) {
	if(showMobileLayout) {
		// $("#grid").css("grid-template-columns", "auto auto");
		document.getElementById("grid").style.gridTemplateColumns = "auto auto";
	} else {
		// $("#grid").css("grid-template-columns", "auto auto auto auto");
		document.getElementById("grid").style.gridTemplateColumns = "auto auto auto auto";
	}
}

//runs on load
$(document).ready(function() {
	$("#nav-placeholder").load("nav.html");
  $("#instagram-placeholder").load("instagram.html");
  $("#contact").load("contact.html");

  var width = $( window ).width();
  var height = $( window ).height();
  var max = Math.max(width, height);
  styleGrid(width < height);
});

//dynamic browser window resize
$(window).resize(function(){
  var width = $( window ).width();
  var height = $( window ).height();
  styleGrid(width < height);
});