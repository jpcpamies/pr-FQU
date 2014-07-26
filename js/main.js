

// Variables para capturar la fecha del navegador
var fecha = new Date();
var numero = fecha.getDate();
var dia = fecha.getDay();
var mes = fecha.getMonth();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();

//Variables para capturar elementos
var texto = document.getElementsByClassName('detalleEvento');
var prog = document.getElementsByClassName('llistaVisible');
var bot = document.getElementsByClassName('dia');

// Arreglos para a mostrar meses y días en Catalán
var meses = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre" ,"Novembre", "Desembre"];
var diasSemana = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];

//función para subir o bajar el tamaño de la fuente
function resizer (multiplicador){
    for (var i = 0; i < texto.length; i++) {
        
        if (texto[i].style.fontSize == ""){

            texto[i].style.fontSize = "1em";

        }
        texto[i].style.fontSize = parseFloat(texto[i].style.fontSize)
        + (multiplicador * 0.1) + "em";
        };
};

//mostrar el programa de un dia concreto
function mostrar(b){
    // resetearProg();
    var elem = document.getElementById(b);
    elem.style.display='block';

};

// //eliminar el programa de el dia anterior
// function resetearProg(){
//     for (var i = 0; i < prog.length; i++) {
//         if (prog[i].className=="llistaVisible"){       //creo que no hace falta el [if]
//             prog[i].className="llistaInvisible";
//         }else{
//             prog[i].className="llistaInvisible";
//         }
//     };
// };

function ivan () {
  document.getElementById('dia1').style.display='none'
}

//Función para desplegar los elementos por su Id.
function slideToggle(a){
  var elem = document.getElementById(a);
  $(elem).slideToggle(400);
};


// //función para mostrar y esconder el menu
// var num = 100; //numero de pixele antes de aplicar el script

// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('#menu').addClass('menu');
//     } else {
//         $('#menu').removeClass('menu');

//     }
// });

//función para animar el despliegue de botonera
$(function(){
  //clic en un enlace de la lista
  $('ul li a').on('click',function(e){
    //prevenir en comportamiento predeterminado del enlace
    e.preventDefault();
    //obtenemos el id del elemento en el que debemos posicionarnos
    var strAncla=$(this).attr('href');
    
    //utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
    $('body,html').stop(true,true).animate({
      //realizamos la animacion hacia el ancla
      scrollTop: $(strAncla).offset().top
    },500);
  });
});










var primera = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><article class="salutaciones"><div class="header"><h2>Salutacions</h2></div><div class="imagen"></div><div class="footer"><a href="personalitats.html">Galeria de personalitats</a></div></article><article class="pubillas"><div class="header"><h2>Pubilles</h2></div><div class="caras"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla3.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla4.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla5.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla6.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla7.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla8.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla9.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla10.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla11.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla12.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla13.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla14.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPubillas()">Galeria de pubillas</a></div></article>'




var segona = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="foto"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt="" /></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div><input type="checkbox" id="desplegarPost" /><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla1\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran1.jpg" width="478" heigt="589" alt="" /></div></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="foto"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt="" /></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div><input type="checkbox" id="desplegarPost" /><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla2\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran2.jpg" width="478" heigt="589" alt="" /></div></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>'

function irPubillas () {

  document.getElementById('contenidoPrincipal').innerHTML=segona;

};

function irInicio () {
  document.getElementById('contenidoPrincipal').innerHTML=primera;
}

//Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// // Twitter
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');



// Script mobileMenu
$(function(){
$('.mobileMenu').mobileMenu({
  combine: false,         
  groupPageText: '',     
  nested: true,        
  prependTo: 'nav',      
  switchWidth: 770,     
  topOptionText: ''
});
})


