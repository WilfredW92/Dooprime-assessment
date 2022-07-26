

$(document).ready(function () {
    //Nav
    $(".navbar-toggler").click(function(){
        $("#navbar").toggleClass("navbar-white");
    })
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 35) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    })
    
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        navText: ['<', '>'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: false,
    })

    $('.default-slider-1').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
    
    $('.default-slider-2').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#customNav',
        dotsContainer: '#customDots',
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
    
    $('.new-slider-1').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav1',
        dotsContainer: '#newsDots1',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
     $('.new-slider-2').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav2',
        dotsContainer: '#newsDots2',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
    $('.new-slider-3').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav3',
        dotsContainer: '#newsDots3',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
    $('.new-slider-4').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav4',
        dotsContainer: '#newsDots4',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
    $('.new-slider-5').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav5',
        dotsContainer: '#newsDots5',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
    $('.new-slider-6').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navContainer: '#newsNav6',
        dotsContainer: '#newsDots6',
        smartSpeed: 900,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    })
    
    
    
});


