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

// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

$grid.on( 'mouseover', '.grid-item-content', function() {

  var itemContent = this;
  setItemContentPixelSize( itemContent );

  var itemElem = itemContent.parentNode;
  $( itemElem ).toggleClass('is-expanded');

  // force redraw
  var redraw = itemContent.offsetWidth;
  // renable default transition
  itemContent.style[ transitionProp ] = '';

  addTransitionListener( itemContent );
  setItemContentTransitionSize( itemContent, itemElem );

  $grid.masonry();
});

var docElem = document.documentElement;
var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );
  // disable transition
  itemContent.style[ transitionProp ] = 'none';
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}
