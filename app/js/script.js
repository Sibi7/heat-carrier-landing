$(document).ready(function () {

    // slider section clients
    $('.clients__slider-container').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    });
    // scroll link header menu
    $(document).on('click', '.header__nav a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });

//    mobile navigation
    var link =$('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    })

    $( ".menu-link" ).click(function() {
        $( ".header__nav" ).slideToggle( "fast", function() {
        });
    });

});