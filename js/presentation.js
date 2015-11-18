/**
 * Created by GuoJunjun on 18/11/15. <junjunguo.com>
 *
 */


(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.slider').slider({auto: false, autoplay: false, interval: 6000000});
        //
        //// Pause slider
        //$('.slider').slider('pause');
        //// Start slider
        //$('.slider').slider('start');
        //// Next slide
        //$('.slider').slider('next');
        //// Previous slide
        //$('.slider').slider('prev');


    }); // end of document ready
})(jQuery); // end of jQuery name spac

//$(document).keydown(function (eventObject) {
//    if (eventObject.which == 37) {//left arrow
//        $('.slider .prev').click();//emulates click on prev button
//    } else if (eventObject.which == 39) {//right arrow
//        $('.slider .next').click();//emulates click on next button
//    }
//});