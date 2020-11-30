$(function () {
    /*-------------------------------------------------------------------
        1. FUNCIONES PARA EL MENU HAMBURGUESA DE DISPOSITIVOS MOVILES
    --------------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*-------------------------------------------------------------------
        2. FOOTER DEL SITIO
    --------------------------------------------------------------------*/
    var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].substring(0, 4)
    var pathImg = '';
    var path = '';
    footer();

    function footer() {
        $('footer').append(`       
        <div class="container mt-4">
            <hr>
            <div class="row">
                <div class="col-md-5 d-flex flex-column align-items-center align-items-md-start">
                    <h3>Ligas de interes</h3>
                    <ul>
                        <li><a href="https://www.unam.mx/" target="_blank">Universidad Nacional Autónoma de
                                México</a></li>
                        <li><a href="http://www.unamenlinea.unam.mx/" target="_blank">Toda la UNAM en línea</a></li>
                        <li><a href="http://www.ddu.unam.mx/" target="_blank">Defensoría de los Derechos
                                Universitarios</a></li>
                        <li><a href="http://www.pudh.unam.mx/" target="_blank">Programa Universitario de Derechos
                                Humanos UNAM</a></li>
                        <li><a href="http://www.transparencia.unam.mx/">Portal de transparencia</a></li>
                        <li><a href="https://www.unam.mx/telefonos-y-medidas-de-emergencia" target="_blank">Teléfonos de
                                emergencia</a></li>
                        <li><a href="http://www.gaceta.unam.mx/" target="_blank">Gaceta UNAM</a></li>
                    </ul>
                </div>
                <div class="col-md-4 d-flex flex-column align-items-center align-items-md-start">
                    <h3>Contacto LNCC</h3>
                    <p class="mx-sm-5 px-sm-5 mx-md-0 px-md-0">Circuito Centro Cultural S/N, (frente a Universum), Cd.
                        Universitaria,
                        Delegación Coyoacán, 04510, CDMX. </p>
                    <p>5622 6730 </p>
                    <p class="pb-3">lncc@c3.unam.mx</p>
                    <a href="mailto:buzon.lncc@c3.unam.mx, laboratorios@conacyt.mx" target="_blank"
                        class="text-uppercase h1">
                        Buzón de quejas y sugerencias
                    </a>
                </div>
                <div
                    class="col-md-3 d-flex justify-content-center flex-md-column align-items-md-center flex-lg-row align-items-lg-start">
                    <a href="https://www.unam.mx/" target="_blank">
                        <img src="images/logos/UNAM.png" alt="Logo UNAM" class="img-fluid logoUNAM">
                    </a>
                    <a href="https://www.conacyt.gob.mx/" target="_blank">
                        <img src="images/logos/CONACYT.png" alt="Logo CONACYT" class="img-fluid logoCONACYT">
                    </a>
                </div>
            </div><!-- /.row-->
            <div class="row">
                <div class="col-md-3 col-lg-2 d-flex justify-content-center">
                    <a href="http://www.unamglobal.unam.mx/?p=7732" target="_blank">
                        <img src="images/logos/UNAMOS.png" alt="Logo UNAM Nacion" class="img-fluid logoUNAMOS">
                    </a>
                </div>
                <div class="col-md-9 col-lg-10 d-flex align-items-center">
                    <p>Hecho en México, Universidad Nacional Autónoma de México (UNAM), todos los derechos reservados
                        2018. Esta página y sus contenidos pueden ser reproducidos con fines no lucrativos, siempre y
                        cuando no se mutile, se cite la fuente completa y su dirección electrónica.De otra forma,
                        requiere permiso previo por escrito de la institución.</p>
                </div>
            </div><!-- /.row-->
        </div><!-- /.container-->
        `);
    };

});