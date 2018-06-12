/*jQuery( document ).ready(function() {
	jQuery(window).scroll(function() {
	var scroll = jQuery(window).scrollTop();
	if (scroll >= 100) {
		jQuery(".navbar-default").addClass("sticky");
		} else {
		jQuery(".navbar-default").removeClass("sticky");
		}
	});
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('.navbar-default').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-default').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}*/

jQuery( document ).ready(function() {
	jQuery(window).scroll(function() {
	var scroll = jQuery(window).scrollTop();
	if (scroll >= 100) {
		jQuery(".navbar-default").addClass("sticky");
		} else {
		jQuery(".navbar-default").removeClass("sticky");
		}
	});
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["^500start^500", "^500run^500", "^500grow^500"],
        typeSpeed: 40,
		loop: true
      });
});

$("#tirilililili").affix({
  offset: {
    top: 30,
    bottom: 475
  }
})

$('#sideproject').affix({
  offset: {
    top: 30,
    bottom: 600
  }
})

$('.carousel').carousel({
	pause: true,
    interval: false
});

$(document).ready(function(){

    $(".btn-filter").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});

$(document).ready(function(){
    var url = $("#promoVideo").attr('src');
    
    $("#promoVideo").attr('src', '');
    
    $("#videoModal").on('shown.bs.modal', function(){
        $("#promoVideo").attr('src', url);
    });
    
    $("#videoModal").on('hide.bs.modal', function(){
        $("#promoVideo").attr('src', '');
    });
});

$('.select-card').on('click', function() {
  var cardId = $(this).data('cardId');
  var matchingCard = $(".card[data-card-id="+cardId+"]");
  matchingCard.attr('class', 'card card-0');

  cardId = 1;
  $.each($('.card').not(matchingCard), function() {
    $(this).attr('class', 'card card-'+cardId);
    cardId += 1;
  });
});