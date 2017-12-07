$(document).ready(function() {
	var header = document.getElementById('header');
	var banner = document.getElementById('banner');
	var boxone = document.getElementById('box-one');
		var h = window.innerHeight;
		banner.style.height = (h)+'px';	

		$(document).ready(function(){
		    $(this).scrollTop(0);
		});

		$('#header').addClass('fixed');
			boxone.style.position = "relative";
			boxone.style.top = '-'+780+'px';


	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		console.log(scroll);


		// if (scroll < 305) {
		// 	boxone.style.position = "relative";
		// boxone.style.top = '-'+760+'px';
		// }


	});


});