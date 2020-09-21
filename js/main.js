$(document).ready(function () {
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	$('.header__slider').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		dots: true,
		fade: true,
		speed: 800,
		autoplay: 3000,
	});

	$('.spincrement:eq(0)').spincrement()
	$('.spincrement:eq(1)').spincrement()
	$('.spincrement:eq(2)').spincrement()
	$('.spincrement:eq(3)').spincrement()
	$('.spincrement:eq(4)').spincrement()

	$('.header-burger').on('click', function () {
		$('.header__menu ul').slideToggle();
	});

});
