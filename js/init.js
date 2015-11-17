(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name spac


$(document).ready(function () {
    $('.slider').slider({full_width: true});
});// e


var members = [
    {selector: '#staggered-member', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-member")'}

];
Materialize.scrollFire(members);

