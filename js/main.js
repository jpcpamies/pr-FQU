

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










var plantillaInici = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio"><span>Tornar al Inici</span></div><article class="salutaciones"><div class="header"><h2>Salutacions</h2></div><div class="carasSalutaciones"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/alcaldesaMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/regidoraMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/pregoneraMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPerson()">Galeria de personalitats</a></div></article><article class="pubillas"><div class="header"><h2>Pubilles</h2></div><div class="caras"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla3.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla4.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla5.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla6.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla7.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla8.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla9.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla10.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla11.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla12.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla13.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla14.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPubillas()">Galeria de pubillas</a></div></article><div class="volverIncicio"><span>Tornar al Inici</span></div>';




var plantillaPubilles = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="subHero"><div class="foto"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla1\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran1.jpg" width="478" heigt="589" alt=""/></div></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="hero hero2"></div><div class="subHero"><div class="foto"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost2"/><label class="desplegarPost" for="desplegarPost2"><div class="contenido" onclick="slideToggle(\'pubilla2\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran2.jpg" width="478" heigt="589" alt=""/></div></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>';

var plantillaPerson='<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/alcaldesaMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Alcaldessa d’Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla1")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/pregoneraMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Pregonera de Festes</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla2")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/regidoraMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Regidora de Festes</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla3")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla3" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>';


function irPubillas () {
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaPubilles;
  window.location.hash="#btnProg";
};

function irInicio () {
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaInici;
  window.location.hash="#btnProg";
};

function irPerson () {
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaPerson;
  window.location.hash="#btnProg";
};

// //Facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// // Twitter
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');












