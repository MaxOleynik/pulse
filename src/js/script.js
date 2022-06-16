$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left_arrow-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 1120,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
            }
        ]
    });
  });