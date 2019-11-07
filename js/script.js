//Robbie Bartlett 2020


//Smooth scroll
function smoothScroll() {
    "use strict";

    $('.anchor-link').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
          var scrollTo = target.offset().top-57;
          $('body, html').animate({scrollTop: scrollTo+'px'}, 400);
        }
      });
}

//Fixed header
function fixedheader() {
    "use strict"

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('header').addClass("sticky");
            $(".mobile-button").addClass("changecolor");
        }
        else{
            $('header').removeClass("sticky");
            $(".mobile-button").removeClass("changecolor");
        }
    });
 }



//Mobile menu
function mobilemenu() {
    $(".mobile-button").click(function() {
        $(".mobile-menu").toggleClass("open");
        $(".mobile-links").toggleClass("visible");
      }),
      
      $(".anchor-link").click(function(){
         $(".mobile-links").removeClass("visible");
         $(".mobile-menu").removeClass("open");
         $(".mobile-button").removeClass("changecolor");
         $(".hamburger").removeClass("is-active");
      })
      
      var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
            var hamburgers = document.querySelectorAll(".hamburger");
            if (hamburgers.length > 0) {
              forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener("click", function() {
                  this.classList.toggle("is-active");
                }, false);
              });
            }
} 




//Lazy load
function lazyload(){

  function BackgroundNode({node, loadedClassName}) {
    let src = node.getAttribute('data-background-image-url');
    let show = (onComplete) => {
      requestAnimationFrame(() => {
        node.style.backgroundImage = `url(${src})`
        node.classList.add(loadedClassName);
        onComplete();
      })
    }
  
    return {
      node,
  
      // onComplete is called after the image is done loading.
      load: (onComplete) => {
        let img = new Image();
        img.onload = show(onComplete);
        img.src = src;
      }
    }
  }
  
  let defaultOptions = {
    selector: '[data-background-image-url]',
    loadedClassName: 'loaded'
  }
  
  function BackgroundLazyLoader({selector, loadedClassName} = defaultOptions) {
    let nodes = [].slice.apply(document.querySelectorAll(selector))
      .map(node => new BackgroundNode({node, loadedClassName}));
  
    let callback = (entries, observer) => {
      entries.forEach(({target, isIntersecting}) => {
        if (!isIntersecting) {
          return;
        }
  
        let obj = nodes.find(it => it.node.isSameNode(target));
        
        if (obj) {
          obj.load(() => {
            // Unobserve the node:
            observer.unobserve(target);
            // Remove this node from our list:
            nodes = nodes.filter(n => !n.node.isSameNode(target));
            
            // If there are no remaining unloaded nodes,
            // disconnect the observer since we don't need it anymore.
            if (!nodes.length) {
              observer.disconnect();
            }
          });
        }
      })
    };
    
    let observer = new IntersectionObserver(callback);
    nodes.forEach(node => observer.observe(node.node));
  };
  
  BackgroundLazyLoader();

}



//Shuffle Portfolio
function shuffle() {
	var div = jQuery(".portfolio-item").get().sort(function(){ 
        return Math.round(Math.random())-0.5; //random slice
      }).slice();
jQuery(div).appendTo(div[0].parentNode).show();
}




//Copyright
function copyright() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
}





$(document).ready(function() {
        "use strict";
        fixedheader(),
        mobilemenu(),
        smoothScroll(),
        lazyload(),
        shuffle(),
        copyright() 
})


