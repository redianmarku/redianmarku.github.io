const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "freelancing",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 13
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "flask",
				weight: 10
			}, {
				text: "php",
				weight: 9
			}, {
				text: "python",
				weight: 16
			}, {
				text: "scripting",
				weight: 10
			}, {
				text: "automation",
				weight: 8
			}, {
				text: "youtube",
				weight: 6
			}, {
				text: "github",
				weight: 8
			}, {
				text: "aws",
				weight: 13
			}, {
				text: "django",
				weight: 15
			}, {
				text: "bootstrap",
				weight: 6
			}, {
				text: "moodle",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Web Developer.", "love everything about code.", "also freelance on my free time.", "solve problems too."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed:1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();



