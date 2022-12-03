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
	text('people',12700,13000)
	text('join',200,500)
	text('share',500,800)
	function text(className,start,end){
		var timer = setInterval(()=>{
			start++
			$('.'+className).text(start+"+");
			if(start>=end){
				clearInterval(timer)
			}
		})
	};
	$('.team li:first').addClass('bg-gray');
	$('.team li').click(function(){
		$(this).addClass('bg-gray').siblings().removeClass()
	});
	$('.pd-block:first').addClass('bg-green');
	$('.pd-block').click(function(){
		$(this).addClass('bg-green').siblings().removeClass('bg-green');
		$('.alltext span').addClass('run');
		setTimeout(()=>{
			$('.alltext span').removeClass('run');
		},1000)
	});

