$(document).ready(function () {
  function initBgCover(context) {
    if (!context) context = $('body');
    context.find('.bg-cover').each(function () {
      var holder = $(this);
      var image = holder.find('> img').hide();
      var imageSrc = image.prop('src');
      holder.css({
        backgroundImage: 'url(' + imageSrc + ')',
      });
    });
  }

  initBgCover();

  /* smooth scroll*/
  $('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //sticky-header
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $('.site-header').addClass('sticky-header')
    } else {
      $('.site-header').removeClass('sticky-header');
    }
  });

  // client-slider
  $('.slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});

//site-content padding
var headerHeight = $('.site-header').innerHeight();
var siteContent = $('.site-content');

siteContent.css("padding-top", headerHeight + 'px');

$(window).resize(function () {
  //site-content padding
  var headerHeight = $('.site-header').innerHeight();
  var siteContent = $('.site-content');

  siteContent.css("padding-top", headerHeight + 'px');
});