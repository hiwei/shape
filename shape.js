
$(document).ready(function () {
	// logo to home
	$('.menu_logo').on('click', function() {
		location.href = 'home.html';
	});
	
	// to top
	$('.to_top span').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	$('.num_link span').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	
	// img change
    function scroll() {
        if ($(window).scrollTop() > 2000) {
			$(".change_bg1").fadeOut(1000);
		}
		if ($(window).scrollTop() < 2000) {
			$(".change_bg1").fadeIn(1000);
		}
        if ($(window).scrollTop() > 5000) {
			$(".change_bg2").fadeOut(1000);
		}
		if ($(window).scrollTop() < 5000) {
			$(".change_bg2").fadeIn(1000);
		}
		if ($(window).scrollTop() > 8000) {
			$(".change_bg3").fadeOut(1000);
		}
		if ($(window).scrollTop() < 8000) {
			$(".change_bg3").fadeIn(1000);
		}
	}
    document.onscroll = scroll;
});

    $(window).scroll( function(){
        $('.float_bottom').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()-500;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
				$('.price_text').animate({'opacity':'1'},1000);    
            }
			if( bottom_of_window > bottom_of_object ){
				$('.to_top').animate({'opacity':'1'},1000);    
            }
        }); 
    });

	
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 80;
    else if (event.detail) delta = -event.detail / 200;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 18; //lower is faster
  var scrollSpeed = 18; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}