$(function(){
    $(".top_silde img:not(:first-child)").hide();
    setInterval(function() {
      $(".top_silde img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".top_silde");
    },5000);
    $('.slide').slick({
      // autoplay:true,
      // autoplaySpeed:5000,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 780, //399px以下のサイズに適用
            settings: {
            slidesToShow: 2,
            },
          },
        ],
    });
  });