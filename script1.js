function carregar(){
	perfil();
	ITL();
};

function perfil(){
	
	var nickname = "Indio Ana Jones";
	var job = "ladrao";
	var moral = "normal";
	var respeito = 10;
	var estamina = 100;
	var vicio = 0;
	var inte = 10;
	var forca = 10;
	var carisma = 10;
	var resis = 10;
	var grana = 0;
	var roubos = 0;
	var mission = 0;
	var arma = false;
	var colete = false;
	
	document.getElementById("perfil").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/perfil.jpg?alt=media&token=0138e2e7-8f1f-4b40-b990-1370d47ff530";
	document.getElementById("perfil").style.width = "30px";
	document.getElementById("nome").innerHTML = nickname;
	document.getElementById("job").innerHTML = "Emprego: "+ job;
	document.getElementById("moral").innerHTML = "Moral: " + moral;
	document.getElementById("respeito").innerHTML = "Respeto: " + respeito;
	document.getElementById("estamina").innerHTML = "Estamina: " + estamina;
	document.getElementById("vicio").innerHTML = "Vicio: " + vicio; 
	document.getElementById("inte").innerHTML = "Inteligência" + "<br>" + inte;
	document.getElementById("forca").innerHTML = "Força" + "<br>" + forca;
	document.getElementById("carisma").innerHTML = "Carisma" + "<br>" + carisma;
	document.getElementById("resis").innerHTML = "Resistência" + "<br>" + resis;
	document.getElementById("grana").innerHTML = "Grana" + "<br>" + grana;
	document.getElementById("roubos").innerHTML = "Quantidade de roubos" + "<br>" + roubos;
	document.getElementById("mission").innerHTML = "Quantidade de mission" + "<br>" + mission;
};

function ITL(){
	//todos os iconis
	//lado esquerdo
	
	//iconi 1
	document.getElementById("iconi1").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar1").innerHTML = "Tabacaria"
	document.getElementById("legenda1").innerHTML = "Cigarro é bom para se acalmar"
	
	//iconi2
	document.getElementById("iconi2").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar2").innerHTML = "Roubar"
	document.getElementById("legenda2").innerHTML = "Assalte, só não vai meter o loco!"
	
	//iconi3
	document.getElementById("iconi3").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar3").innerHTML = "Gandaia"
	document.getElementById("legenda3").innerHTML = "Farreie até o amanhecer, carinha"
	
	//iconi4
	document.getElementById("iconi4").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar4").innerHTML = "Bordel"
	document.getElementById("legenda4").innerHTML = "Com dinheiro é melhor ainda"
	
	//iconi5
	document.getElementById("iconi5").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar5").innerHTML = "Mercado Negro"
	document.getElementById("legenda5").innerHTML = "Acessórios, armas e segurança"
	
	//iconi6
	document.getElementById("iconi6").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar6").innerHTML = "Drogas Ilícitas"
	document.getElementById("legenda6").innerHTML = "Cheire, injete, fume tudo do bom carinha"
	
	//iconi7
	document.getElementById("iconi7").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar7").innerHTML = "Ações"
	document.getElementById("legenda7").innerHTML = "Fique rico investindo"
	
	//iconi8
	document.getElementById("iconi8").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar8").innerHTML = "Fábricas"
	document.getElementById("legenda8").innerHTML = "Sabe cozinhar ou tu é farmaceutico?"
	
	//iconi9
	document.getElementById("iconi9").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar9").innerHTML = "Hospital"
	document.getElementById("legenda9").innerHTML = "Vai se tratar, seu doente!"
	
	//iconi10
	document.getElementById("iconi10").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar10").innerHTML = "Banco"
	document.getElementById("legenda10").innerHTML = "O lugar mais seguro do mundo"
	
	//iconi11
	document.getElementById("iconi11").src = "https://firebasestorage.googleapis.com/v0/b/cvpatrick-f33b6.appspot.com/o/iconipadrao.png?alt=media&token=140c3da6-255f-40fc-8a43-09ea09f3b846";
	document.getElementById("lugar11").innerHTML = "Prisão"
	document.getElementById("legenda11").innerHTML = "Cadeia, o sol nasce quadrado, otário!"
}


function clickroubar(){
	document.getElementById("clickroubar").click(
		window.open("file:///C:/Users/EU/Desktop/htmlsite/vidadecrime/local/roubar.html")
	);
};