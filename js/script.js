$(document).ready(function(){
	menu();
	footer();
	menuMobile();
	headerMobile();
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('#menu-mobile').toggleClass('open');
	});

	$('.clickMenu').click(function(){
		if ($('.optsMenu').not($(this).find($('.optsMenu'))).hasClass('open')) {
			$('.optsMenu').not($(this).find($('.optsMenu'))).removeClass('open');
		}
		if ($(this).find(".optsMenu").hasClass('open')) {
			$(this).find(".optsMenu").removeClass('open');
		}else{
			$(this).find(".optsMenu").addClass('open');
		}
	});

	$('.clickProy').click(function(){
		var height = $(this).find(".info > div").height();
		console.log(height)
		if ($('.info').not($(this).find($('.info'))).hasClass('open')) {
			$('.info').not($(this).find($('.info'))).removeClass('open');
			$('.info').not($(this).find($('.arrow'))).removeClass('up');
			$('.info').not($(this).find($('.info'))).css('height',0);
		}
		if ($(this).find(".info").hasClass('open')) {
			$(this).find(".info").removeClass('open');
			$(this).find(".arrow").removeClass('up');
			$(this).find(".info").css('height',0);
		}else{
			$(this).find(".info").addClass('open');
			$(this).find(".arrow").addClass('up');
			$(this).find(".info").css('height', height);
		}
	});
	$('#banner').hover(function(){
		$('.arrows img').css('visibility','visible');
		console.log("hover")
	},function(){
		$('.arrows img').css('visibility','hidden');
		console.log("hover")
	}
	)
	//var myVideo =  iframe.getElementById('videoY');
	//myVideo.mute();
});
var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].substring(0,4)
var pathImg = '';
var path = '';
function menu(){
	console.log(pageName)
	if (pageName == 'regi' ) {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('header').append(`
		<div class="container">
			<div class="col-4 float">
				<a href="index.html" onclick="gtag('event', 'formulario', {'event_category':'header', 'event_action':'click','event_label':'Ir a UNAM.mx'});">
					<img src="`+pathImg+`/logos/LNCC.png" alt="LNCC">
				</a>
			</div>
			<div class="col-8 float text-right">
				<a href="`+path+`https://www.c3.unam.mx/" target="_blank" onclick="gtag('event', 'formulario', {'event_category':'header', 'event_action':'click','event_label':'Ir a home'});">
					<img src="`+pathImg+`/logos/C3.png" alt="C3" >
				</a>
				<a href="`+path+`https://elcolegiodemorelos.edu.mx/" target="_blank" onclick="gtag('event', 'formulario', {'event_category':'header', 'event_action':'click','event_label':'Ir a home'});">
					<img src="`+pathImg+`/logos/MORELOS.png" alt="MORELOS">
				</a>
				<a href="`+path+`https://www.ciad.mx/" target="_blank" onclick="gtag('event', 'formulario', {'event_category':'header', 'event_action':'click','event_label':'Ir a home'});">
					<img src="`+pathImg+`/logos/CIAD.png" alt="CIAD">
				</a>
			</div>	
		</div>
	`)
};

function footer(){
	if (pageName == 'regi' ) {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('footer').append(`
		<div class="container foot">
		<hr>
			<div class="row">
				<div class="col-sm-12 col-md-12">
					<div class="row">
						<div class="col-sm-12 col-md-5">
						<br>
							<strong>
								<h3>LIGAS DE INTERÉS</h3>
							</strong> <br>
							<a href="https://www.unam.mx/" target="_blank" class="tamLinks negro">
								<p>Universidad Nacional Autónoma de México
							</a>
							<br>
							<a href="http://www.unamenlinea.unam.mx/" target="_blank" class="tamLinks negro">
								Toda la UNAM en línea
							</a>
							<br>
							<a href="http://www.ddu.unam.mx/" target="_blank" class="tamLinks negro">
								Defensoría de los Derechos Universitarios
							</a>
							<br>
							<a href="http://www.pudh.unam.mx/" target="_blank" class="tamLinks negro">
								Programa Universitario de Derechos Humanos UNAM
							</a>
							<br>
							<a href="http://www.transparencia.unam.mx/" target="_blank" class="tamLinks negro">
								Portal de transparencia
							</a>
							<br>
							<a href="https://www.unam.mx/telefonos-y-medidas-de-emergencia" target="_blank" class="tamLinks negro">
								Teléfonos de emergencia
							</a>
							<br>
							<a href="http://www.gaceta.unam.mx/" target="_blank" class="tamLinks negro">
							Gaceta UNAM
							</a>
							<br>
						</div>

						<div class="col-sm-12 col-md-4">
							<br>
							<strong>
								<h3>CONTACTO LNCC</h3>
							</strong> <br>
							<p>Circuito Centro Cultural S/N, (frente a Universum), Cd. Universitaria,
							 Delegación Coyoacán, 04510, CDMX. <br>
							5622 6730 <br>
							lncc@c3.unam.mx</p>
							<p>QUEJAS Y SUGERENCIAS</p>
						</div>
						<div class="col-sm-12 col-md-3">
							<a href="https://www.unam.mx/" target="_blank">
								<img src="`+pathImg+`/logos/UNAM.png" alt="UNAM" class="tamUNAM" >
							</a>
							<a href="https://www.conacyt.gob.mx/" target="_blank">
								<img src="`+pathImg+`/logos/CONACYT.png" alt="CONACYT" class="tamCONACYT" >
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<br>
							<div class="">
								<a href="http://www.unamglobal.unam.mx/?p=7732" target="_blank">
								<img src="`+pathImg+`/logos/UNAMOS.png" alt="UNAMOS" class="tamUNAMOS" align="left">
								</a>
							</div>
							<div class="caption">
								<p>Hecho en México, Universidad Nacional Autónoma de México (UNAM), todos 
								los derechos reservados 2018.Esta página y sus contenidos pueden ser 
								reproducidos con fines no lucrativos, siempre y cuando no se mutile, 
								se cite la fuente completa y su dirección electrónica.De otra forma,
								requiere permiso previo por escrito de la institución.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`);
};

function menuMobile(){
	if (pageName == 'regi') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#menu-mobile').append(`
		<div class="cont-menu">			
			<div class="clickMenu">
				<div id="optsC3" class="optsMenu">
					<div>
						<a href="`+path+`infraestructura.html" >
							<div>Infraestructura</div>
						</a>
					</div>
					<div>
						<a href="`+path+`colaboraciones.html" >
							<div>Colaboraciones</div>
						</a>
					</div>
					<div>
						<a href="`+path+`lineasdeinvestigacion.html" >
							<div>Líneas de Investigación</div>
						</a>
					</div>
					<div>
						<a href="`+path+`participantes.html" >
							<div>Participantes</div>
						</a>
					</div>
					<div>
						<a href="`+path+`proyectos.html" >
							<div>Proyectos</div>
						</a>
					</div>
					<div>
						<a href="`+path+`servicios.html" >
							<div>Servicios</div>
						</a>
					</div>
					<div>
						<a href="`+path+`publicaciones.html" >
							<div>Publicaciones</div>
						</a>
					</div>
				</div>
			</div>				
		</div>
	`);
};

function headerMobile(){
	if (pageName == 'regi') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#header-mobile').append(`
		<a href="index.html">
			<img src="`+pathImg+`/logos/LNCC.png" alt="ULNCC">
		</a>
		<a href="https://www.c3.unam.mx/" target="_blank" >
			<img src="`+pathImg+`/logos/C3.png" alt="C3">
		</a>
		<a href="https://elcolegiodemorelos.edu.mx/" target="_blank" >
			<img src="`+pathImg+`/logos/MORELOS.png" alt="MORELOS">
		</a>
		<a href="https://www.ciad.mx/" target="_blank" >
			<img src="`+pathImg+`/logos/CIAD.png" alt="CIAD">
		</a>
	`);
}
