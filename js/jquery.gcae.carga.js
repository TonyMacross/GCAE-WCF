var ultimaSeccion = "home";
var menuActivo = false;
function muestraSeccion(seccion) {
	if (seccion!=ultimaSeccion) {
		var sec = "#"+seccion;
		var usec = "#"+ultimaSeccion;
			$(usec).slideUp(700);
			/*$(usec).css("display","none");
			$(usec).fadeOut(700);
			$(sec).fadeIn(700);*/
			$(sec).slideDown(700);
			ultimaSeccion = seccion;
			$("nav").slideUp(700);
		menuActivo = false;

	} else if (seccion=="contacto") {
		$('#form').slideDown(1000);
        $('#message').remove();
    }
}



function muestraMenu() {
	if (!menuActivo) {
		$("nav").slideDown(700);
		menuActivo = true;
	} else {
		$("nav").slideUp(700);
		menuActivo = false;
    }
}

$(document).on("ready",inicio);

function inicio(){
	$(window).on("resize",calculaCSS);
}

function calculaCSS(){
	var estiloMenu = {
		"display": "inline-block"
	}
	var estiloMenuHide = {
		"display": "none"
	}
 
	var ancho = $(window).width();
	if(ancho>1024){
		$("nav").css(estiloMenu);
	} else if (ancho<=1024){
		$("nav").css(estiloMenuHide);
	}
}


$('.bxslider').bxSlider({
  auto: true,
  pause: 3000,
  slideMargin: 20,
  captions: true
});
