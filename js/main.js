;(function($){

    var inputs = $('input');
    console.log(inputs.prop({value: 'Kate', title: 'Name'}));
    console.log(inputs.prop('title',function(index, value){
        console.log('this:', this.value);
        console.log('arguments:', arguments);
    }));
//    console.log(scripts[0].value.length);
//    console.log(scripts.eq(1).attr('type'));
})(jQuery);