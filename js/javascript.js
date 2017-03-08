(function($) {
    
    var menu = $('#menu');
	var menu_postion = menu.offset().top;

	$(window).on('scroll', function(){
		if($(window).scrollTop() > menu_postion){

			menu.addClass('menu_scroll');

		}else {
			
			menu.removeClass('menu_scroll');
		}
	});


})(jQuery);