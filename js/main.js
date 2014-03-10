

// Variables para capturar la fecha del navegador
var fecha = new Date();
var numero = fecha.getDate();
var dia = fecha.getDay();
var mes = fecha.getMonth();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();

//Variables para capturar elementos
var texto = document.getElementsByClassName('detall');
var prog = document.getElementsByClassName('llistaVisible');
var bot = document.getElementsByClassName('dia');

// Arreglos para a mostrar meses y días en Catalán
var meses = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre" ,"Novembre", "Desembre"];
var diasSemana = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];

//función para subir o bajar el tamaño de la fuente
function resizer (multiplicador){
    for (var i = 0; i < texto.length; i++) {
        
        if (texto[i].style.fontSize == ""){

            texto[i].style.fontSize = "0.8em";

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












