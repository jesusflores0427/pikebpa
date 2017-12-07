$(document).ready(function() {
	// var scroll = $(window).scrollTop();
		var banner = document.getElementById('banner');
		var h = window.innerHeight;
		banner.style.height = (h)+'px';

// =====================ensures that the page loads the correct stuff for its scroll value===================
		$(document).ready(function(){
		    $(this).scrollTop(0);
		});
		// console.log(h);


	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		console.log(scroll);


// =========================the navbar=======================
		var header = document.getElementById('header');
		var banner = document.getElementById('banner');
		var bannerCont = document.getElementById('banner-cont');
		var teams = document.getElementById('teams');
		var contact = document.getElementById('contact');
		contact.style.backgroundColor = '#D3D3D3';
		teams.style.backgroundColor = '#fff';
		teams.style.marginBottom = 100+'vh';
		var banner2 = document.getElementById('services-banner');
		// bannerCont.style.zIndex = 8;
		var h = window.innerHeight;
		header.style.zIndex = 99;
		// console.log(h);
		$('#header').addClass('test');

		if (scroll >= 790) {
			bannerCont.style.position = "absolute";
			bannerCont.style.top = 10000+'px';
			// console.log(bannerCont.style.top);
		} else {
			bannerCont.style.position = "absolute";
			bannerCont.style.top = 0+'px';
			bannerCont.style.left = 375+'px';
		}

		if (scroll <= 1022) {
			// console.log(scroll);
			$('#header').removeClass('fixed');
			$('#header').addClass('test');
			header.style.position = "fixed";
			header.style.bottom = scroll+'px';
			// banner.style.zIndex = '-'+1;
			// banner.style.position = "fixed";
			// banner.style.top = 0+'px';
			// banner.style.width = 100+'vw';
			banner.style.zIndex = 0;
			banner.style.height = (h - scroll)+'px';
			// console.log(header.style.bottom);
		} if (scroll > 1022){
			$('#header').removeClass('test');
			$('#header').addClass('fixed');
			banner.style.zIndex = '-'+4;
			header.style.zIndex = 99;
		}  

		// while (scroll < 500) {
		// 	$('#header').style.position = scroll;
		// }
		if (scroll > 1062 && scroll < 2217) {
			banner.style.height = 0+'px';
			// console.log(banner2.style.height);
		}

// ========================services=========================

		var banner3 = document.getElementById('works-banner');
		banner2.style.height = (100)+'vh';
// 		var services = document.getElementById('services');
		if (scroll >= 200) {
			$('services-banner').addClass('fixed');
			banner2.style.zIndex = '-'+6;
// // =========================opacity============================

// 			// services.style.position = "fixed";
// 			// services.style.top = 0+'px';
// 			// services.style.height = 100+'vh';
// 			// services.style.width = 100+'vw';
// 			// services.style.opacity = ((scroll - 560) / 1000);
// 			// console.log(services.style.opacity);
// 			// services.style.backgroundImage = 'url(../bpasite/images/workHard.jpg)';

// // =========================fixed image height========================
// 			services.style.bottom = (-566 - (scroll-560))+'px';

			// banner2.style.position = "fixed";
			// banner2.style.bottom = 0+'px';
			// banner2.style.height = (scroll - 540)+'px';
			// console.log(services.style.height);
			// banner2.style.width = 100+'vw';
			banner2.style.backgroundImage = 'url(../bpasite/images/workHard.jpg)';
			// console.log("hello");
		} if (scroll > 1490) {
			$('works-banner').addClass('fixed');
			banner3.style.backgroundImage = 'url(../bpasite/images/pinkmoon.jpg)';
			banner3.style.height = 100+'vh';
			banner3.style.zIndex = '-'+7;
			banner.style.zIndex = '-'+8;
			banner2.style.height = (h - (scroll - 1490))+'px';
			// console.log(banner2.style.height);
		}  if  (scroll > 2507) {
			banner2.style.zIndex = '-'+10;
			banner3.style.height = 100+'vh';
			banner3.style.zIndex = '-'+1;
		}
		// if (scroll >= 2100) {
		// 	services.style.backgroundImage = 'url(../bpasite/images/banner.jpg)';
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