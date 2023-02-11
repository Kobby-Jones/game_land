$(".carousel1").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 3,
  nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: true
        },
        485: {
            items: 1,
            dots: false,
            nav: true
        },
        728: {
            items: 2,
            dots: false,
            nav: true,
        }
  }
});
$(".carousel2").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 3,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
      dots:true,
      nav: true,
    },
    485: {
      items: 1,
      dots:true,
      nav: true,
    },
    728: {
      items: 3,
      dots:true,
      nav: true,
    },
  },
});



