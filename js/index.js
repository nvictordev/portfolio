
$(function() {
  // page navigation
  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
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

  $('.contact').click(function() {
    $('html, body').animate({
      scrollTop: ($('#contact').offset().top - ($('nav').height()))
    }, 800);
  });

  // Modal screen handle
  $('#contact-form').submit(function(e) {
    $('.success-modal').addClass('modal-display');
    e.preventDefault();
  })
  $('.close').click(function() {
    $('.success-modal').removeClass('modal-display');
  })
  
  // Nav bar to stay on top of screen
  let navHeight = $('nav').position().top;
  $(window).on('scroll', function() {
    let recentPos = 0;
    let winPos = $(window).scrollTop();
    if (winPos >= navHeight && winPos > recentPos) {
      $('nav').addClass('fixed');
    } 
    if (winPos < navHeight && winPos < recentPos) {
      $('nav').removeClass('fixed');
    }
    recentPos = winPos;
  })

  //Hamburger bars
  $('#hamburger-icon').click(function() {
    if ($('#mobile-menu').hasClass('opened')) {
      $('#mobile-menu').removeClass('opened');
      $('#mobile-menu').addClass('closed');
      $('#hamburger-icon').removeClass('open');
    } else {
      $('#hamburger-icon').addClass('open');
      $('#mobile-menu').removeClass('closed');
      $('#mobile-menu').addClass('opened');
    }
  });

  // Hide mobile menu modal
  $('#mobile-menu > a').click(function () {
    $('#mobile-menu').removeClass('opened');
    $('#mobile-menu').addClass('closed');
    $('#hamburger-icon').removeClass('open');
  })

  // On scroll animations
  $(window).on('scroll', onScroll);
  let windowPadding = $(window).height();
  function onScroll() {
    $('.onScroll:not(.animated)').each(function() {
      if ($(window).scrollTop() + windowPadding > $(this).offset().top) {
        if ($(this).data('timeout')) {
          let $this = $(this);
          window.setTimeout(function() {
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout')));
        } else {
          $(this).addClass('animated ' + $(this).data('animation'));
        }
      }
    })
  }

})
