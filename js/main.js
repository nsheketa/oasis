$(document).ready(function() {

    //mob menu
    $("#header-mob__btn").click(function(){
        $(this).toggleClass("active");
        $(".header__nav").toggleClass('header__nav-open');
        $("body").toggleClass('no-scroll');
    });

    $('.header__nav-link').click(function () {
        $("#header-mob__btn").removeClass('active');
        $(".header__nav").removeClass('header__nav-open');
        $("body").removeClass('no-scroll');
    });

    //slick slider
    $('.slick__slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });


});