$(document).ready(function() {
	pictures = ['pics/migos1.jpg', 'pics/migos2.png', 'pics/migos3.jpg', 'pics/migos5.jpg']
	showSlide(pictures[0]);
});

function Next(n) {

	if (pictures.indexOf($('#current_image').attr('src')) + n >= pictures.length) {
		showSlide(pictures[0]);
	} else if (pictures.indexOf($('#current_image').attr('src')) + n < 0) {
		showSlide(pictures[pictures.length - 1]);
	} else {
		showSlide(pictures[pictures.indexOf($('#current_image').attr('src')) + n]);
	}
}
function showSlide(slide) {
	$('#current_image').attr('src', slide);
}


