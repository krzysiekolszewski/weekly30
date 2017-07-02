require('../sass/main.scss');

$(document).ready(function() {

    //scroll down animation
    $('ul a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });

    //mobile nav
    $(".fa-bars").on('click', function() {
        $('.overlay').css('display', 'flex');
    })

    $(".fa-times").on('click', function() {
        $('.overlay').css('display', 'none');
    })

    $(".overlay a").on('click', function() {
        $('.overlay').css('display', 'none');
    })

});
