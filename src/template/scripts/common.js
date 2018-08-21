$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.slider__list').slick({

	})


	$(".nano").nanoScroller({
		alwaysVisible: true
	});


	var linkMoreNav = $('.show-large-nav'),
			moreNav = $('.nav__sub-nav');

	$('.show-large-nav, .nav__sub-nav').hover(function() {
		moreNav.addClass('nav__sub-nav_show');
		linkMoreNav.addClass('show-large-nav_show')
	}, function() {
		moreNav.removeClass('nav__sub-nav_show');
		linkMoreNav.removeClass('show-large-nav_show')
	});


	function valueElementForm(nameElement, blockElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($(blockElement)),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input', 'input');
	valueElementForm('textarea', 'textarea');
	
	$('select').styler();


	$('.card__slider').each(function(index, el) {
		var image = $(this).find('.card__image'),
				images = $(this).find('.card__images');

		image.slick({
			arrows: false,
			asNavFor: images
		});

		images.slick({
			slidesToShow: 3,
			asNavFor: image,
			focusOnSelect: true
		});
	});
});
