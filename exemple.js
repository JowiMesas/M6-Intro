console.log("Hola");
let div = window.document.getElementById("div_text");
div.innerHTML = "Hola HTML";
div.innerText+= "Hola <h1> HTML </h1>";
 // alert("Popupfeo alert");
 //Prueba
 let input_numero = document.getElementById("input_numero");
let numero = input_numero.value
  let resultat = document.getElementById("resultat");
  resultat.innerText = numero;

  function sumaValors() {
    resultat.innerText = input_numero.value;
  }