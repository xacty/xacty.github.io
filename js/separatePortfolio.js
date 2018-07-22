$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		
	    if (y >= 500) {
	      $('.photoCel,.photo2').addClass('animateMe')
	    }
	    if (y >= 1200) {
	      $('.photo3,.ipad').addClass('animateMe')
	    }
	});
});