jQuery(document).ready (function (){

    $('#promoTue, #promoWed, #promoSat').hide();
    
    $('h2, h3, h4').click(function(){
        $(this).next('#promoTue, #promoWed, #promoSat').slideToggle(1000);
    });
    
    
    });