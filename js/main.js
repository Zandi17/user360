/*How to make the hero section always fill browser window?*/
$(window).resize(function() {
        $('#hero').height($(window).height());
}).resize();

/*sticky*/
var altura = $('header').offset().top;

$(window).on('scroll', function(){
	if ( $(window).scrollTop() > altura ){
		$('header').addClass('menu-fixed');
	} else {
		$('header').removeClass('menu-fixed');
	}
});

