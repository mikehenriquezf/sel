$(document).ready(function () {

	$('.link').hover(
		function (){
			var $texto = $(this).find('.txt');
			var $icon = $(this).find('.icon');
			
			$texto.show();
			$texto.animate({'opacity':1}, 300).delay(400);	
			$icon.animate({'marginTop':'50px'}, 300);
			
		}, function (){
			var $texto = $(this).find('.txt');
			var $icon = $(this).find('.icon');
			
			$texto.animate({'opacity':0}, 300, function(){
				$texto.hide();
			}).delay(700);	
			$icon.animate({'marginTop':'60px'}, 300);
			
		}
	);

	$('#santurceesley').hover(
		function (){
			$(this).css({'background':'url("img/santurceesley_hover.png") no-repeat'});
		}, function (){
			$(this).css({'background':'url("img/lp_btn_sel.png") no-repeat'});
		}
	);

	$('#cta').hover(
		function (){
			$(this).css({'background':'url("img/btn_subscribete_hover.png") no-repeat'});
		}, function (){
			$(this).css({'background':'url("img/btn_subscribete_normal.png") no-repeat'});
		}
	);

	$('#cta').click(function (){
		var email = $('#mce-EMAIL').val();
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (!filter.test(email)){
			alert('Por favor ingrese su email');
		}else{
			$('#mc-embedded-subscribe-form').submit();
			// $.ajax({
			//     type: "POST",
			//     url: "includes/save.php",
			//     data: { email: email }
			// }).done(function( msg ) {
			//     if(msg == 1){   
			//     	$('#nl_message').html('Gracias, su email ha sido ingresado!');
			//     }
		 //    });
	    }
	});

	$('#facebook').click(function (){
		location.href = 'http://www.facebook.com/medallalightofficial';
	});
	
	$('#youtube').click(function (){
		location.href = 'http://www.youtube.com/medallalightvideo';
	});
	
	$('#twitter').click(function (){
		location.href = 'http://twitter.com/medallaofficial';
	});
	
	$('#tumblr').click(function (){
		location.href = 'http://www.medallalight.tumblr.com/';
	});
	
	$('#instagram').click(function (){
		location.href = 'http://instagram.com/medallalight';
	});
	
	$('#santurceesley').click(function (){
		location.href = 'qr/';
	});
	
});