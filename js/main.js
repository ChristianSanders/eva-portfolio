$(document).ready(function(){

   $('.hamburger').click(function(e){
     $('.nav-right').toggleClass('nav-show');
     e.stopPropagation();
   });
   
   $('body').click(function(){
     $('.nav-right').removeClass('nav-show');
   });

   
   var hero = $("#hero");
   var hero_height = hero.height();
   hero.height(hero_height);

   if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $(window).scroll(function() {
      if ($(this).scrollTop() > 40) {
        console.log("scrolling");
        $("nav").addClass("nav-shrink");
      }else{
        $("nav").removeClass("nav-shrink");
      }
    });
   }else{
     $("nav").addClass("nav-shrink");
   }
   

  $('nav li').on('click',function (e) {
	    e.preventDefault();
      e.stopPropagation();
      var target = "#" + $(this).data("href");
	    // var target = this.hash;
	    var $target = $(target);
      console.log(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 50
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $('.gallery-img').magnificPopup({
    type:'image',
    closeOnContentClick: true,
    overflowY: 'auto',
    tLoading: '',
    removalDelay: 500, //delay removal by X to allow out-animation
    mainClass: 'mfp-zoom-in', // this class is for CSS animation below
    callbacks:{
      open: function() {
              $('nav').css('overflow-y', 'auto');
      },
      close: function() {
              $('nav').css('overflow-y', 'hidden');
              this.wrap.removeClass('mfp-image-loaded');
      },
      imageLoadComplete: function() {
        var self = this;
        setTimeout(function() {
          self.wrap.addClass('mfp-image-loaded');
        }, 16);
      }
    }
  });

  // form 
  $('#contact form input').focusout(function(){
    var text = $(this).val();
    (text === "") ? $(this).removeClass('has-value') : $(this).addClass('has-value');
  })

  $('#contact form textarea').focusout(function(){
    var text = $(this).val();
    (text === "") ? $(this).removeClass('has-value') : $(this).addClass('has-value');
  })
});