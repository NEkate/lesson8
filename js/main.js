;(function($){

    $.fn.asd = function(){
        console.log(this);
        return this;// дает возможность вызывать другие мтоды через точку
    }
     $('script').asd();
})(jQuery);