$(function () {
  $(".top__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: `<button class="slider-arrow slider-arrow--prev top__slider-arrow top__slider-arrow--prev">
          <img class="slider-arrow__img top__slider-arrow__img" src="images/icons/prevArrow.svg" alt="prevArrow">
        </button>`,
    nextArrow: ` <button class="slider-arrow slider-arrow--next top__slider-arrow top__slider-arrow--next">
          <img class="slider-arrow__img top__slider-arrow__img" src="images/icons/nextArrow.svg" alt="nextArrow">
        </button>`,
  });

  $(".popular__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,

    prevArrow: `<button class="slider-arrow slider-arrow--prev popular__slider-arrow popular__slider-arrow--prev">
          <img class="slider-arrow__img popular__slider-arrow__img" src="images/icons/prevArrow.svg" alt="prevArrow">
        </button>`,
    nextArrow: ` <button class="slider-arrow slider-arrow--next popular__slider-arrow popular__slider-arrow--next">
          <img class="slider-arrow__img popular__slider-arrow__img" src="images/icons/nextArrow.svg" alt="nextArrow">
        </button>`,
  });

  $(".shops__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,

    prevArrow: `<button class="slider-arrow slider-arrow--prev popular__slider-arrow popular__slider-arrow--prev">
          <img class="slider-arrow__img popular__slider-arrow__img" src="images/icons/prevArrow.svg" alt="prevArrow">
        </button>`,
    nextArrow: ` <button class="slider-arrow slider-arrow--next popular__slider-arrow popular__slider-arrow--next">
          <img class="slider-arrow__img popular__slider-arrow__img" src="images/icons/nextArrow.svg" alt="nextArrow">
        </button>`,
  });
});
