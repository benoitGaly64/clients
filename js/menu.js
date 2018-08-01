function add_menu() {
    var tab = document.createElement("a");
	tab.setAttribute('id','test');
	tab.setAttribute('class','item');
	tab.setAttribute('data-tab','datatest');
	
	var text = document.createTextNode("test");
	
	var close = document.createElement("i");
	close.setAttribute('class','small close icon');
	close.setAttribute('onclick','removeMenu(tab)');
	
	var referenceNode = document.querySelector('#create_tab');

	tab.appendChild(text);
	tab.appendChild(close);
    referenceNode.parentNode.insertBefore(tab,referenceNode);
}
function removeMenu(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}