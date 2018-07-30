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
	$(".popupCreateUser").modal({
		closable: true
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
	var site = document.createElement("div");
	site.setAttribute('id','server' + numServer);
		
	var serverName = document.createElement("input");
	serverName.setAttribute('type','text');
	serverName.setAttribute('id','ServerName' + numSite);
	serverName.setAttribute('placeholder','Nom');
	
	var serverRole = document.createElement("input");
	serverRole.setAttribute('type','text');
	serverRole.setAttribute('id','serverRole' + numSite);
	serverRole.setAttribute('placeholder','Role');
	
	var serverUser = document.createElement("input");
	serverUser.setAttribute('type','text');
	serverUser.setAttribute('id','serverUser' + numSite);
	serverUser.setAttribute('placeholder','Utilisateur');
	
	var serverPassword = document.createElement("input");
	serverPassword.setAttribute('type','text');
	serverPassword.setAttribute('id','serverPassword' + numSite);
	serverPassword.setAttribute('placeholder','Password');
	
	var serverDomain = document.createElement("input");
	serverDomain.setAttribute('type','text');
	serverDomain.setAttribute('id','serverDomain' + numSite);
	serverDomain.setAttribute('placeholder','Dommaine');
	
	var serverSystem = document.createElement("input");
	serverSystem.setAttribute('type','text');
	serverSystem.setAttribute('id','serverSystem' + numSite);
	serverSystem.setAttribute('placeholder','Systeme d\'exploitation');
	
	var serverIP = document.createElement("input");
	serverIP.setAttribute('type','text');
	serverIP.setAttribute('id','serverIP' + numSite);
	serverIP.setAttribute('placeholder','IP');
	
	site.appendChild(serverName);
	site.appendChild(serverRole);
	site.appendChild(serverUser);
	site.appendChild(serverPassword);
	site.appendChild(serverDomain);
	site.appendChild(serverSystem);
	site.appendChild(serverIP);
	
	var referenceNode = document.querySelector('#btnCreateServer');
    referenceNode.parentNode.insertBefore(site,referenceNode);
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