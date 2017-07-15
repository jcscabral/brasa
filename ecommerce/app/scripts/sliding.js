var carousel;
$(document).ready(function () {
	
    carousel = $("#scrolling ul");
    carousel.itemslide({	
    }); //initialize itemslide
	
	//customed arrows
	$(".arrow-r").click(function(){
		carousel.next();
		
	});	
	$(".arrow-l").click(function(){
		carousel.previous();		
	});
	
    $(window).resize(function () {
        carousel.reload();
    }); //Recalculate width and center positions and sizes when window is resized
});
