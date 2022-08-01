function modifica_stile() {
  var titleL1 = document.getElementsByClassName("titoloL1");
  var titleL2 = document.getElementsByClassName("titoloL2");
  var par1 = document.getElementById("par1");
  var par2 = document.getElementById("par2");
  var par3 = document.getElementById("par3");
  var par4 = document.getElementById("par4");
  var par5 = document.getElementById("par5");
  var par6 = document.getElementById("par6");
  var par7 = document.getElementById("par7");
  var par8 = document.getElementById("par8");

  for (var i = 0; i < titleL1.length; i++) {
    titleL1[i].style.color = "red";
  }

  for (var j = 0; j < titleL2.length; j++) {
    titleL2[j].style.color = "blue";
    titleL2[j].style.backgroundColor = "yellow";
    titleL2[j].style.fontSize = "40px";
    titleL2[j].innerHTML = titleL2[j].innerHTML.toUpperCase();
  }

  par1.style.color = "red";
  par2.style.backgroundColor = "lightgreen";
  par3.innerHTML = par3.innerHTML.toUpperCase();
  par3.style.backgroundColor = "lightblue";
  par4.style.color = "red";
  par5.style.backgroundColor = "lightgreen";
  par6.innerHTML = par6.innerHTML.toUpperCase();
  par7.style.fontStyle = "italic";
  par8.style.backgroundColor = "lightgreen";
}
