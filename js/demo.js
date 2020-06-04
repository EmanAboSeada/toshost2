/* Theme Name: Bootgen - Multi-uses Template
   Author: Uniquecrew
   Version: 1.0.0
   Created: March 2018
   File Description: Demo js file of the template
*/
(function ($) {

    'use strict';
    // BACK TO TOP
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
        //mouse down
        $('.mouse-down').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
})(jQuery) 