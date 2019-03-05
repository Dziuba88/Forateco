$(document).on('scroll', function() {
  $(document).scrollTop() >= 100 ? $('.navbar').addClass('sticky') : $('.navbar').removeClass('sticky');
});
