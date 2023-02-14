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
        responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true,
          dots: true,
        }
      },

    ]
  });
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext');
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev');
  })
  $('.testimonials__slider').slick({
    arrows: false,
    appendDots: $('.testimonials__dots'),
    dots: true
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext');
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev');
  })

  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--activ')
  //   $(this).children('.program__acc-text').slideToggle()

  // } )
  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--activ')) {
      $(this).removeClass('program__acc-link--activ')
      $(this).children('.program__acc-text').slideUp()

    } else {
      $('.program__acc-link').removeClass('program__acc-link--activ')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--activ')
      $(this).children('.program__acc-text').slideDown()
    }

  })

  $(".header__nav-list a, .header__top-button, .footer__go-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 200;
    $('body,html').animate({ scrollTop: top }, 800);


  });


  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault();
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })

  // $(window).on('scroll', function () {

  // })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);

$('.footer__top-title--slide').on('click', function () {
  $(this).next().slideToggle()
 $(this).toggleClass('footer__top-title--slide_open')
})
})