// HTML comprimido para las seciones Pubillas, Información y Colaboradores. 
var info='<div class="contieneInformacion"><section class="informacion"><div class="infoHeader"><h2>Informació <span>relativa a festes</span></h2></div><div class="infoOuter"><div class="infoInner infoEntradas"><div class="checkInfo"><div class="puntos"></div></div><div class="post entrades"><h4>Venda d’entrades i tiquets</h4><div class="detallePost"><h5>Entrades de la Representació Teatral: <span>Confessions de dones de 30</span></h5><p>Venda anticipada a les taquilles del teatre: dilluns 26/8/2013 i dimarts 27/8/2013 de 19.00 a 21.00 hores i el mateix dia de la representació a partir de les 22.00 hores. <br>Preu de l’entrada: 18€</p><h5>Taules i cadires per als dies de ball</h5><p>Fins al 23 d’agost, de 9.00 a 21.00 hores, al retén de l’Ajuntament <br>Taula + 6 cadires: 36€ <br>Cadira: 1€/dia</p><h5>Paella d’Ulldecona (8 de setembre a les 13.30h)</h5><p>Preu per tiquet: 2€ Del dia 19 d’agost fins al 4 de setembre, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Sopar d’ex-pubilles</h5><p>Tindrà lloc el divendres 30 d’agost a les 22.00 hores. Preu: 14€ Del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p></div></div></div><div class="infoInner infoInscripciones"><div class="checkInfo"><div class="puntos"></div></div><div class="post inscripcions"><h4>Inscripcions gratuiütes</h4><div class="detallePost"><h5>Carrosses</h5><p>La desfilada es realitzarà el diumenge 1 de setembre a les 18.30h. Inscripcions del dia 1 al 23 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Diada de la Bicicleta</h5><p>Tindrà lloc divendres dia 30 d’agost a les 10.00h. Inscripcions del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament per recollir el tiquet.</p><h5>Trobada dels “ulldeconencs-planers” (Santa Bàrbara)</h5><p>Es realitzarà el diumenge 2 de setembre a les 11.00h. Inscripcions del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Cursa de cotxes bojos.</h5><p>Es realitzarà el dissabte 1 de setembre a les 11.30h. Inscripcions del dia 1 al 30 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p></div></div></div><div class="infoInner infoHorarios"><div class="checkInfo"><div class="puntos"></div></div><div class="post horario"><h4>Horari de la piscina municipal en festes majors</h4><div class="detallePost"><p class='detallePostPiscina'>Del 23 d’agost a l’1 de setembre de 12.30 A 15.00 Hores, excepte el dia 25 d’agost que hi ha programades les competicions de natació i el dia 27 d’agost que hi ha inflables aquàtics.</p></div></div></div><div class="infoInner infoNotas"><div class="checkInfo"><div class="puntos"></div></div><div class="post notes"><h4>Notes</h4><div class="detallePost"><ul><li>El Programa de les Festes Majors d’Ulldecona 2013 fou aprovat pel Ple el dia 30 de juliol 2013.</li><li> L’Ajuntament es reserva el dret de poder modificar algun acte, si fos necessari, anunciant-ho degudament.</li><li>S’aconsella no circular en cotxe durant les festes, atès que es tallaran diversos carrers a la circulació a causa d’activitats diverses.</li><li>Es recorda a tothom que l’assistència a qualsevol acte amb bous és totalment lliure i voluntària i que, malgrat que l’Ajuntament d’Ulldecona compleix íntegrament la Llei 34/2010 de l’1 d’octubre, de regulació de les festes tradicionals amb bous, sempre hi pot haver algun perill per a les persones que hi van. I també que, d’acord amb l’art. 1 del Decret 385/2000, de 5 de desembre del Departament d’Interior de la Generalitat de Catalunya, <span>es prohibeix l’entrada a les curses de bous als infants i als adolescents menors de 14 anys.</span></li></ul></div></div></div></section></div>'
var pubillas='<div class="contienePubillas"><section class="pubillas"><div class="pubillasHeader"><h3>Pubilles Festes Quinquennals 2014</h3></div><div class="pubillasOuter"><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla1.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla2.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla3.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla4.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla5.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla6.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla7.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article></div></section></div>'
var colaboradores='<div class="contieneColaboradores"><section class="colaboradores"><h3 class='titulo'>Ells colaboren amb aquest espai</h3><div class="logoOuter"><div class="logoInner"><figure><img src="img/logo/animalons.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/jjp.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/lagrama.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/ulldeclinic.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/energy.png" alt=""/></figure></div></div></section></div>'


function inyectarPubillas() {
  document.getElementById('escritorioInner').innerHTML=pubillas;
} 

function inyectarInfo() {
  document.getElementById('escritorioInner').innerHTML=info;
} 

function inyectarColaboradores() {
  document.getElementById('escritorioInner').innerHTML=colaboradores;
} 





