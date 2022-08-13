$(document).ready(function () {
	$(".destination__slider").owlCarousel({
		items: 3,
		//  center: true,
		loop: true,
		margin: 15,
		nav: true,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplayDelay: 1000,
	});
});

$(document).ready(function () {
	$(".feedback__row").owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		nav: true,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplayDelay: 1000,
	});
});

$(document).ready(function () {
	$(".blog__row").owlCarousel({
		items: 2,
		//  center: true,
		loop: true,
		margin: 30,
		nav: true,
		dots: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplayDelay: 1000,
	});
});