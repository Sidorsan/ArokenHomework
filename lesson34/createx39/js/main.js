$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter_btn').on('click', function () {
    $('.directions__filter_btn').removeClass('directions__filter_btn--active')
    $(this).addClass('directions__filter_btn--active')
  })
  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infiniti: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
  });
   $('.team__slider-next').on('click', function (e) {
     e.preventDefault()
     $('.team__slider').slick('slickNext');
  })
 $('.team__slider-prev').on('click', function (e) {
     e.preventDefault()
     $('.team__slider').slick('slickPrev');
  })
  
  
  
})