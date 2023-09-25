<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="ePgToDWU6vUARWn0dT755ThrNdbZaDkoQAkQ4uYnjMo" />
  <meta name="description"
    content="Acceda a la p&aacute;gina de la Escuela Taller Gij&oacute;n Acompa&nacute;a diseñada por el alumnado del curso 2023/2024 donde encontrar&aacute; informaci&oacute;n relacionada con las actividades formativas realizadas en el centro.">
  <title>Escuela Taller Gijón Acompa&nacute;a</title>
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="css/style.css">
</head>


<body>
  <!-- Inicio HEADER -->
    <?php include('cabecera.inc'); ?> 
  <!-- Fin de HEADER -->

  <div id="anclaUN">&nbsp;</div>
  <!--Ultimas noticias-->
  <section class="noticias">
    <div class="fondo">
      <div class="norota">
        <div class="notiTitulo">
          <div>Noticias<br />Recientes</div>
        </div>
        <!-- incluir en src el enlace a noticias -->
        <section class="portaTarjetas" id="tj" src="">
          <article class="tarjeta tj1">
            <!-- incluir el enlace a las imagenes -->
            <img src="images/pluriCultuNoti.png" alt="noticia 1" id="primeraFotoNoti" />
            <p id="primeraNoti">
              <strong>Proyecto Pluriculturalidad:</strong> <br>
              En el m&oacute;dulo de web se est&aacute; preparando una p&aacute;gina web en la que se apoyar&aacute;n
              los alumnos de distintas naciones para exponer sus experiencias en sus respectivos pa&iacute;ses con el
              fin de ampliar la visi&oacute;n del resto y conocer mejor otras culturas.
            </p>
          </article>

          <article class="tarjeta tj2">
            <!-- incluir el enlace a las imagenes -->
            <img src="images/logo-escuelas-taller.jpg" alt="noticia 2" id="segundaFotoNoti" />
            <p id="segundaNoti">
              <strong> Comienzo Escuela Taller Gij&oacute;n Acompa&ntilde;a </strong> <br>
              El 1 de Abril de 2023 comenz&oacute; la Escuela Taller Gij&oacute;n Acompa&ntilde;a, consta de cuatro
              m&oacute;dulos y un total de 36 alumnos
              de diversas nacionalidades y culturas. A diferencia de a&ntilde;os anteriores, su estructura est&aacute;
              compuesta de 3 meses de
              formaci&oacute;n y 15 de trabajo.
              Adem&aacute;s, hay una ampliaci&oacute;n en la edad l&iacute;mite hasta los 30 a&ntilde;os.
            </p>
          </article>

          <article class="tarjeta tj3">
            <!-- incluir el enlace a las imagenes -->
            <img src="images/contrato.png" alt="noticia 2" id="terceraFotoNoti" />
            <p id="terceraNoti">
              <strong> Empieza la fase de contrato:</strong>
              <br>
              Recibimos la visita de Carla Álvarez Sanjurjo, Directora General de
              Promoción del Empleo del Ayuntamiento de Gijón. Estamos realmente agradecidos por
              su presencia y dedicación al apoyar nuestras iniciativas. La
              Directora se interes&oacute; en conocer la tarea que llevamos
              acabo en la Escuela Taller. Se realiz&oacute; una
              presentaci&oacute;n de los proyectos en desarrollo y se
              concluy&oacute; la visita con una foto grupal.
            </p>
          </article>
        </section>
      </div>
      <button class="botonNoticias">
        <a href="noticias/index.html" id="linkNoticias">M&aacute;s noticias</a>
      </button>
    </div>
  </section>

  <!--Tarjetas-->

  <div class="tarjetero">
    <div class="col1">
      <div class="box box-down verde">
        <h2><a class="enlaTarje" href="formacion/index.html">Formaci&oacute;n</a></h2>
        <p>Módulos impartidos en la formación que dotan al alumnado de los conocimientos necesarios para su
          desarrollo
          profesional</p>
        <img class="logos" src="images/formacion.png" alt="formacion">
      </div>

      <div class="box rojo">
        <h2><a class="enlaTarje" href="obra/index.html">Obra</a></h2>
        <p>Trabajos realizados por parte del alumnado durante el proceso</a></p>
        <img class="logos" src="images/obra.png" alt="obra">
      </div>

      <div class="box box-down azul">
        <h2><a class="enlaTarje" href="practicas/index.html">Pr&aacute;cticas</a></h2>
        <p>Actividades desarrolladas en el ambito profesional</a></p>
        <img class="logos" src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="practica">
      </div>
    </div>

    <div class="row2-container">
      <div class="box naranja" id="mostrarNota">
        <h2 class="enlaTarje"> Nota Informativa </h2>
        <p>Acceda a la nota informativa inicial</p>
        <img class="logos" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="acceso">
      </div>

    </div>
  </div>

<!--  Inicio del PIE -->
  <?php include('pie.inc') ?>
<!-- Fin del PIE-->

  <div id="popup-container">
    <div id="popup">
      <span id="close-btn">×</span>
      <h2 id="achedos">Nota Informativa</h2>
      <p class="long-line">* Las Escuelas Taller son proyectos de Empleo Formación de carácter nacional que compaginan
        la formación con experiencia laboral.</p>
      <br>
      <p class="medium-line">* <span class="boldeando">"Gijón Acompaña"</span> está integrada en la Agencia Local de
        Promoción Económica y Empleo del Ayuntamiento de Gijón.</p>
      <br>
      <p class="short-line">* La promoción responsable de la creación de esta página dio comienzo el <span
          class="boldeando">1 de abril de 2023 y finalizará el 1 de octubre de 2024.</span></p>
      <br>
      <p class="short-line">* El objetivo de este sitio web es dotar de visibilidad a la Escuela Taller, así como servir
        de práctica real y dar uso a los conocimientos adquiridos durante el desarrollo de los dos certificados de
        profesionalidad orientados a web impartidos:</p>
      <ul id="listacursos">
        <br>
        <li>"CONFECCIÓN Y PUBLICACIÓN DE PÁGINAS WEB" (IFCD0110).</li>
        <br>
        <li>"DESARROLLO DE APLICACIONES CON TECNOLOGÍAS WEB" (IFCD0210).</li>
        <br>
      </ul>
      <p class="short-line">* Todo el contenido de este sitio web tiene carácter <span class="boldeando">meramente
          ilustrativo</span> de las tareas, visitas y trabajos realizados por el alumnado, siendo <span
          class="boldeando">independiente de la web del Ayuntamiento de Gijón</span> totalmente y no vinculante, en
        ningún sentido, con dicha institución.</p>
    </div>
  </div>

  <script src="js/script.js"></script>
  <script src="js/noticiasScript.js"></script>

</body>

</html>
