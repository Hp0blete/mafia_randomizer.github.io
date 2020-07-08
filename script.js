var playerShow = "Players: ";
var mafiaNumber;
var gamePlayers = new Array(0);
var gamePlayersOriginal = new Array(0);
var joker = new Array (0);
var cupido = new Array (0);
var papa = new Array (0);
var medico = new Array (0);
var detective = new Array (0);
var espia = new Array (0);
var mafia = new Array (0);
var pos= document.getElementById("div1");
var totalNumber;

function reset(){location.reload();};

function paragraphEditor(){
  playerShow = "Players: "
  for(i=0 ; i<gamePlayers.length ; i++){

    if(i != gamePlayers.length-1){
    playerShow= playerShow + gamePlayers[i] + ", ";
    }else{playerShow = gamePlayers.length + " " + playerShow + gamePlayers[i];};
 };
 document.getElementById("playerList").innerHTML=playerShow;


};


function addPlayer(){
  gamePlayers.push(document.getElementById("player").value);
  paragraphEditor();
};


function removePlayer(){
gamePlayers.pop();
paragraphEditor();
};


function checkNumbers(){
document.getElementById("failed").innerHTML= "";
  mafiaNumber = Math.ceil(Math.sqrt(gamePlayers.length));
  totalNumber=mafiaNumber;

 if(document.getElementById("jokerIG").checked === true){totalNumber++};
 if(document.getElementById("cupidIG").checked === true){totalNumber++};
 if(document.getElementById("papaIG").checked === true){totalNumber++};
 if(document.getElementById("medicoIG").checked === true){totalNumber++};
 if(document.getElementById("detectiveIG").checked === true){totalNumber++};
 if(document.getElementById("spyIG").checked === true){totalNumber++};
};


function a(array, role){
  var n = Math.floor(Math.random()*array.length);
  for(i=-1; i<n ; i++){
    array.push(array.shift());   
  };
  role.push(array.pop());
  
};

function writeTheRoles(){
 pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Mafia: " + mafia))); 
 pos.appendChild(document.createElement("br"));

 if(document.getElementById("jokerIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Joker: " + joker))); 
   pos.appendChild(document.createElement("br"));
 };

 if(document.getElementById("cupidIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Cupido: " + cupido))); 
   pos.appendChild(document.createElement("br"));
 };
 if(document.getElementById("papaIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Papa: " + papa))); 
   pos.appendChild(document.createElement("br"));
 };
 if(document.getElementById("medicoIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Medico: " + medico))); 
   pos.appendChild(document.createElement("br"));
 };
 if(document.getElementById("detectiveIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Detective: " + detective))); 
   pos.appendChild(document.createElement("br"));
 };
 if(document.getElementById("spyIG").checked === true){
   pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Espia: " + espia))); 
   pos.appendChild(document.createElement("br"));
 };
 pos.appendChild(document.createElement("p").appendChild(document.createTextNode("Pueblo: " + gamePlayers))); 
 pos.appendChild(document.createElement("br"));

};


function randomizeRoles(){
 gamePlayersOriginal = gamePlayers
 checkNumbers();
 if(totalNumber > gamePlayers.length){
  document.getElementById("failed").innerHTML= "Jugadores insuficientes";
 }else{
   
   for(b=0; b< Math.ceil(Math.sqrt(gamePlayers.length)); b++){
     a(gamePlayers, mafia)    
   };

   if(document.getElementById("jokerIG").checked === true){a(gamePlayers, joker)};
   if(document.getElementById("cupidIG").checked === true){a(gamePlayers, cupido)};
   if(document.getElementById("papaIG").checked === true){a(gamePlayers, papa)};
   if(document.getElementById("medicoIG").checked === true){a(gamePlayers, medico)};
   if(document.getElementById("detectiveIG").checked === true){a(gamePlayers, detective)};
   if(document.getElementById("spyIG").checked === true){a(gamePlayers, espia)};
   writeTheRoles();
  };
};


var input = document.getElementById("player");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonAddPlayer").click();
  }
});