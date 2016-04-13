/*
	Photon by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

		$.getJSON('info.json', function(data) {
			console.log(data);
			$('#amount').html(data.count);

			var names = data.names;
			var files = data.files;

			for(var i = 0; i < names.length; i++){
				$('#list').append('<div class="3u"> <a href="/flags/' + files[i] + '"> <p>' + names[i] + '</p></a> </div>');
			}

			var indexOne = Math.floor(Math.random() * files.length);
			var linkOne = '/flags/' + files[indexOne];
			$('#exampleOneImg').attr('src', linkOne);
			$('#exampleOneName').html(names[indexOne]);
			$('#exampleOneCode').html(linkOne);
			$('#exampleOneLink').attr('href', linkOne);

			files.splice(indexOne, 1);
			names.splice(indexOne, 1);

			var indexTwo = Math.floor(Math.random() * files.length);
			var linkTwo = '/flags/' + files[indexTwo];
			$('#exampleTwoImg').attr('src', linkTwo);
			$('#exampleTwoName').html(names[indexTwo]);
			$('#exampleTwoCode').html(linkTwo);
			$('#exampleTwoLink').attr('href', linkTwo);

			files.splice(indexTwo, 1);
			names.splice(indexTwo, 1);

			var indexThree = Math.floor(Math.random() * files.length);
			var linkThree = '/flags/' + files[indexThree];
			$('#exampleThreeImg').attr('src', linkThree);
			$('#exampleThreeName').html(names[indexThree]);
			$('#exampleThreeCode').html(linkThree);
			$('#exampleThreeLink').attr('href', linkThree);


		});

	});

})(jQuery);