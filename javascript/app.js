$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 200) {
        
    	$("header").css("background-color", "gray");
    } else {
    	$("header").css("background-color", "transparent");
    }
});