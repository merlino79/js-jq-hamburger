$(document).ready(function(){

  //creo referenze agli elementi
  var bottone =  $("#btn");
  var text = $("#lorem");
  var text_hidden = $("#lorem2");


  //testo id=lorem2 nascosto
  text_hidden.hide();

  //flag per il secondo testo 
  var testo_visibile = false;


  //effetto hover sul bottone che cambia colore in rosso
  bottone.mouseenter(function(){
    bottone.addClass("red");
    
  })

  //quando il mouse lascia il bottone: resetto il bottone e resetto il testo principale
  bottone.mouseleave(reset);

  //quando clicco il bottone cambia il testo visibile in rosso e gestisco la visibilta del testo 2
  bottone.click(function(){
    text.removeClass("green");
    text.addClass("red");

    //condizione per la visibilta del testo 2. Se il testo non e' visibile, lo mostro e cambio il flag in true.
    if(testo_visibile === false){
      text_hidden.show();
      testo_visibile = true;
    }else{//condizione per la visibilta del testo 2. Se il testo e' visibile, lo nascondo e cambio il flag in false.
      text_hidden.hide();
      testo_visibile = false;
    }
    //funzione del doppio click che mi cambia il testo nel bottone.
    bottone.dblclick(function(){
      bottone.text("clicked")
    })

  })

  
//funzione reset chiamata da bottone.mouseleave riga 23
function reset(){
    bottone.removeClass("red");
    text.removeClass("red");
    text.addClass("green");
    bottone.text("click me");
}

})