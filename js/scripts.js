//Navigation
function primaryNav () {
  'use strict';  
  
  //toggle menu 
  $('.rpb-navigation__toggle').on('click', function (e) {

    $('html, body').css({overflow: 'hidden', height: '100%'});

  $('.rpb-navigation').toggleClass('active');
  var primaryNav = $('.rpb-navigation__toggle');

  if (primaryNav.attr("aria-expanded") === "false") {
    primaryNav.attr("aria-expanded", "true");
  } else {
    primaryNav.attr("aria-expanded", "false");
    $('html, body').css({overflow: 'auto', height: 'auto'});
  }

  // toggle menu/close
  if ($(this).text() == "Close")
  $(this).text("Menu");
  else
  $(this).text("Close");

  }); 


  

  //toggle button
  $('.rpb-navigation-link').on('click', function (e) {
  
    $('.rpb-navigation').removeClass('active');
    $('html, body').css({overflow: 'auto', height: 'auto'});


  //Set ARIA values
  var menuButton = $('.rpb-navigation__toggle');
  if (menuButton.attr("aria-expanded") === "false") {
    menuButton.attr("aria-expanded", "true");
  } else {
    menuButton.attr("aria-expanded", "false");
  }
  
  // toggle menu/close
  $(".rpb-navigation__toggle").text('Menu');
}); 


// Accessible Desktop navigation
$('.rpb-navigation').find('.rpb-navigation__level-one > rpb-navigation__list-item').on('focusin', function () {
$('.rpb-navigation__level-one > .rpb-navigation__list-item').removeClass('js-focus');
});
$('.rpb-navigation-sr-expand__btn').on('click', function (e) {
var isAlreadyOpen = $(this).closest('.rpb-navigation__level-one > li.js-focus').length;
$('.rpb-navigation__level-one > li').removeClass('js-focus');

if (!isAlreadyOpen) {
  $(this).closest('.rpb-navigation__level-one > .rpb-navigation__list-item').addClass('js-focus');
}
});
$('.rpb-navigation').on('mouseover', function () {
$(this).find('.js-focus').removeClass('js-focus');
});
$('body').on('keyup', function (e) {
if (e.keyCode === 27) {
  $('.js-focus').removeClass('js-focus');
}
}); 

}




//Sticky header
function stickyheader () {

 
  var $window       = $(window);
  var lastScrollTop = 0;
  var $header       = $('.rpb-header');
  var headerHeight  = $header.outerHeight();

  $window.scroll(function() {

      var windowTop  = $window.scrollTop();

      if ( windowTop >= headerHeight ) {
        $header.addClass( 'sticky' );
      } else {
        $header.removeClass( 'sticky' );
        $header.removeClass( 'show' );
      }
    
      if ( $header.hasClass( 'sticky' ) ) {
        if ( windowTop < lastScrollTop ) {
          $header.addClass( 'show' );
        } else {
          $header.removeClass( 'show' );
        }
      }

    
      lastScrollTop = windowTop;
    
   
  } );

}





//Back to Top
function backToTop() {
  "use strict";


  //trigger point
  var triggerPoint = 50,
      scrTop = 0,
      featureDetected = false;

  function detectTrigger() {

      scrTop = $(window).scrollTop();
      featureDetected = false;
      
      //Edit height value here
      if (scrTop >= 1080) {
          $(".back-to-top").addClass("active");
      } else {
          $(".back-to-top").removeClass("active");
      }

  }

  function onRepaint() {
      if (typeof window.requestAnimationFrame === "undefined") {
          detectTrigger();
          return;
      }

      if (!featureDetected) {
          window.requestAnimationFrame(detectTrigger);
      }
      featureDetected = true;
  }

  var title = document.getElementById('skiplinks');
  $(".back-to-top").click(function () {
    title.focus();
    $('html, body').animate({scrollTop: 0
      }, 50).parent();
    return false;
  });

  detectTrigger(); // run on page load for refresh when already scrolled

  $(window).on("scroll", function () {
      onRepaint();
  });



} 




//Timeline
function timeline() {

	var container = $('.rpb-timeline');

	var timelineContents = new Swiper('.rpb-timeline-contents', {
		navigation: {
			nextEl: '.timeline-button-next',
			prevEl: '.timeline-button-prev',
		},
		grabCursor: true,
	    spaceBetween: 10,
	    autoHeight: true,
	});
	var timelineDates = new Swiper('.rpb-timeline-dates', {
	    spaceBetween: 70,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    touchRatio: 0.2,
	    slideToClickedSlide: true
	});
	timelineContents.controller.control = timelineDates;
	timelineDates.controller.control = timelineContents;

}





//Lazyload images
function lazyload() {
var offsets = [];
$(".lazy-load").each(function() {
  var offset = $(this).offset().top;
  offsets.push(offset);
});

function lazyLoad() {
  var windowHeight = $(window).height();
  var wscroll = $(window).scrollTop();
  for (i = 0; i < offsets.length; i++) {
	if (!$(".lazy-load").eq(i).hasClass("loaded") && offsets[i] <= wscroll + windowHeight) {
	  $(".lazy-load").eq(i).addClass("loaded").fadeOut(0).fadeIn(250);
	}
  }
}

lazyLoad();

$(window).on("scroll", function() {
  lazyLoad();
});
}





//Dropdown
function dropdown() {
  var $btn = document.getElementById('show');
  var $nav = document.getElementById('nav');
  
  $btn.addEventListener('click', function() {
      $nav.classList.toggle('active');
  });
  
}





//TimeStamp
function timeStamp() {
  $('#year').html(new Date().getFullYear());
}




//Document - load
$(document).ready(function () {
  primaryNav();
  stickyheader();
  backToTop();
  timeline();
  lazyload();
  // dropdown();
  timeStamp();
});
