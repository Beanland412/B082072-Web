// JavaScript Document
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0)
			$('.navbar').addClass('navbar-top')
		else
			$('.navbar').removeClass('navbar-top')
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>0)
			$('.left,.right').addClass('center')
	});




	$('.addToCart').click(function(){
		$('.check').fadeIn();
		setTimeout(()=>{
			$('.check').fadeOut();
		})
	})
})


