//©Ivan Bardón 2013-2014
var evento = $('.event p')[0];
var lloc = $('.lloc p')[0];

setInterval(calendar(),2000);
function calendar(){
  // Variables para capturar la fecha del navegador
  var fecha = new Date();
  var numero = fecha.getDate();
  var dia = fecha.getDay();
  var mes = fecha.getMonth();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  
  if (window != undefined) {

    if(horas==11||(horas==12&&minutos<=44)){
      evento.innerText=$('.tituloEvento p')[0].textContent;
      lloc.innerText=$('.llocEvent p')[0].textContent;
    }
    else if (horas==12||horas==13||horas==14) {
      evento.innerText=$('.tituloEvento p')[4].textContent;
      lloc.innerText=$('.llocEvent p')[1].textContent;
    }
    else if (horas==15||horas==16) {
      evento.innerText=$('.tituloEvento p')[8].textContent;
      lloc.innerText=$('.llocEvent p')[2].textContent;
    }
    else if (horas==17&&minutos<=30) {
      evento.innerText=$('.tituloEvento p')[12].textContent;
      lloc.innerText=$('.llocEvent p')[3].textContent;
    }
    else if (horas==17&&minutos<=50) {
      evento.innerText=$('.tituloEvento p')[16].textContent;
      lloc.innerText=$('.llocEvent p')[4].textContent;
    }
    else if (horas==17) {
      evento.innerText=$('.tituloEvento p')[20].textContent;
      lloc.innerText=$('.llocEvent p')[5].textContent;
    }
    else if (horas==18) {
      evento.innerText=$('.tituloEvento p')[24].textContent;
      lloc.innerText=$('.llocEvent p')[6].textContent;
    }
    else if (horas==19 && minutos<=19) {
      evento.innerText=$('.tituloEvento p')[26].textContent;
      lloc.innerText=$('.llocEvent p')[7].textContent;
    }
    else if (horas==20&&minutos<=44) {
      evento.innerText=$('.tituloEvento p')[30].textContent;
      lloc.innerText=$('.llocEvent p')[8].textContent;
    }
    else if (horas==20) {
      evento.innerText=$('.tituloEvento p')[34].textContent;
      lloc.innerText=$('.llocEvent p')[9].textContent;
    }
    else if (horas==21&&minutos<=30) {
      evento.innerText=$('.tituloEvento p')[36].textContent;
      lloc.innerText=$('.llocEvent p')[10].textContent;
    }
    else if (horas==21) {
      evento.innerText=$('.tituloEvento p')[40].textContent;
      lloc.innerText=$('.llocEvent p')[11].textContent;
    }
    else if (horas==22||(horas==23&&minutos<=29)) {
      evento.innerText=$('.tituloEvento p')[44].textContent;
      lloc.innerText=$('.llocEvent p')[12].textContent;
    }
    else if (horas==23) {
      evento.innerText=$('.tituloEvento p')[48].textContent;
      lloc.innerText=$('.llocEvent p')[13].textContent;
    }
    else if (horas==0&&minutos<=29) {
      evento.innerText=$('.tituloEvento p')[52].textContent;
      lloc.innerText=$('.llocEvent p')[14].textContent;
    }
    else if (horas==0||horas==1||horas==2&&minutos<=35) {
      evento.innerText=$('.tituloEvento p')[56].textContent;
      lloc.innerText=$('.llocEvent p')[15].textContent;
    }else{
      evento.innerText=$('.tituloEvento p')[60].textContent;
      lloc.innerText=$('.llocEvent p')[16].textContent;

    };


  }
  // else if (numero==2) {

  //   if(horas==9||horas==10){
  //     evento.innerText=$('.tituloEvento p')[64].textContent;
  //     lloc.innerText=$('.llocEvent p')[17].textContent;
  //   }
  //   else if (horas==11||(horas==12&&minutos<=44)) {
  //     evento.innerText=$('.tituloEvento p')[68].textContent;
  //     lloc.innerText=$('.llocEvent p')[18].textContent;
  //   }
  //   else if (horas==12||horas==13||horas==14) {
  //     evento.innerText=$('.tituloEvento p')[76].textContent;
  //     lloc.innerText=$('.llocEvent p')[19].textContent;
  //   }
  //   else if (horas==15) {
  //     evento.innerText=$('.tituloEvento p')[80].textContent;
  //     lloc.innerText=$('.llocEvent p')[20].textContent;
  //   }
  //   else if (horas==16||horas==17) {
  //     evento.innerText=$('.tituloEvento p')[84].textContent;
  //     lloc.innerText=$('.llocEvent p')[21].textContent;
  //   }
  //   else if (horas==18) {
  //     evento.innerText=$('.tituloEvento p')[90].textContent;
  //     lloc.innerText=$('.llocEvent p')[22].textContent;
  //   }
  //   else if (horas==19||horas==20) {
  //     evento.innerText=$('.tituloEvento p')[94].textContent;
  //     lloc.innerText=$('.llocEvent p')[23].textContent;
  //   }
  //   else if (horas==21) {
  //     evento.innerText=$('.tituloEvento p')[98].textContent;
  //     lloc.innerText=$('.llocEvent p')[24].textContent;
  //   }
  //   else if (horas==22) {
  //     evento.innerText=$('.tituloEvento p')[102].textContent;
  //     lloc.innerText=$('.llocEvent p')[25].textContent;
  //   }
  //   else if (horas==23) {
  //     evento.innerText=$('.tituloEvento p')[106].textContent;
  //     lloc.innerText=$('.llocEvent p')[26].textContent;
  //   }
  //   else if (horas==0) {
  //     evento.innerText=$('.tituloEvento p')[110].textContent;
  //     lloc.innerText=$('.llocEvent p')[27].textContent;
  //   }else{
  //     evento.innerText=$('.tituloEvento p')[114].textContent;
  //     lloc.innerText=$('.llocEvent p')[27].textContent;

  //   };
  // }
  // else if (numero==3) {

  //   if(horas==10){
  //     evento.innerText=$('.tituloEvento p')[120].textContent;
  //     lloc.innerText=$('.llocEvent p')[28].textContent;
  //   }
  //   else if (horas==11||(horas==12&&minutos<=14)) {
  //     evento.innerText=$('.tituloEvento p')[124].textContent;
  //     lloc.innerText=$('.llocEvent p')[29].textContent;
  //   }
  //   else if (horas==12&&minutos<=44) {
  //     evento.innerText=$('.tituloEvento p')[128].textContent;
  //     lloc.innerText=$('.llocEvent p')[30].textContent;
  //   }
  //   else if (horas==12||horas==13||horas==14) {
  //     evento.innerText=$('.tituloEvento p')[132].textContent;
  //     lloc.innerText=$('.llocEvent p')[31].textContent;
  //   }
  //   else if (horas==15||horas==16) {
  //     evento.innerText=$('.tituloEvento p')[136].textContent;
  //     lloc.innerText=$('.llocEvent p')[32].textContent;
  //   }
  //   else if (horas==17) {
  //     evento.innerText=$('.tituloEvento p')[140].textContent;
  //     lloc.innerText=$('.llocEvent p')[33].textContent;
  //   }
  //   else if (horas==18||horas==19||horas==22) {
  //     evento.innerText=$('.tituloEvento p')[144].textContent;
  //     lloc.innerText=$('.llocEvent p')[34].textContent;
  //   }
  //   else if (horas==20||horas==21) {
  //     evento.innerText=$('.tituloEvento p')[148].textContent;
  //     lloc.innerText=$('.llocEvent p')[35].textContent;
  //   }
  //   else if (horas==23) {
  //     evento.innerText=$('.tituloEvento p')[152].textContent;
  //     lloc.innerText=$('.llocEvent p')[36].textContent;
  //   }
  //   else if (horas==0) {
  //     evento.innerText=$('.tituloEvento p')[156].textContent;
  //     lloc.innerText=$('.llocEvent p')[37].textContent;
  //   }
  //   else if (horas==1) {
  //     evento.innerText=$('.tituloEvento p')[160].textContent;
  //     lloc.innerText=$('.llocEvent p')[38].textContent;
  //   }
  //   else if (horas==2) {
  //     evento.innerText=$('.tituloEvento p')[164].textContent;
  //     lloc.innerText=$('.llocEvent p')[39].textContent;
  //   }else{
  //     evento.innerText=$('.tituloEvento p')[168].textContent;
  //     lloc.innerText=$('.llocEvent p')[40].textContent;

  //   };
  // };  

};





