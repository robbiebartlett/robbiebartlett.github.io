//Mobile menu
function mobilemenu() {
		
	$(".mobile-button").click(function() {
		$(".mobile-menu").toggleClass("open");
		$(".rb-navigation").toggleClass("visible");
	}),
	
	$(".rb-navigation-link").click(function(){
		 $(".rb-navigation").removeClass("visible");
		 $(".mobile-menu").removeClass("open");
		 $(".mobile-button").removeClass("is-active");
	})

	
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
				var hamburgers = document.querySelectorAll(".mobile-button");
				if (hamburgers.length > 0) {
					forEach(hamburgers, function(hamburger) {
						hamburger.addEventListener("click", function() {
							this.classList.toggle("is-active");
						}, false);
					});
				}

} 


//Defer Youtube load
function defer() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } 
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
  if (scrTop >= 100) {
	  $(".back-to-top").addClass("pop-up");
  } else {
	  $(".back-to-top").removeClass("pop-up");
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


$(".back-to-top").click(function () {
$('html, body').animate({scrollTop: 0
  }, 50).parent().focus();
return false;
});

detectTrigger(); // run on page load for refresh when already scrolled

$(window).on("scroll", function () {
  onRepaint();
});

} // backToTop()


//Shuffle Portfolio
function shuffle() {

	$.fn.shufflelistitems = function() {
		$.each(this.get(), function(index, el) {
			var $el = $(el);
			var $find = $el.children();
	 
			$find.sort(function() {
				return 0.5 - Math.random();
			});
	 
			$el.empty();
			$find.appendTo($el);
		});
	};
	
	$(".cards").shufflelistitems();
	
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


//History timeline
function timeline() {
	(function () {
	
		// VARIABLES
		const timeline = document.querySelector(".timeline ol"),
		elH = document.querySelectorAll(".timeline li > div"),
		arrows = document.querySelectorAll(".timeline .arrows .arrow"),
		arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
		arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
		firstItem = document.querySelector(".timeline li:first-child"),
		lastItem = document.querySelector(".timeline li:last-child"),
		xScrolling = 450,
		disabledClass = "disabled";
	
		// START
		window.addEventListener("load", init);
	
		function init() {
			setEqualHeights(elH);
			animateTl(xScrolling, arrows, timeline);
			setSwipeFn(timeline, arrowPrev, arrowNext);
			setKeyboardFn(arrowPrev, arrowNext);
		}
	
		// SET EQUAL HEIGHTS
		function setEqualHeights(el) {
			let counter = 0;
			for (let i = 0; i < el.length; i++) {
				const singleHeight = el[i].offsetHeight;
	
				if (counter < singleHeight) {
					counter = singleHeight;
				}
			}
	
			for (let i = 0; i < el.length; i++) {
				el[i].style.height = `${counter}px`;
			}
		}
	
		// CHECK IF AN ELEMENT IS IN VIEWPORT
		// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth));
	
		}
	
		// SET STATE OF PREV/NEXT ARROWS
		function setBtnState(el, flag = true) {
			if (flag) {
				el.classList.add(disabledClass);
			} else {
				if (el.classList.contains(disabledClass)) {
					el.classList.remove(disabledClass);
				}
				el.disabled = false;
			}
		}
	
		// ANIMATE TIMELINE
		function animateTl(scrolling, el, tl) {
			let counter = 0;
			for (let i = 0; i < el.length; i++) {
				el[i].addEventListener("click", function () {
					if (!arrowPrev.disabled) {
						arrowPrev.disabled = true;
					}
					if (!arrowNext.disabled) {
						arrowNext.disabled = true;
					}
					const sign = this.classList.contains("arrow__prev") ? "" : "-";
					if (counter === 0) {
						tl.style.transform = `translateX(-${scrolling}px)`;
					} else {
						const tlStyle = getComputedStyle(tl);
						// add more browser prefixes if needed here
						const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
						const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
						tl.style.transform = `translateX(${values}px)`;
					}
	
					setTimeout(() => {
						isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
						isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
					}, 1100);
	
					counter++;
				});
			}
		}
	
		// ADD SWIPE SUPPORT FOR TOUCH DEVICES
		function setSwipeFn(tl, prev, next) {
			const hammer = new Hammer(tl);
			hammer.on("swipeleft", () => next.click());
			hammer.on("swiperight", () => prev.click());
		}
	
		// ADD BASIC KEYBOARD FUNCTIONALITY
		function setKeyboardFn(prev, next) {
			document.addEventListener("keydown", e => {
				if (e.which === 37 || e.which === 39) {
					const timelineOfTop = timeline.offsetTop;
					const y = window.pageYOffset;
					if (timelineOfTop !== y) {
						window.scrollTo(0, timelineOfTop);
					}
					if (e.which === 37) {
						prev.click();
					} else if (e.which === 39) {
						next.click();
					}
				}
			});
		}
	
	})();
}


//Copyright
function copyright() {
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;
}


//Document - load
$(document).ready(function () {
   mobilemenu(),
        defer(),
    backToTop(),
	 timeline(),
  	  shuffle(),
	 lazyload(),
	copyright()
});
