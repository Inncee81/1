$(document).ready(function() {

	$('.change_image').click(function(e) {
		e.preventDefault();
		var rel = $(this).attr('rel');
		$("#image_box").html("<img src='images/" + rel + ".jpg' />");
	});
});