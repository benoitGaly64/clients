$(document).ready(function(){
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active').tab();
        $(this).addClass('active').tab();
    });   
	$('.ui.accordion').accordion();

});

var numSite;
numSite=0;

var numServer;
numServer=0;

var numRouter;
numRouter=0;

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

$(function(){
	$("#btnCreateUser").click(function(){
		$(".popupCreateUser").modal('show');
	});

});

function addSite() {
	numSite=increment(numSite);
	var site = document.createElement("div");
	site.setAttribute('id','site' + numSite);
	
	var label = document.createElement("label");
	label.textContent = 'site ' + numSite
	
	var input = document.createElement("input");
	input.setAttribute('type','text');
	input.setAttribute('id','inputSite' + numSite);
	
	site.appendChild(label);
	site.appendChild(input);
	
	var referenceNode = document.querySelector('#btnCreateSite');
    referenceNode.parentNode.insertBefore(site,referenceNode);
}

function addServer() {
	numServer=increment(numServer);
	
	var divServerName = document.createElement("div");
	divServerName.setAttribute('class','ui transparent mini input');
	var serverName = document.createElement("input");
	serverName.setAttribute('type','text');
	serverName.setAttribute('id','ServerName' + numServer);
	serverName.setAttribute('placeholder','Nom');
	serverName.setAttribute('style','width:80px');
	
	var divServerRole = document.createElement("div");
	divServerRole.setAttribute('class','ui transparent mini input');
	var serverRole = document.createElement("input");
	serverRole.setAttribute('type','text');
	serverRole.setAttribute('id','serverRole' + numServer);
	serverRole.setAttribute('placeholder','Role');
	serverRole.setAttribute('style','width:50px');
		
	var divServerUser = document.createElement("div");
	divServerUser.setAttribute('class','ui transparent mini input');
	var serverUser = document.createElement("input");
	serverUser.setAttribute('type','text');
	serverUser.setAttribute('id','serverUser' + numServer);
	serverUser.setAttribute('placeholder','Utilisateur');
	serverUser.setAttribute('style','width:90px');
		
	var divServerPassword = document.createElement("div");
	divServerPassword.setAttribute('class','ui transparent mini input');
	var serverPassword = document.createElement("input");
	serverPassword.setAttribute('type','text');
	serverPassword.setAttribute('id','serverPassword' + numServer);
	serverPassword.setAttribute('placeholder','Password');
	serverPassword.setAttribute('style','width:90px');
	
	var divServerDomain = document.createElement("div");
	divServerDomain.setAttribute('class','ui transparent mini input');
	var serverDomain = document.createElement("input");
	serverDomain.setAttribute('type','text');
	serverDomain.setAttribute('id','serverDomain' + numServer);
	serverDomain.setAttribute('placeholder','Dommaine');
	serverDomain.setAttribute('style','width:70px');
	
	var divServerSystem = document.createElement("div");
	divServerSystem.setAttribute('class','ui transparent mini input');
	var serverSystem = document.createElement("input");
	serverSystem.setAttribute('type','text');
	serverSystem.setAttribute('id','serverSystem' + numServer);
	serverSystem.setAttribute('placeholder','Systeme d\'exploitation');
	serverSystem.setAttribute('style','width:200px');
	
	var divServerIP = document.createElement("div");
	divServerIP.setAttribute('class','ui transparent mini input');
	var serverIP = document.createElement("input");
	serverIP.setAttribute('type','text');
	serverIP.setAttribute('id','serverIP' + numServer);
	serverIP.setAttribute('placeholder','IP');
	serverIP.setAttribute('style','width:100px');
		
	divServerName.appendChild(serverName);
	divServerRole.appendChild(serverRole);
	divServerUser.appendChild(serverUser);
	divServerPassword.appendChild(serverPassword);
	divServerDomain.appendChild(serverDomain);
	divServerSystem.appendChild(serverSystem);
	divServerIP.appendChild(serverIP);
	
	var table = document.getElementById("tableServers");
	
	var row = table.insertRow(numServer);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	
	cell1.appendChild(divServerName);
	cell2.appendChild(divServerRole);
	cell3.appendChild(divServerUser);
	cell4.appendChild(divServerPassword);
	cell5.appendChild(divServerDomain);
	cell6.appendChild(divServerSystem);
	cell7.appendChild(divServerIP);

}

function addRouter() {
	numRouter=increment(numRouter);
	var router = document.createElement("div");
	router.setAttribute('id','router' + numRouter);
	
	var routerIP = document.createElement("input");
	routerIP.setAttribute('type','text');
	routerIP.setAttribute('id','routerIP' + numRouter);
	routerIP.setAttribute('placeholder','IP');
	
	var routerDateAchat = document.createElement("input");
	routerDateAchat.setAttribute('type','text');
	routerDateAchat.setAttribute('id','routerDateAchat' + numRouter);
	routerDateAchat.setAttribute('placeholder','dateAchat');
	
	var routerModele = document.createElement("input");
	routerModele.setAttribute('type','text');
	routerModele.setAttribute('id','routerDateAchat' + numRouter);
	routerModele.setAttribute('placeholder','Modele');
	
	var routerDureeGuarantie = document.createElement("input");
	routerDureeGuarantie.setAttribute('type','text');
	routerDureeGuarantie.setAttribute('id','routerDateAchat' + numRouter);
	routerDureeGuarantie.setAttribute('placeholder','Durée de la Garantie');
	
	var routerUser = document.createElement("input");
	routerUser.setAttribute('type','text');
	routerUser.setAttribute('id','routerDateAchat' + numRouter);
	routerUser.setAttribute('placeholder','Utilisateur');
	
	var routerPassword = document.createElement("input");
	routerPassword.setAttribute('type','text');
	routerPassword.setAttribute('id','routerDateAchat' + numRouter);
	routerPassword.setAttribute('placeholder','Password');
	
	router.appendChild(routerModele);
	router.appendChild(routerIP);
	router.appendChild(routerDateAchat);
	router.appendChild(routerDureeGuarantie);
	router.appendChild(routerUser);
	router.appendChild(routerPassword);

	
	var referenceNode = document.querySelector('#btnCreateRouter');
    referenceNode.parentNode.insertBefore(router,referenceNode);
}

function increment(n){
  n=n+1;
  return n;
}