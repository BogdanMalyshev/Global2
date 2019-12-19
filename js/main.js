$(document).ready(function() {
    $('.burger__menu').click(function(event) {
      	$('.burger__menu,.main') .toggleClass('active');
      	$('body') .toggleClass('lock');
    });
});