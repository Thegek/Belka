
$(function(){

    $('.burger').on('click', function() {
       $('.main-nav').slideToggle(400, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});





