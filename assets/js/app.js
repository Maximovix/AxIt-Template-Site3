$ (function(){

	let scrollPosition = $(window).scrollTop();

		/* Scroll */
		$("[data-scroll]").on("click",function(event) {
			event.preventDefault();

			let blockID = $(this).data('scroll'),
				blockOffSet = $(blockID).offset().top;

				$("#nav_toggle_item").removeClass("active");
				$("#nav").removeClass("active");

				$('html,body').animate({
					scrollTop: blockOffSet
				}, 700);
		});

		/* Description Tabs */
		$("#tabs-first").on("click",function(event) {
			event.preventDefault();

			$("#description-first").addClass("active");
			$("#description-second").removeClass("active");
			$("#description-third").removeClass("active");
		});

		$("#tabs-second").on("click", function(event) {
			event.preventDefault();

			$("#description-second").addClass("active");
			$("#description-first").removeClass("active");
			$("#description-third").removeClass("active");
		});

		$("#tabs-third").on("click", function(event) {
			event.preventDefault();

			$("#description-third").addClass("active");
			$("#description-first").removeClass("active");
			$("#description-second").removeClass("active");
		});


		/* Nav-Toggle */
		$("#nav_toggle").on("click", function (event) {
			event.preventDefault();

			$("#nav_toggle_item").toggleClass("active");
			$("#nav").toggleClass("active");
		});
});