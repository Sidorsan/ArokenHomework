$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter_btn').on('click', function () {
    $('.directions__filter_btn').removeClass('directions__filter_btn--active')
    $(this).addClass('directions__filter_btn--active')
$(document.querySelectorAll('.directions__image_box')).addClass('directions__image_box--active')
      })
   $('.directions__filter_btn--all').on('click', function () {
    $(document.querySelectorAll('.directions__image_box')).removeClass('directions__image_box--active')
      })
})

