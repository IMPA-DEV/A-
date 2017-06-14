$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/* slider */
    $('.how-slider').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.prev-how'),
        nextArrow: $('.next-how')
    });

    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    /* FAQ */
    $('.faq-wrap h3').click(function() {
		$(this).next('.faq-answer').slideToggle('slow');
		$(this).toggleClass('open-faq');
    });

	/* Popup WORK */
    $('.popup-work').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    /* Popup Form */
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    /* OPen Request Form */
    $('.open-request').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('.request-form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '10%'}, 500); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
        if($(window).height() < 700) {
            $('html').css('overflow','auto');
        } else {
            $('html').css('overflow','hidden');
        }
    });

    /* Close Request Form */
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('.close, .overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('.request-form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('.overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
        $('html').css('overflow','auto');
    });

});

