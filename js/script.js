$(document).ready(function(){

	jQuery('a.menu-link').click(function(e){
		e.preventDefault();
		var href= jQuery(this).attr("href");
		jQuery('html, body').animate({
			scrollTop: jQuery(href).offset().top - 50}, 1000); }); 
			
	$(window).scroll(function(){
			if($(this).scrollTop() > 200) {
				$("#scroll-top").fadeIn("slow");
				
			}
			else {
				$("#scroll-top").fadeOut("slow");
				//$("#scroll-top").text($(this).scrollTop());
			}
	

	});
});
	

