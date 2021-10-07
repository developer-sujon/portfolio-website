$(function () {

  "use strict";

  /***************************

  preloader

  ***************************/

  $(document).ready(function () {
    $('html').addClass('is-animating');
    $(".trm-scroll-container").animate({
      opacity: 0,
    });
    setTimeout(function () {
      $('html').removeClass('is-animating');
      $(".trm-scroll-container").animate({
        opacity: 1,
      }, 600);
    }, 1000);
  });

  /***************************

  swup

  ***************************/
  const options = {
    containers: ['#trm-dynamic-content'],
    animateHistoryBrowsing: true,
    linkSelector: '.trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])',
    animationSelector: '[class="trm-swup-animation"]'
  };
  const swup = new Swup(options);
  /***************************

  menu

  ***************************/
  $('.trm-menu-btn').on('click', function () {
    $('.trm-menu-btn , .trm-right-side').toggleClass('trm-active');
  })
  $('.trm-menu ul li a').on('click', function () {
    $('.trm-menu-btn , .trm-right-side').removeClass('trm-active');
  })
  /***************************

  mode switch

  ***************************/
  $('.trm-mode-switcher').clone().appendTo('.trm-mode-switcher-place');
  $('#trm-swich').change(function () {
    if (this.checked) {
      $('.trm-hidden-switcher input').prop("checked", true);
      $('.trm-mode-swich-animation-frame').addClass('trm-active');
      $("#trm-scroll-container").animate({
        opacity: 0,
      }, 600, function () {
        setTimeout(function () {
          $('.trm-mode-swich-animation').addClass('trm-active');
          $("#trm-switch-style").attr("href", "css/style-dark.css");
        }, 200);
        setTimeout(function () {
          $('.trm-mode-swich-animation-frame').removeClass('trm-active');
          $("#trm-scroll-container").animate({
            opacity: 1,
          }, 600);
        }, 1000);
      });
    } else {
      $('.trm-hidden-switcher input').prop("checked", false);
      $('.trm-mode-swich-animation-frame').addClass('trm-active');
      $("#trm-scroll-container").animate({
        opacity: 0,
      }, 600, function () {
        setTimeout(function () {
          $('.trm-mode-swich-animation').removeClass('trm-active');
          $("#trm-switch-style").attr("href", "css/style-light.css");
        }, 200);
        setTimeout(function () {
          $('.trm-mode-swich-animation-frame').removeClass('trm-active');
          $("#trm-scroll-container").animate({
            opacity: 1,
          }, 600);
        }, 1000);
      });
    }
  });
  /***************************

  counters

  ***************************/
  $('.trm-counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'linear',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  
  /*----------------------------------------------------------
  ------------------------------------------------------------

  REINIT

  ------------------------------------------------------------
  ----------------------------------------------------------*/
  document.addEventListener("swup:contentReplaced", function () {

    /***************************

    preloader

    ***************************/
    $(".trm-scroll-container").animate({
      opacity: 1,
    }, 600);
    /***************************

    menu

    ***************************/
    $('.trm-menu-btn').on('click', function () {
      $('.trm-menu-btn , .trm-right-side').toggleClass('trm-active');
    })
    $('.trm-menu ul li a').on('click', function () {
      $('.trm-menu-btn , .trm-right-side').removeClass('trm-active');
    })
    /***************************

    mode switch

    ***************************/
    $('.trm-mode-switcher').clone().appendTo('.trm-mode-switcher-place');
    $('#trm-swich').change(function () {
      if (this.checked) {
        $('.trm-hidden-switcher input').prop("checked", true);
        $('.trm-mode-swich-animation-frame').addClass('trm-active');
        $("#trm-scroll-container").animate({
          opacity: 0,
        }, 600, function () {
          setTimeout(function () {
            $('.trm-mode-swich-animation').addClass('trm-active');
            $("#trm-switch-style").attr("href", "css/style-dark.css");
          }, 200);
          setTimeout(function () {
            $('.trm-mode-swich-animation-frame').removeClass('trm-active');
            $("#trm-scroll-container").animate({
              opacity: 1,
            }, 600);
          }, 1000);
        });
      } else {
        $('.trm-hidden-switcher input').prop("checked", false);
        $('.trm-mode-swich-animation-frame').addClass('trm-active');
        $("#trm-scroll-container").animate({
          opacity: 0,
        }, 600, function () {
          setTimeout(function () {
            $('.trm-mode-swich-animation').removeClass('trm-active');
            $("#trm-switch-style").attr("href", "css/style-light.css");
          }, 200);
          setTimeout(function () {
            $('.trm-mode-swich-animation-frame').removeClass('trm-active');
            $("#trm-scroll-container").animate({
              opacity: 1,
            }, 600);
          }, 1000);
        });
      }
    });
   

  });

});
