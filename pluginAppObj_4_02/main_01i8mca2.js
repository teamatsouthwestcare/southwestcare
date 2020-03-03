function swiperslider_pluginAppObj_4_02() {
var pluginAppObj_4_02Swiper;

    x5engine.boot.push(function(){
        resized_swiper_pluginAppObj_4_02()

        pluginAppObj_4_02Swiper = new Swiper('#pluginAppObj_4_02 .swiper-container.main', {

            slidesPerView:    2,
            slidesPerColumn:  1,
            spaceBetween:     0,
            freeMode:         false,
            speed:            1000,
            roundLengths: true,
                    autoplay: 3000,
        autoplayDisableOnInteraction: false,

            controlBy:        'container'
        });

        if(true){
            pluginAppObj_4_02ThumbsSwiper = new Swiper('#pluginAppObj_4_02 .swiper-container.thumbs', {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
                freemode: true,
                //controlBy: 'container'

            });
            pluginAppObj_4_02Swiper.params.control = pluginAppObj_4_02ThumbsSwiper;
            pluginAppObj_4_02ThumbsSwiper.params.control = pluginAppObj_4_02Swiper;
            
            pluginAppObj_4_02ThumbsSwiper.on('sliderMove', pluginAppObj_4_02Swiper.pauseAutoplay);
pluginAppObj_4_02ThumbsSwiper.on('click', pluginAppObj_4_02Swiper.pauseAutoplay);

        }
    });


    $("#imContent").on("breakpointChangedOrFluid", function (e, breakpoint) {
        resized_swiper_pluginAppObj_4_02();
        pluginAppObj_4_02Swiper.update();
        pluginAppObj_4_02Swiper.slideTo(0, 1, null);
    });

    function resized_swiper_pluginAppObj_4_02(){
        var height = 720;
        var width = 800;
        var controls_padding = 0
        var pagination_padding = 0
        var thumbs_height = 90; 

        var container_width = $("#pluginAppObj_4_02").width();
        var max_width = (container_width < width ? container_width : width);
        height = ((max_width - controls_padding) / width) * height;
        width = max_width - controls_padding;
        
        $("#pluginAppObj_4_02 .swiper-container.main").css({"width": width,"height": height});
        $("#pluginAppObj_4_02 .swiper-container.thumbs").css({"width": width});
        $("#pluginAppObj_4_02 .swiper-button-next, #pluginAppObj_4_02 .swiper-button-prev").css({"top": height/2});
        $("#swiper_pluginAppObj_4_02").css({"width": max_width,"height": height + pagination_padding + thumbs_height});
            
        if(1 > 1){
            var customHeight =  (height - 0)/1; 
            $("#swiper_pluginAppObj_4_02 .swiper-container.main .swiper-slide").css("height", customHeight);
        }
        else{
            $("#swiper_pluginAppObj_4_02 .swiper-container.main .slide-content").css("height", height);
        }
        
    } 
}