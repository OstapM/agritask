$(document).ready(function(){

  $('.ui.accordion')
  .accordion()
  ;

  $('.mobile-btn').click(function() {
    $('.mobile-menu.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    ;
  });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


});

$( window ).resize(function() {



});
$(window).scroll(function(){

});