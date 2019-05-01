$(function () {

    $('.showcontent').click(function(event) {
    	$('.hidden-progress-bar').addClass('active');
    	$('.hidden-content-container').addClass('opened');
    	setTimeout(function(){
    		$('.hidden-content-container').find('.text-container,.close-btn').show().animate({opacity: 1,},500);
    	}, 1000);
    });

    $('.close-btn').click(function(event) {
    	$('.hidden-content-container').find('.text-container,.close-btn').animate({opacity: 0,},250, function(){
    		$('.hidden-content-container').find('.text-container,.close-btn').hide();
    		$('.hidden-content-container').removeClass('opened');
    		$('.hidden-progress-bar').removeClass('active');
    	});
    });
});

function myResize() {
    var bWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var bHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;   
}