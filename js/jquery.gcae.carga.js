/* 
	Script for templatestd, must be add the code for mobile menu.
 */
var ultimaSeccion = "home";
var menuActivo = false;
function muestraSeccion(seccion) {
	if (seccion!=ultimaSeccion) {
		console.log(seccion.toString());
		var cssNuevo = {};
		if (seccion.toString()=="home") {
			cssNuevo = { "border-bottom":"10px solid rgb(251,78,59)"}; 
		} else if (seccion.toString()=="products") {
			cssNuevo = { "border-bottom":"10px solid rgb(251,52,31)"}; 
		} else if (seccion.toString()=="services") {
			cssNuevo = { "border-bottom":"10px solid rgb(232,23,0)"}; 
		} else if (seccion.toString()=="contact") {
			cssNuevo = { "border-bottom":"10px solid rgb(168,18,1)"}; 
		}

		var cssContentSection = {};
		if (seccion.toString()=="home") {
			cssContentSection = {"background-color":"rgba(255,255,255,.8"};
		} else {
			cssContentSection = {"background-color":"rgba(255,255,255,.3"};
		}

		var sec = "#"+seccion;
		var usec = "#"+ultimaSeccion;
			$("header").css(cssNuevo);
			$(usec).slideUp(700);
			$(".contentSection").css(cssContentSection);
			/*$(usec).css("display","none");
			$(usec).fadeOut(700);
			$(sec).fadeIn(700);*/
			$(sec).slideDown(700);
			ultimaSeccion = seccion;
			
			//this.css(cssNuevo);
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
	if(ancho>999){
		$("nav").css(estiloMenu);
	} /*else if (ancho<=1024){
		$("nav").css(estiloMenuHide);
	}*/
}