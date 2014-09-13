$(document).ready(function(){
	var width = $(window).width();
	$("body").css("font-size", width*18/720);
	$("#slides").height("12.38888889em");
});

$(function(){
  $("#slides").slidesjs({
	  navigation: {
      active: false,
      effect: "slide"
    },
	pagination: {
      active: true,	
      effect: "slide"
    },
	effect: {
      slide: {
        speed: 200
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
});