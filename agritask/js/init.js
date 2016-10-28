$(document).ready(function() {

  $('.ui.accordion')
    .accordion();

  $('.mobile-btn').click(function() {
    $('.mobile-menu.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $('.see-below').click(function() {
    // $(this).addClass('active')
    // $(this).removeAttr("href");
    $("html, body").animate({
      scrollTop: $(".field-data-icons").offset().top
    }, 1000);
  });
  $('.see-product').click(function() {
    $(this).removeAttr("href");
    $("html, body").animate({
      scrollTop: $(".agritask-for-wrap").offset().top
    }, 1000);
  });

});

$(window).resize(function() {



});
$(window).scroll(function() {

  if ($(window).width() < 992) {} else {
    var scroll = $(window).scrollTop();
    var heroHeight = $('.main-menu').outerHeight() - 68;
    //>=, not <=
    if (scroll >= heroHeight) {
      $(".main-menu").addClass("main-menu-scroll");
      $(".pushable:not(body)").addClass("pushable-scroll");
    } else {
      function timeout() {
        $(".main-menu").removeClass("main-menu-scroll");
        $(".pushable:not(body)").removeClass("pushable-scroll");
      };
      setTimeout(timeout, 150);
    }
  }
});