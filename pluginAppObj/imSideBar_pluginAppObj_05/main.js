function animatedimage_imSideBar_pluginAppObj_05() {
    
    //WXPA-897. Control variable if i clicked on mobile the side div
    var hoverEvent_imSideBar_pluginAppObj_05; 
    
    $(document).ready(function(){
        //Triggering the back side visibility
        switch("mouseover"){
            case "click":
                $('#iandt_imSideBar_pluginAppObj_05 .wrapper').click( function(){
                    $(this).toggleClass('back-visible');
                });
                break;
            case "timer":
                setInterval(function() {
                    $('#iandt_imSideBar_pluginAppObj_05 .wrapper').toggleClass('back-visible');
                },2000);
                break;
            case "mouseover":
                $('#iandt_imSideBar_pluginAppObj_05 .wrapper').hover(function(e){
                    hoverEvent_imSideBar_pluginAppObj_05 = true;
                    $(this).addClass('back-visible'); 
                    setTimeout(function(){ 
                        hoverEvent_imSideBar_pluginAppObj_05 = false; 
                    }, 100);
                }, function(){
                    hoverEvent_imSideBar_pluginAppObj_05 = false;
                    $(this).removeClass('back-visible');
                });
                break;
        }

        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(isMobile && "flip-hor" == "none"){   
            //WXPA-897. Fix mobile hover/click. I need to manage click only for "none" effect
            $('#iandt_imSideBar_pluginAppObj_05 .wrapper a').each(function(){
                // Cache event
                var existing_event = this.onclick;
                // Remove the event from the link
                this.onclick = null;
                // Add a check in for the class wrapper if present back-visible
                $(this).click(function(){    
                    if(!hoverEvent_imSideBar_pluginAppObj_05 && 
                        $('#iandt_imSideBar_pluginAppObj_05 .wrapper').hasClass('back-visible')) {
                        // Reattach your original onclick
                        if(existing_event) $(this).click(existing_event);
                    }
                    else{
                        hoverEvent_imSideBar_pluginAppObj_05 = false;
                        return false;
                    }
                });
            });
    
        }
    });    
}
