$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		var header = document.getElementById('header');
		$('#header').addClass('test');

		if (scroll <= 1000) {
			// console.log(scroll);
			$('#header').removeClass('fixed');
			$('#header').addClass('test');
			header.style.position = "fixed";
			header.style.bottom = scroll+'px';
			console.log(header.style.bottom);
		} else if (scroll > 1000){
			$('#header').removeClass('test');
			$('#header').addClass('fixed');
		} 

		// while (scroll < 500) {
		// 	$('#header').style.position = scroll;
		// }
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});