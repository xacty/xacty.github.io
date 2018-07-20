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

var videoPlayer= document.getElementById('video');

function playIt(){
videoPlayer.play();

var videos = [
"video11",
"video12",
"video15"
], videos = videos[Math.floor(Math.random() * videos.length)];

videoPlayer.src = "./img/" + videos + ".mp4";
}

videoPlayer.addEventListener('ended', playIt, false);

playIt();



var videoPlayer2= document.getElementById('video2');

function playIt2(){
videoPlayer2.play();

var videos2 = [
"video21",
"video22"
], videos2 = videos2[Math.floor(Math.random() * videos2.length)];

videoPlayer2.src = "./img/" + videos2 + ".mp4";
}

videoPlayer2.addEventListener('ended', playIt2, false);

playIt2();



var videoPlayer3= document.getElementById('video3');

function playIt3(){
videoPlayer3.play();

var videos3 = [
"video31",
"video32"
], videos3 = videos3[Math.floor(Math.random() * videos3.length)];

videoPlayer3.src = "./img/" + videos3 + ".mp4";
}

videoPlayer3.addEventListener('ended', playIt3, false);

playIt3();



var videoPlayer4= document.getElementById('video4');

function playIt4(){
videoPlayer4.play();

var videos4 = [
"video41",
"video42"
], videos4 = videos4[Math.floor(Math.random() * videos4.length)];

videoPlayer4.src = "./img/" + videos4 + ".mp4";
}

videoPlayer4.addEventListener('ended', playIt4, false);

playIt4();



$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		
		if (y >= 400) {
			$('#video2,.esto2').addClass('animateMe')
		}
    if (y >= 500) {
      $('.wrapped-phototwo').addClass('animateMe')
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