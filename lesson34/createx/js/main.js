$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter_btn').on('click', function () {
    $('.directions__filter_btn').removeClass('directions__filter_btn--active')
    $(this).addClass('directions__filter_btn--active')
  })
})