(function ($) {
    "use strict";

    /*----------------------------
       		Preloader Active
       	------------------------------*/

    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });



    /*----------------------------
       		Main Slider Active
       	------------------------------*/
    $(".merox-main-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
       		Blog Slider Active
       	------------------------------*/
    $(".blog-img-slider").owlCarousel({
        loop: true,
        autoplay: true,
        animateIn: 'zoomInDown',
        smartSpeed: 5000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Blog Video Popup Active
    	------------------------------*/

    $(".blog-popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
       		Sticky Header Active
       	------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $(".header-area").removeClass("header-fixed animated slideInDown");
        } else {
            $(".header-area").addClass("header-fixed animated slideInDown");
        }
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".testimonial-wraper").owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Client Slider Active
    	------------------------------*/

    $(".all-client-slider").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

    /*----------------------------
        		WOW active
        	------------------------------*/

    new WOW().init();

})(jQuery);