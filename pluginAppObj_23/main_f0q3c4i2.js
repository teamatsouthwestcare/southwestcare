function skill_bar_pluginAppObj_23() {
	
	$(document).ready(function(){

		if(isElementInViewport($("#skill_pluginAppObj_23"))){
			drawSkill();
		}
		else{
			firstTimeVisible($("#skill_pluginAppObj_23"), drawSkill);
		}

	});

	$("#imContent").on("breakpointChangedOrFluid", function (e, breakpoint) {
		//redrawing bar
		drawSkill();
    });


    function drawSkill(){
    	if(true){
    		resizeCircle();
    		drawCircle();	
    	}	
    	else
    		drawBar();
    }

    function drawBar(){

		$("#skill_bar_pluginAppObj_23 .count-bar").animate({
			width: getPercentage() + "%"
		}, 50);
    }

    function drawCircle(){
    	//canvas initialization
		var canvas = $("#skill_canvas_pluginAppObj_23").get(0);
		var ctx = canvas.getContext("2d");
		//dimensions
		var width = canvas.width;
		var height = canvas.height;
		var thickness = 1;
		var animation_loop;
		var degrees = 0;
		

		function animate_circle()
		{
			var force_value = false;
			//clear animation loop if degrees reaches desired percentage
			if(degrees > (getPercentage() * 3.6) - 3){
				clearInterval(animation_loop);
				force_value = true;
			} 
				
			
			degrees = degrees + 3;	
			drawCircleInCanvas(force_value);
		}

		function drawCircleInCanvas(force_value)
		{
			ctx.clearRect(0, 0, width, height);
			
			//Background
			ctx.beginPath();
			ctx.strokeStyle = "transparent";;
			ctx.lineWidth = thickness;
			ctx.arc(width/2, height/2, width/2 - thickness/2, 0, Math.PI*2, false); //you can see the arc now
			ctx.stroke();
			
			//Fill. Radians = angle in degrees * PI / 180
			var radians = degrees * Math.PI / 180;
			ctx.beginPath();
			ctx.strokeStyle = "transparent";
			ctx.lineWidth = thickness;
			ctx.arc(width/2, height/2, width/2 - thickness/2, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
			ctx.stroke();
			if(true){
				ctx.fillStyle = "rgba(32, 152, 209, 1)";
				ctx.font = "  40px Days One";
				var text;
				if(false){
					text = (force_value ? 100 : Math.floor(degrees/3.6)) + "%";
				}
				else{
					text = (force_value ? 100 : Math.floor(degrees*1/360 * 100));
				}
				text_width = ctx.measureText(text).width;
				ctx.textBaseline = 'middle';
				ctx.fillText(text, width/2 - text_width/2, height/2);
			}
		}

		animation_loop = setInterval(animate_circle, 3*50/(getPercentage() * 3.6)); //percentage of 360°
    }

    function resizeCircle(){
    	$("#skill_canvas_pluginAppObj_23").attr("width", Math.min(200, $("#pluginAppObj_23").width()));
    	$("#skill_canvas_pluginAppObj_23").attr("height", Math.min(200, $("#pluginAppObj_23").width()));
    }

    function getPercentage(){
		if(false)
			return 100;
		else{
			return 100;
		}
	}

	/* Animate bar only when visible */

	function isElementInViewport (el) {

	    var win = $(window);

	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();

	    var bounds = el.offset();
	    bounds.right = bounds.left + el.outerWidth();
	    bounds.bottom = bounds.top + el.outerHeight();

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	}

	function firstTimeVisible(el, callback) {
		if(!isElementInViewport(el)){
			$(window).on('DOMContentLoaded.ftv_pluginAppObj_23 load.ftv_pluginAppObj_23 resize.ftv_pluginAppObj_23 scroll.ftv_pluginAppObj_23', function(){
				if(isElementInViewport(el)){
					$(window).off('.ftv_pluginAppObj_23');
					if (typeof callback == 'function') {
		                callback();
		            }
				}
			});
		}
	}
}


