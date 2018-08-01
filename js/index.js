$(document).ready(function(){
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active').tab();
        $(this).addClass('active').tab();
    });   
	$('.ui.accordion').accordion();

});

$(function(){
	$("#btnCreateUser").click(function(){
		$(".popupCreateUser").modal('show');
	});

});