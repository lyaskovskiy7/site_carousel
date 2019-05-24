$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
    });
    owl = $('.owl-carousel').owlCarousel();
    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    });


});