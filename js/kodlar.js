$(document).ready(function(){
	$('.cardimg1').hover(x,y);
	function x(){
		$('.socialgeneral1').slideDown(100);
         
		$('.names1 h5').css({'color':'orange'});
		$('.names1 h6').css({'color':'black'});
	}
	function y(){
		$('.socialgeneral1').slideUp(100);
			$('.socialgeneral1').css({'margin-top':'50px'});
		$('.names1 h5').css({'color':'black'});
		$('.names1 h6').css({'color':'orange'});
	}


	$('.cardimg2').hover(a,b);
	function a(){
		$('.socialgeneral2').slideDown(100);
		$('.names2 h5').css({'color':'orange'});
		$('.names2 h6').css({'color':'black'});
	}
	function b(){
		$('.socialgeneral2').slideUp(100);
			$('.socialgeneral2').css({'margintop':'50px'});
		$('.names2 h5').css({'color':'black'});
		$('.names2 h6').css({'color':'orange'});
	}
	$('.cardimg3').hover(c,d);
	function c(){
		$('.socialgeneral3').slideDown(100);
		$('.names3 h5').css({'color':'orange'});
		$('.names3 h6').css({'color':'black'});
	}
	function d(){
		$('.socialgeneral3').slideUp(100);
			$('.socialgeneral3').css({'margintop':'50px'});
		$('.names3 h5').css({'color':'black'});
		$('.names3 h6').css({'color':'orange'});
	}
		$('.cardimg4').hover(e,f);
	function e(){
		$('.socialgeneral4').slideDown(100);
		$('.names4 h5').css({'color':'orange'});
		$('.names4 h6').css({'color':'black'});
	}
	function f(){
		$('.socialgeneral4').slideUp(100);
			$('.socialgeneral4').css({'margintop':'50px'});
		$('.names4 h5').css({'color':'black'});
		$('.names4 h6').css({'color':'orange'});
	}
          
		
});