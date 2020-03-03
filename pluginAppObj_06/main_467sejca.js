function animatedslider_pluginAppObj_06() {
var pluginAppObj_06Swiper;

    x5engine.boot.push(function(){
        resizeAnimatedSwiper_pluginAppObj_06();
        loadSwiper();
    
        (function($) {
           var $window = $(window);

            $window
                .resize(resize);
        })(jQuery);
    });

    function resize() {    
        pluginAppObj_06Swiper.destroy(true);
        resizeAnimatedSwiper_pluginAppObj_06();
        loadSwiper();
    }

    function resizeAnimatedSwiper_pluginAppObj_06(){
        var height = 405;
        var width = 500;
        var controls_padding =   0
        var pagination_padding = 0
        var container_width = $("#pluginAppObj_06").width();
        var max_width = (container_width < width ? container_width : width);
        height = ((max_width - controls_padding) / width) * height;
        width = max_width - controls_padding;

        $("#pluginAppObj_06 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_06 .swiper-button-next, #pluginAppObj_06 .swiper-button-prev").css({"top": height/2});
        $("#swiper_pluginAppObj_06").css({"width": max_width,"height": height + pagination_padding});
    }

    function loadSwiper(){
    
        pluginAppObj_06Swiper = new Swiper('#pluginAppObj_06 .swiper-container.main', {

        freeMode:            false,
        speed:               1000,
        loop:                true,
        direction:           'horizontal',
        roundLengths:        true,
        autoplay:            3000,
            autoplayDisableOnInteraction: false,
            effect:              getBestEffect('fade'),
 });
    }

    function isIE(){
        var ua = window.navigator.userAgent;
        var old_ie = ua.indexOf('MSIE ');
        var new_ie = ua.indexOf('Trident/');
        return (old_ie > -1 || new_ie > -1);
    }

    function getBestEffect(effect){
        if(effect == 'none')
            return 'fade';
        

        if(isIE()){
            if (['cube', 'flip', 'stack'].indexOf(effect) >= 0)
                return 'fade'
        }

        return effect;
    }

}