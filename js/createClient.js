var numSite;
numSite=0;

var numServer;
numServer=0;

var numRouter;
numRouter=0;

function addSite() {
	numSite=increment(numSite);
		
	var divSiteName = document.createElement("div");
	divSiteName.setAttribute('class','ui transparent mini input');
	var siteName = document.createElement("input");
	siteName.setAttribute('type','text');
	siteName.setAttribute('id','ServerName' + numSite);
	siteName.setAttribute('placeholder','Nom');
	siteName.setAttribute('style','width:80px');
	
	var divSiteAdress = document.createElement("div");
	divSiteAdress.setAttribute('class','ui transparent mini input');
	var siteAdress = document.createElement("input");
	siteAdress.setAttribute('type','text');
	siteAdress.setAttribute('id','ServerName' + numSite);
	siteAdress.setAttribute('placeholder','Adresse');
	siteAdress.setAttribute('style','width:80px');
	
	var divSiteTel = document.createElement("div");
	divSiteTel.setAttribute('class','ui transparent mini input');
	var siteTel = document.createElement("input");
	siteTel.setAttribute('type','text');
	siteTel.setAttribute('id','ServerName' + numSite);
	siteTel.setAttribute('placeholder','Telephonne');
	siteTel.setAttribute('style','width:80px');
	
	divSiteName.appendChild(siteName);
	divSiteAdress.appendChild(siteAdress);
	divSiteTel.appendChild(siteTel);
	
var table = document.getElementById("tableSites");
	
	var row = table.insertRow(numSite);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	
	cell1.appendChild(divSiteName);
	cell2.appendChild(divSiteAdress);
	cell3.appendChild(divSiteTel);

	
	
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
	
	var divRouterIP = document.createElement("div");
	divRouterIP.setAttribute('class','ui transparent mini input');
	var routerIP = document.createElement("input");
	routerIP.setAttribute('type','text');
	routerIP.setAttribute('id','routerIP' + numRouter);
	routerIP.setAttribute('placeholder','IP');
	
	var divRouterDateAchat = document.createElement("div");
	divRouterDateAchat.setAttribute('class','ui transparent mini input');
	var routerDateAchat = document.createElement("input");
	routerDateAchat.setAttribute('type','text');
	routerDateAchat.setAttribute('id','routerDateAchat' + numRouter);
	routerDateAchat.setAttribute('placeholder','dateAchat');
	
	var divRouterModele = document.createElement("div");
	divRouterModele.setAttribute('class','ui transparent mini input');
	var routerModele = document.createElement("input");
	routerModele.setAttribute('type','text');
	routerModele.setAttribute('id','routerDateAchat' + numRouter);
	routerModele.setAttribute('placeholder','Modele');
	
	var divRouterDureeGuarantie = document.createElement("div");
	divRouterDureeGuarantie.setAttribute('class','ui transparent mini input');
	var routerDureeGuarantie = document.createElement("input");
	routerDureeGuarantie.setAttribute('type','text');
	routerDureeGuarantie.setAttribute('id','routerDateAchat' + numRouter);
	routerDureeGuarantie.setAttribute('placeholder','Durée de la Garantie');
	
	var divRouterUser = document.createElement("div");
	divRouterUser.setAttribute('class','ui transparent mini input');
	var routerUser = document.createElement("input");
	routerUser.setAttribute('type','text');
	routerUser.setAttribute('id','routerDateAchat' + numRouter);
	routerUser.setAttribute('placeholder','Utilisateur');
	
	var divRouterPassword = document.createElement("div");
	divRouterPassword.setAttribute('class','ui transparent mini input');
	var routerPassword = document.createElement("input");
	routerPassword.setAttribute('type','text');
	routerPassword.setAttribute('id','routerDateAchat' + numRouter);
	routerPassword.setAttribute('placeholder','Password');
	
	var divRouterSite = document.createElement("div");
	divRouterSite.setAttribute('class','field');
	var selectRouterSite = document.createElement("select");
	listSite()
	
	divRouterIP.appendChild(routerIP);
	divRouterDateAchat.appendChild(routerDateAchat);
	divRouterModele.appendChild(routerModele);
	divRouterDureeGuarantie.appendChild(routerDureeGuarantie);
	divRouterUser.appendChild(routerUser);
	divRouterPassword.appendChild(routerPassword);
	divRouterSite.appendChild(selectRouterSite);
	
var table = document.getElementById("tableRouters");
	
	var row = table.insertRow(numRouter);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);

	
	cell1.appendChild(divRouterModele);
	cell2.appendChild(divRouterDateAchat);
	cell3.appendChild(divRouterDureeGuarantie);
	cell4.appendChild(divRouterIP);
	cell5.appendChild(divRouterUser);
	cell6.appendChild(divRouterPassword);
	cell7.appendChild(divRouterSite);
}

function increment(n){
  n=n+1;
  return n;
}
function listSite(){

	var arr = [];
	$("#tableSites tr").not(":first").each(function(){
	    arr.push($(this).find("td:first").find("input").val());
	});
	for (i=0;i<arr.length;i++)
	{
	document.write(arr[i] + "<br >");
	}
	return arr;
	
}
