$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 3,
  nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            dots:true
        },
        485: {
            items: 1,
            dots:true
        },
        728: {
            items: 2,
            dots:true
        }
  }
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(item => {
    item.addEventListener('click', function () {
        item.getElementsByClassName.color = 'deeppink';
        
    })
})
