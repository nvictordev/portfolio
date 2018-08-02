

$(function() {
  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  $('.arr-button-scroll, .about-me').click(function() {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top - ($('nav').height()))
    }, 800);
  });

  $('#contact-form').submit(function(e) {
    $('.success-modal').addClass('modal-display');
    e.preventDefault();
  })
  $('.close').click(function() {
    $('.success-modal').removeClass('modal-display');
  })

  let navHeight = $('nav').position().top;
  $(window).on('scroll', function() {
    let recentPos = 0;
    let winPos = $(window).scrollTop();
    if (winPos >= navHeight && winPos > recentPos) {
      $('nav').addClass('fixed');
    } 
    if (winPos < navHeight) {
      $('nav').removeClass('fixed');
    }
  })

})
