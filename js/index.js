$(document).ready(function(){
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
});


$(window).on('scroll', function() {
  let recentPos = 0;
  let winPos = $(window).scrollTop();
  if (winPos >= 873 && winPos > recentPos) {
    $('nav').addClass('fixed');
  } 
  if (winPos < 873) {
    $('nav').removeClass('fixed');
  }
})


