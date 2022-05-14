$(document).ready(function () {

    $('.menu-header__icon').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-header__menu').toggleClass('active');
        if ($(this).hasClass('active')) {
            $('body').data('scroll', $(window).scrollTop());
        }
        $('body').toggleClass('lock');
        if (!$(this).hasClass('active')) {
            $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    });

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();


    $(window).resize(function (event) {
        mainblock();
    });
    function mainblock() {
        var h = $(window).outerHeight();
        $('.mainblock').css('min-height', h);
    }
    mainblock();

    if ($('.gallery').length > 0) {
        baguetteBox.run('.gallery', {

        });
    }




    $('.filter__item').click(function (event) {
        var i = $(this).data('filter');
        if (i == 1) {
            $('.portfolio__culumn').show();
        } else {
            $('.portfolio__culumn').hide();
            $('.portfolio__culumn.f_' + i).show();
        }
        $('.filter__item').removeClass('active');
        $(this).addClass('active');

        return false;
    });



});