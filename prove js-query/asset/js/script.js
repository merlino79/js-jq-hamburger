$(document).ready(function() {
    //console.log('DOM');

    $('.titolo').addClass('color-title');

    $('#titolo-1').addClass('color-title1');

    //voglio h2 e h3 verdi
    $('h2, h3').addClass("green")

    //di base lo strong è verde io voglio rimuoverlo 

    $('p strong').removeClass('green');

    //classe rimossa e aggiungo un'altro colore 
    $('p strong').addClass('orange');

    $('.program .red ').addClass('red')

    $(".program li:first-child").addClass('green')


    $(".program li:nth-child(4)").addClass('blue')

    //divertimento sulla delection ul

    //voglio prendere i figli direti di selection class spazio
    $('.spazio > small')
        .addClass('fantasia');















});
console.log("uno")