function irPubillas () {
  var plantillaPubilles = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="hero hero1"></div><div class="subHero"><div class="foto"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle(\'pubilla1\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran1.jpg" width="478" heigt="589" alt=""/></div></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="hero hero2"></div><div class="subHero"><div class="foto"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Simina Alexandra Crisan</p></div><div class="subNombre"><p>Penya Barcelonista d"Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost2"/><label class="desplegarPost" for="desplegarPost2"><div class="contenido" onclick="slideToggle(\'pubilla2\')"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p><div class="fotoGrande"><img src="img/pubilles/pubillaGran2.jpg" width="478" heigt="589" alt=""/></div></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>';
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaPubilles;
  window.location.hash="#btnProg";
};

function irInicio () {
  var plantillaInici = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio"><span>Tornar al Inici</span></div><article class="salutaciones"><div class="header"><h2>Salutacions</h2></div><div class="carasSalutaciones"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/alcaldesaMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/regidoraMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/salutacions/pregoneraMin.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPerson()">Galeria de personalitats</a></div></article><article class="pubillas"><div class="header"><h2>Pubilles</h2></div><div class="caras"><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla1.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla2.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla3.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla4.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla5.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla6.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla7.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla8.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla9.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla10.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla11.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla12.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla13.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div><div class="cara"><a href="siminaAC.html" class="enlace"><div class="imagen"><img src="img/pubilles/pubilla14.jpg" height="180px" width="180px" alt=""></div><div class="nombre"><span>Simina<br>Alexandra Crisan</span></div></a></div></div><div class="footer"><a href="javascript:irPubillas()">Galeria de pubillas</a></div></article><div class="volverIncicio"><span>Tornar al Inici</span></div>';
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaInici;
  window.location.hash="#btnProg";
};

function irPerson () {
  var plantillaPerson = '<div class="llamadaCalendario"><h3>Programa de festes <span>Estigues al dia dels events</span></h3></div><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/alcaldesaMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Alcaldessa d’Ulldecona</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla1")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla1" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/pregoneraMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Pregonera de Festes</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla2")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla2" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><article class="postRecojido"><div class="header"><div class="subHeroSalutacions"><div class="foto"><img src="img/salutacions/regidoraMin.jpg" height="180px" width="180px" alt="/></div><div class="nombre"><p>Núria Balagué Raga</p></div><div class="subNombre"><p>Regidora de Festes</p></div></div></div><input type="checkbox" id="desplegarPost"/><label class="desplegarPost" for="desplegarPost"><div class="contenido" onclick="slideToggle("pubilla3")"><p>Hola falduts i faldudes!</p><br><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><br><div id="pubilla3" style="display:none;"><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><br><p>Una d’estes pubilles seré jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><br><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><br><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><br><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="footer"><div class="flechita"></div></div></label></article><div class="volverIncicio" onclick="irInicio()"><span>Tornar al Inici</span></div>';
  window.location.hash="";
  document.getElementById('contenidoPrincipal').innerHTML=plantillaPerson;
  window.location.hash="#btnProg";
};
//Variables para capturar elementos

var prog = document.getElementsByClassName('llistaVisible');

//función para subir o bajar el tamaño de la fuente
function resizer (multiplicador){
    var texto = document.getElementsByClassName('detalleEvento');
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

function ajusteHeight () {
  document.getElementById('dia1').style.display='none'
}

//Función para desplegar los elementos por su Id.
function slideToggle(a){
  var elem = document.getElementById(a);
  $(elem).slideToggle(400);
};

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












