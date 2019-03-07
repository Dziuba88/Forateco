//@prepros-append lib/magnific.popup.js
//@prepros-append lib/owl.carousel.js
//@prepros-append lib/bootstrap.dropdown.js

$.get('img/sprite.svg', function(data) {
  var div = document.createElement('div');
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

$(document).on('scroll', function() {
  $(document).scrollTop() >= 1 ? $('.navbar').addClass('sticky') : $('.navbar').removeClass('sticky');
});

$(document).ready(function() {
  $(document).scrollTop() >= 100 ? $('.navbar').addClass('sticky') : $('.navbar').removeClass('sticky');

  $('.clients').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    responsiveRefreshRate: 0,
    navText: ['<svg class="icon"><use xlink: href="#caret"></use></svg >', '<svg class="icon"><use xlink: href="#caret"></use></svg >'],
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      },
      1201: {
        items: 5
      }
    }
  });
  $('.services__descrition--gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Forateco Portfolio</small>';
      }
    }
  });
});
