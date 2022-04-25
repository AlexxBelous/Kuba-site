$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="arrow__left general-arrow"><img src="/images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="arrow__right general-arrow"><img src="/images/arrow-right.svg" alt="arrow"></button>'

    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});
    
