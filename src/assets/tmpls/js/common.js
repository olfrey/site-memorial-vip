$(document).ready(function($) {

	// Add mask
	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	// Init sliders
	$('.slider__list').slick({

	})
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

	$('.certificates__list').slick({
		slidesToShow: 2
	})

	$('.gallery__list_2').slick({
		slidesToShow: 2,
	})

	$('.gallery__list_4').slick({
		slidesToShow: 2,
		rows: 2
	})

	$('.gallery__list_6').slick({
		slidesToShow: 3,
		rows: 2
	})


	// Nav hover
	var linkMoreNav = $('.show-large-nav'),
			moreNav = $('.nav__sub-nav');

	$('.show-large-nav, .nav__sub-nav').hover(function() {
		moreNav.addClass('nav__sub-nav_show');
		linkMoreNav.addClass('show-large-nav_show')
	}, function() {
		moreNav.removeClass('nav__sub-nav_show');
		linkMoreNav.removeClass('show-large-nav_show')
	});


	// Label + el
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


	// Card toggle elems
	$('.card__type-item:nth-of-type(1)').addClass('card__type-item_check');
	$('.card__slider:nth-of-type(1)').addClass('card__slider_show');

	$('.card__type-item').click(function(event) {
		var index = $(this).index() + 1,
				slider = $('.card__slider:nth-of-type('+index+')');
		
		if (!slider.hasClass('card__slider_show')) {
			$('.card__slider').removeClass('card__slider_show');
			$('.card__type-item').removeClass('card__type-item_check');

			$(this).addClass('card__type-item_check');
			slider.addClass('card__slider_show');

		}
	});

	// Toggle elems for click
	function hiddenToggleBtn(element, nameBlock) {
		element.each(function(index, el) {
			var textP = $(this).find('.'+nameBlock+'__text p'),
					toggle = $(this).find('.'+nameBlock+'__toggle');

			if(textP.length < 2) {
				toggle.hide();
			}
		});
	}

	hiddenToggleBtn($('.shares__item'), 'shares');
	hiddenToggleBtn($('.reviews__item'), 'reviews');

	function toggleBlock(element, nameBlock) {
		var item = element.parents('.'+nameBlock+'__item'),
				text = item.find('.'+nameBlock+'__text');

		text.css('height', 'auto');
		item.css('height', 'auto');
		element.hide();
	}

	$('.shares__toggle span').click(function(event) {
		toggleBlock($(this), 'shares');
	});

	$('.reviews__toggle span').click(function(event) {
		toggleBlock($(this), 'reviews');
	});


	// Comparison add width
	var comparisonList = $('.comparison__list .nano-content'),
			comparisonItem = $('.comparison__item');

	$(window).on('load resize', function() {
		var count = 0;
		comparisonItem.each(function(index, el) {
			var comparisonItemWidth = $(this).width(),
					comparisonItemPLeft = Number($(this).css('padding-left').replace('px', ''));
					comparisonItemPRight = Number($(this).css('padding-right').replace('px', ''));
					comparisonItemBRight = Number($(this).css('border-right-width').replace('px', ''));
			count = count + comparisonItemWidth + comparisonItemPLeft + comparisonItemPRight + comparisonItemBRight;
		});
		console.log(count);
		comparisonList.width(count);
	});

	function toggleItem(element, nameBlock) {
		var jobsItem = element.parents('.'+nameBlock+'__item'),
				jobsBody = element.siblings('.'+nameBlock+'__body');
		jobsItem.toggleClass(nameBlock+'__item_toggle');
		jobsBody.slideToggle(300);
	}


	// Show search on click
	$('.search__btn-show').on('click', function(event) {
		var search = $(this).parents('.search');
		search.addClass('search_show');
	});


	// Init toggle funciton
	$('.jobs__head').on('click', function() {
		toggleItem($(this), 'jobs');
	});

	$('.faq__head').on('click', function() {
		toggleItem($(this), 'faq');
	});


	// Scroll
	$('.scroll').perfectScrollbar();
});
