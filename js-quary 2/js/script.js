$(document).ready(function() {
    //console.log('DOM');

    var bottone = $("#btn");
    var text = $("#lorem");
    var text_hidden = $("#lorem2");

    var testo_visibile = false;
    text_hidden.hide();


    bottone.mouseenter(function() {
        bottone.addClass("red")
    });


    bottone.mouseleave(function() {
        bottone.removeClass("red")
        text.removeClass("red");
        text.addClass("green");
    });

    bottone.click(function() {
        text.removeClass("green");
        text.addClass("red");

        if (testo_visibile === false) {
            text_hidden.show();
            testo_visibile === true;

        } else {
            text_hidden.hide();
            testo_visibile = false;

        }


    });














});
//console.log("prova")