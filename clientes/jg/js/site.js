
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
$('a.page-scroll').click(function() {
  $('#overlay').toggleClass('open');
});

$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top -60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
$('#btn-fotos-bolos').magnificPopup({
  items: [
    {
      src: 'img/fotos/bolo-1.jpeg'
    },
    {
      src: 'img/fotos/bolo-2.jpeg'
    },
    {
      src: 'img/fotos/bolo-3.jpeg'
    },
    {
      src: 'img/fotos/bolo-4.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
$('#btn-fotos-doces').magnificPopup({
  items: [
    {
      src: 'img/fotos/doces-1.jpeg'
    },
    {
      src: 'img/fotos/doces-2.jpeg'
    },
    {
      src: 'img/fotos/doces-3.jpeg'
    },
    {
      src: 'img/fotos/doces-4.jpeg'
    },
    {
      src: 'img/fotos/doces-5.jpeg'
    },
    {
      src: 'img/fotos/doces-6.jpeg'
    },
    {
      src: 'img/fotos/doces-7.jpeg'
    },
    {
      src: 'img/fotos/doces-8.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
$('#btn-fotos-salgados').magnificPopup({
  items: [
    {
      src: 'img/fotos/salgados-1.jpeg'
    },
    {
      src: 'img/fotos/salgados-2.jpeg'
    },
    {
      src: 'img/fotos/salgados-3.jpeg'
    },
    {
      src: 'img/fotos/salgados-4.jpeg'
    },
    {
      src: 'img/fotos/salgados-5.jpeg'
    },
    {
      src: 'img/fotos/salgados-6.jpeg'
    },
    {
      src: 'img/fotos/salgados-7.jpeg'
    },
    {
      src: 'img/fotos/salgados-8.jpeg'
    },
    {
      src: 'img/fotos/salgados-9.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
$('#btn-fotos-loja').magnificPopup({
  items: [
    {
      src: 'img/fotos/loja-1.jpeg'
    },
    {
      src: 'img/fotos/loja-2.jpeg'
    },
    {
      src: 'img/fotos/loja-3.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
$('#btn-fotos-cestas').magnificPopup({
  items: [
    {
      src: 'img/fotos/cestas-1.jpeg'
    },
    {
      src: 'img/fotos/cestas-2.jpeg'
    },
    {
      src: 'img/fotos/cestas-3.jpeg'
    },
    {
      src: 'img/fotos/cestas-4.jpeg'
    },
    {
      src: 'img/fotos/cestas-5.jpeg'
    },
    {
      src: 'img/fotos/cestas-6.jpeg'
    },
    {
      src: 'img/fotos/cestas-7.jpeg'
    },
    {
      src: 'img/fotos/cestas-8.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
$('#btn-fotos-bebidas').magnificPopup({
  items: [
    {
      src: 'img/fotos/bebidas-1.jpeg'
    },
    {
      src: 'img/fotos/bebidas-2.jpeg'
    },
    {
      src: 'img/fotos/bebidas-3.jpeg'
    },
    {
      src: 'img/fotos/bebidas-4.jpeg'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
});
