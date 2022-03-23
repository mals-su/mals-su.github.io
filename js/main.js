jQuery(document).ready(function($){
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[rel]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[class*="more"]')
    .not('[class*="hide"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 39
          }, 1000);
        }
      }
  });

    var $header = $('.header');
    function fixedHeader($header){
        if ($(window).scrollTop() > 0) {
            $header.addClass('header_scrolled');
        } else {
            $header.removeClass('header_scrolled');
        }
    }
    fixedHeader($header);
    $(window).scroll(function(event) {
        fixedHeader($header);
    });

    // Sliders
    $('.js-certificates-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            }
        }
        ]
    });

    $('.js-security-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical:true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                vertical:false
            }
        }
        ]
    });

    $(window).on('orientationchange resize', function() {
        $('.js-certificates-slider').slick('resize');
        $('.js-security-slider').slick('resize');
    });
    

    $('.js-certificates-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    showCloseBtn: false,
    closeBtnInside: false,
    fixedContentPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });


    $('body').magnificPopup({
        delegate: 'a[rel="monitor"]',
        type: 'image',
        fixedContentPos: false,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'my-mfp-zoom-in',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
           markup: '<div class="mfp-figure">' +
                     '<div class="mfp-close"></div>' +
                     '<figure>'+
                     '<figcaption>'+
                         '<h3 class="mfp-title"></h3>' +
                     '</figcaption>'+
                     '<div class="mfp-img"></div>' +  
                     '</figure>' +
                   '</div>',
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        callbacks: {
            buildControls: function() {
              // re-appends controls inside the main container
              this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
          }
    });
});

// Nav slideout
var slideout = new Slideout({
    'panel': document.getElementById('js-main'),
    'menu': document.getElementById('js-mobile-nav'),
    'side': 'right',
    'padding': 277,
    'tolerance': 70,
    'touch': false,
});
document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
});

var mobileNavLinks = document.querySelectorAll('.mobile-nav a');

[].forEach.call(mobileNavLinks, function(link) {
  link.addEventListener('click', function() {
    slideout.close();
  });
});

var header = document.querySelector('.header');

slideout.on('translate', function(translated) {
  header.style.left = translated + 'px';
});

slideout.on('beforeopen', function () {
  header.style.left = '-277px';
});

slideout.on('beforeclose', function () {
  header.style.left = '0';
});