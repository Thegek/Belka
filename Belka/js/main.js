
$(function(){

  $('.burger').on('click', function() {
   $('.main-nav').slideToggle(350, function(){
    if( $(this).css('display') === "none"){
      $(this).removeAttr('style');
    }
  });

 });

  $('#trails__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1280,
      settings: "unslick"
    }
    ]
    
  });


  // Слайдер привелегии

  $('#privilage-gallery__slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    }
    ]

  });
  $('.privilage-gallery__slider-list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });

  // Слайдер отзывы

  $('#reviews-list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    }
    ]
    
  });
  $('.reviews-list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });

});





