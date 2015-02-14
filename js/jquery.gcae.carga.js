/* 
	Script for templatestd, must be add the code for mobile menu.
 */
var ultimaSeccion = "home";
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
	} else if (seccion=="contacto") {
		$('#form').slideDown(1000);
        $('#message').remove();
    }
}