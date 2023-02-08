// Pour bouton radio

function mymessage() {
  var monTexte = "";
  if (document.getElementById("alice").checked){
    monTexte = "Bienvenue au Pays des Merveilles";
  }
  if (document.getElementById("bob").checked){
    monTexte = "Passe moi l'éponge !";
  }
  if (document.getElementById("charlie").checked){
    monTexte = "Bienvenue à la chocolaterie";
  }
  document.getElementById("messageBienvenue").textContent = monTexte;
}