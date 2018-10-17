$(document).ready(function () {
  //  $('h1').hide();
    //$('.try').hide();
    $('h1').click(function () { 
        $('.word').slideToggle(2000); 
        $('.word2').hide();  
    });
    $('h2').click(function () { 
        $('.word2').hide();  
    });
    $('h3').click(function () { 
        $('#p1').toggleClass('change');
    });

});