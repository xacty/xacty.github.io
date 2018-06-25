$('#sideportfolio').affix({offset: {top: 30, bottom: 500} });

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 200
        }, 1000);
    };
});



$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		
		if (y >= 400) {
			$('#video2,.esto2').addClass('animateMe')
		}
		if (y >= 1000) {
			$('#video3,.esto5').addClass('animateMe')
		}
		if (y >= 2000) {
			$('#video4,.esto4').addClass('animateMe')
		}

		
	});
});

$(window).scroll(function(e)
  {
    var offsetRange = $(window).height() / 3,
        offsetTop = $(window).scrollTop() + offsetRange + $("#header").outerHeight(true),
        offsetBottom = offsetTop + offsetRange;

    $("#video2,#video3,#video4").each(function () { 
      var y1 = $(this).offset().top;
      var y2 = offsetTop;
      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
        this.pause(); 
      } else {
        this.play();
      }
    });
});