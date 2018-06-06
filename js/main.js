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

    $('.brands__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.brands__slider-nav'
    });
    $('.brands__slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        asNavFor: '.brands__slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    // $('.brands__slider-nav .slick-slide').removeClass('slick-active');
    //
    // $('.brands__slider-nav .slick-slide').eq(0).addClass('slick-active');
    //
    // $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     var mySlideNumber = nextSlide;
    //     $('.brands__slider-nav .slick-slide').removeClass('slick-active');
    //     $('.brands__slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
    // });

    //accordion

    $('.investors-accordion__head').click(function () {
        $('.investors-accordion__head').not(this).removeClass('investors-accordion__head-active').next().slideUp(300);
        $(this).addClass('investors-accordion__head-active').next().slideDown(300);
    });


});