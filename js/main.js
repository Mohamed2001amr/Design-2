/* global $, alert, console */
$(function () {
    
    'use strict';

    // Trigger Nice Scroll

    $('html').niceScroll({

        cursorcolor: '#f7600e', // to change the scroll color
        cursorwidth: '10px',
        cursorborder: 'none',
        cursorborderradius: '2px'
    });

        // Adjust Header Height

        $('.header').height($(window).height());

        // Scroll to Features

        $('.header .arrows i').click(function () {

            $('html , body').animate({

                scrollTop: $('.feature').offset().top

            }, 1000);

        });

        // Scroll to Hire Us

        $('.hire').click(function () {

            $('html, body').animate({

                scrollTop: $('.contact').offset().top

            }, 1000);

        });

        // Scroll to Our Work

        $('.work').click(function () {

            $('html , body').animate({

                scrollTop: $('.our-work').offset().top

             }, 1000);

        });

        // show hidden items from work
        $('.show-more').click(function () {

            $('.our-work .hidden').fadeIn(1000);

        });

        // check Testimonials
        var RightArrow = $('.testimonials .fa-chevron-right'),
            LeftArrow = $('.testimonials .fa-chevron-left');

        function checkClients (){

            $('.client:first').hasClass('active') ? LeftArrow.fadeOut() : LeftArrow.fadeIn();
            $('.client:last').hasClass('active') ? RightArrow.fadeOut() : RightArrow.fadeIn();
        }

        checkClients();

        $('.testimonials i').click(function () {

            if($(this).hasClass('fa-chevron-right')) {

                $('.testimonials .active').fadeOut(100, function() {

                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                    checkClients();

                });

            } else {

                    $('.testimonials .active').fadeOut(100, function() {
    
                        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
    
                        checkClients();
    
                    });
            }

        });

});