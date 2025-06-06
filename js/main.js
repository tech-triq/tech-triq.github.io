(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a, .btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });

    // Clients carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 1550,
        smartSpeed: 1500,
        items: 8,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0: { items:3 },
            576: { items: 4 },
            768: { items: 6 },
            992: { items: 8 }
        }
    });

    $(document).ready(function () {
        $(".count-up").hover(function (e) {
            var $this = $(this),
                description = "Get a Quote";
            $('.count-up').html(description);
        }, function (e) {
            $('.count-up').html('Projects Done: 50 +');
        });
    });
    
})(jQuery);

function loadIframe(src, name){
    var iframe = document.getElementById("projectFrame");
    var title = document.getElementById("exampleModalLongTitle");

    iframe.src = src;
    iframe.name = name;
    title.innerHTML = name;
}

function closeIframe(){
    var iframe = document.getElementById("projectFrame");
    var title = document.getElementById("exampleModalLongTitle");

    iframe.src = "";
    iframe.name = "";
    title.innerHTML = "";

}

document.addEventListener('DOMContentLoaded', function() {
    var countUpElements = document.querySelectorAll('.count-up');

    countUpElements.forEach(function(element) {
      var targetValue = parseInt(element.getAttribute('data-target'));
      var duration = 3500;
      var startTimestamp = null;

      function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        var progress = Math.min((timestamp - startTimestamp) / duration, 1);
        var currentValue = Math.floor(progress * targetValue);

        element.textContent = "Projects Done: " + currentValue + " +";

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = "Projects Done: " + targetValue + " +";
        }
      }

      window.requestAnimationFrame(step);
    });
});

document.addEventListener('click', function(event) {
    var navbarCollapse = document.getElementById('navbarCollapse');
    var navbarToggler = document.querySelector('.navbar-toggler');
    // Only proceed if navbar is open and click is outside navbar and toggler
    if (
        navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        navbarToggler.click();
    }
});

function closeNavbarOnClick() {
    var navbarCollapse = document.getElementById('navbarCollapse');
    var navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
    }
}