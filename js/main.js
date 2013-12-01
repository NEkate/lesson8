;(function($){

    $.get('main.json', function(stringOfResult){
        var obj = JSON.parse(stringOfResult);
        obj.field = 'asd';
        console.log(obj);
    }, 'text');

})(jQuery);