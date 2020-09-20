alert('Hello');
(function($){
  //Smooth Scrolling
  $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  var navbarScrolled = function(){
    if($("#navbar").offset().top > 100){
      $("navbar").addClass("navbar-scrolled");
    }
    else{
      $("navbar").removeClass("navbar-scrolled");
    }
  }

  navbarScrolled();
  //When page is scrolled.
  $(window).scroll(navbarScrolled);

  //For actice scrolling
  $(body).scrollspy({
    target:'#navbar',
    offset: 75
  })

  //Scroll to Top
  $(document).scroll(function(){
    var scrollDis = $(this).scrollTop();
    if(scrollDis > 100){
      $('.scroll-to-top').fadeIn();
    }
    else{
      $('.scroll-to-top').fadeOut();
    }
  })

})(jQuery);