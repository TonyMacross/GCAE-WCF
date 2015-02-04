/* 
	Script for templatestd, must be add the code for mobile menu.
 */
var ultimaSeccion = "home";
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
	} else if (seccion=="contacto") {
		$('#form').slideDown(1000);
        $('#message').remove();
    }
}