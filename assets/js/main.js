        var $slider = $('#banner-area');
        var activeClass = 'active-one';
        $slider.bxSlider({
            auto: true,
            pager: false,
            onSliderLoad: function() {
                $slider.children('li').eq(1).addClass(activeClass);
            },
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                $slider.children('li').removeClass(activeClass).eq(newIndex + 1).addClass(activeClass);
        }
    });