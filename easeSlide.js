var moreLink = document.getElementById("moreLink");
var contactLink = document.getElementById("contactLink");

moreLink.addEventListener("click", easeSlide1, false);
contactLink.addEventListener("click", easeSlide2, false);
function easeSlide1() {
	$('html, body').animate({scrollTop: $(".aboutMe").offset().top}, 1000)
}
function easeSlide2() {
	$('html, body').animate({scrollTop: $("#aside").offset().top}, 1000)
}