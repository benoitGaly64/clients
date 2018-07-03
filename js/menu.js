menu = {};

var
$menuItem = $('.menu .item).tab
handler = {
activate: function () {
$(this)
.addClass('active')
.closest('.ui.menu')
.find(.item')
.not($(this))
.removeClass('active');
};

$menuItem
.on('click', handler.activate)
;
$(document).ready(menu.ready);