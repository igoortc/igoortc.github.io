$('.menu li a').click(function(){
    $('.menu li').removeClass('active');
    $(this).parent().addClass('active');
    $('.content').hide();
    var option = $(this).attr('data-menu');
    $('#'+option).show();
});