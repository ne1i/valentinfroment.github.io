// Pour menu déroulant

function recette(fruit) {
  if (fruit == "rien") {
    document.getElementById("infoImg").classList.remove("special");
    document.getElementById("infoImg").textContent="";
  }
  else {
    document.getElementById("infoImg").classList.add("special");
    if (fruit == "Banane") {
    document.getElementById("infoImg").textContent="Avec de la banane, vous pouvez faire une banane flambée !";
    }
    if (fruit == "Fraise") {
    document.getElementById("infoImg").textContent="Avec des fraises, vous pouvez faire une tarte aux fraises !";
    }
    if (fruit == "Pomme") {
    document.getElementById("infoImg").textContent="Avec de la pomme, vous pouvez faire de la compote de pommes !";
    }
  }
}