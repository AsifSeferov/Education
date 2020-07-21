var slSlider = $('#slider-area').bxSlider({
    auto: true,
    onSlideAfter: function(){
      slSlider.startAuto();
    }
  });