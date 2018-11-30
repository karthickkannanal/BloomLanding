$(document).ready(function(){

	var ismobile = (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
	var isiPad = navigator.userAgent.match(/iPad/i) != null;	

	//Selectbox script
	if ($('.selectpicker').length){
		$('.selectpicker').selectpicker();
	}
	 $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );	
	$('.search-icon').click(function (e) {
		if($('.menu-section').hasClass('push-down')){
			$('.menu-section').removeClass('push-down');
		}
		$('.searchbox-sec').addClass('push-down');
		if ($(this).hasClass('search-open')) {
			$('.searchbox-sec').addClass('push-down');
			setTimeout(function () {
				$('.search-icon').removeClass('search-open');
				$('.search-icon').addClass('search-close');
			}, 500);
		}
		if ($(this).hasClass('search-close')) {
			$('.searchbox-sec').removeClass('push-down');     
			setTimeout(function () {
				$('.search-icon').removeClass('search-close');
				$('.search-icon').addClass('search-open');
			}, 500);
		}
	});
	$('.close-searchicon').click(function(e){
		$('.searchbox-sec').removeClass('push-down'); 
		setTimeout(function () {
			$('.search-icon').removeClass('search-close');
			$('.search-icon').addClass('search-open');
		}, 500);   
	});

	$(document).mouseup(function (e){
		var menucontainer = $('.menu-section');
		var searchcontainer = $('.searchbox-sec');
		if(!menucontainer.is(e.target) && menucontainer.has(e.target).length === 0){
			menucontainer.removeClass('push-down');
			setTimeout(function () {
				$('.navmenu-icon').removeClass('menu-close');
				$('.navmenu-icon').addClass('menu-open');
			}, 500);
		}
		if(!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0){
			searchcontainer.removeClass('push-down');
			setTimeout(function () {
				$('.search-icon').removeClass('search-close');
				$('.search-icon').addClass('search-open');
			}, 500);
		}
	});

	$('.menu-section ul li a').click(function(e){
		e.stopPropagation();
	});
	// $(document).mouseup(function (e){
	// 	var menucontainer = $('.menu-section');
	// 	var searchcontainer = $('.searchbox-sec');
	// 	if(!menucontainer.is(e.target) && menucontainer.has(e.target).length === 0){
	// 		menucontainer.removeClass('push-down');
	// 		setTimeout(function () {
	// 			$('.navmenu-icon').removeClass('menu-close');
	// 			$('.navmenu-icon').addClass('menu-open');
	// 		}, 500);
	// 	}
	// 	if(!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0){
	// 		searchcontainer.removeClass('push-down');
	// 		setTimeout(function () {
	// 			$('.search-icon').removeClass('search-close');
	// 			$('.search-icon').addClass('search-open');
	// 		}, 500);
	// 	}
	// });

	// $('.menu-section ul li a').click(function(e){
	// 	e.stopPropagation();
	// });

	if(!ismobile){		
		setTimeout(function(){
			$('#main-carousel .item').addClass('line-visible');
		},2400);

		setTimeout(function(){
			$('.left-header').addClass('left-animate');
			$('.right-header').addClass('right-animate');
		},200);
	}
	if(ismobile){
		// $('header').find('.left-header').removeClass('left-header');
		// $('header').find('.right-header').removeClass('right-header');
		$('.estates-imgrow1 > div,.estates-imgrow2 > div,.estates-imgrow3 > div').attr('class', '');
		$('.estates-imgrow1 > div,.estates-imgrow2 > div,.estates-imgrow3 > div').attr('class', 'estates-mobimgcont');
	}

	if(!ismobile){
		var $scrollingDiv = $('.nav-sticky');
		$(window).scroll(function(){
			$scrollingDiv.stop()
				.animate({"marginTop": ($(window).scrollTop() + 40) + "px"}, 700);
		});
	}

	// var sync1 = $("#content-carousel");
	// var sync2 = $("#main-carousel");
	// if(!ismobile){
	// 	var slidesPerPage = 5; 
	// }else{
	// 	var slidesPerPage = 1;
	// }
	// var syncedSecondary = true;
	// if($('body').hasClass('arabic')){
	// 	var rtlfunction = true;
	// 	var calrtlfunction = true;
	// }else{
	// 	var rtlfunction = false;
	// 	var calrtlfunction = false;
	// }



	var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		}
	);
	if(!ismobile){
		wow.init();
	}


	if ($('#calendar').length){
		$('#calendar').fullCalendar({
						defaultDate: new Date(),
						editable: true,
						eventLimit: true,
						contentHeight: 'auto',
						aspectRatio: 2,
						header: {
										left: 'prev',
										center: 'title',
										right: 'next'
						}
		});
}


	$('#carousel123').carousel({ interval:5000 });
	$('#carouselABC').carousel({ interval: 3600 });
	$('#event-setting').carousel({ interval: 6000 });
 
 
});

