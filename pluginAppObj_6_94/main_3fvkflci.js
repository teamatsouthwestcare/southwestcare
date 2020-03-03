function animatedimage_pluginAppObj_6_94() {
    
    x5engine.boot.push(function(){
        
        //Triggering the back side visibility
        switch("mouseover"){
            case "click":
                $('#iandt_pluginAppObj_6_94 .wrapper').click( function(){
                    $(this).toggleClass('back-visible');
                });
                break;
            case "timer":
                setInterval(function() {
                    $('#iandt_pluginAppObj_6_94 .wrapper').toggleClass('back-visible');
                },2000);
                break;
            case "mouseover":
                $('#iandt_pluginAppObj_6_94 .wrapper').hover(function(){
                    $(this).addClass('back-visible');
                }, function(){
                    $(this).removeClass('back-visible');
                });
                break;
        }
        
         $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeIaT_pluginAppObj_6_94();
          });

         resizeIaT_pluginAppObj_6_94();
    });

    //Proportional resize for responsive behavior
    function resizeIaT_pluginAppObj_6_94(){
        
        var w = 250;
        var h = 250  
        var containerWidth = $('#pluginAppObj_6_94').width();
        var fact = containerWidth < w ? containerWidth / w : 1;
        
        $('#pluginAppObj_6_94 .wrapper, #pluginAppObj_6_94 .sides-container, #pluginAppObj_6_94 .text-container').css( {width: w * fact, height: h * fact} );
    }
}