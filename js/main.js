$(document).ready(function () {

    //mob menu
    $("#header-mob__btn").click(function () {
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
    $('.homepage__slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });
    $('.corporate__slider').slick({
        arrows: true,
        dots: true,
        // fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true
    });

    //accordion

    $('.investors-accordion__head').click(function () {
        $('.investors-accordion__head').not(this).removeClass('investors-accordion__head-active').next().slideUp(300);
        $(this).addClass('investors-accordion__head-active').next().slideDown(300);
    });


});