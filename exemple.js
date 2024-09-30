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
    let num1 = input_numero.value;
    let num2 = document.getElementById("input_numero2").value;
    if(isNaN(num1)) {
      num1 = 0;
    }
    if (isNaN(num2)) {
      num2 = 0;
    }
    resultat.innerText = parseFloat(num1) + parseFloat(num2);
  }

  let audio = document.getElementById("audio");
  const timer = document.getElementById("timer");
  const timer_span = document.getElementById("timer_span");

  function playAudio() {
    audio.src = "DRUMC0.WAV";
    audio.play();
    setTimeout(function(){
      timer.max = audio.duration;
      timer_span.max = audio.duration;
       let ref_interval = window.setInterval(
        function () {
        timer.value = audio.currentTime;
        timer_span.innerText = audio.currentTime;
        if(audio.currentTime == audio.duration) {
          window.clearInterval(ref_interval);
        }
      }, 1000
    );
    },200);
   
  }
  function playAudio2() {
    audio.src = "FANFARE1.WAV";
    audio.play();
  }
  function clik_btn_stopAudio() {
    audio.pause();
    audio.currentTime=0;
  }
  function clik_btn_mute() {
    audio.muted=true;
  }
  function clik_btn_volUp() {
    try {
      audio.volume +=  0.2;
    } catch (e) {
      audio.volume= 1;
    }
    document.getElementById("vol").value=audio.volume;
  }
  function clik_btn_volDown() {
    try {
      audio.volume -= 0.2;
    } catch (e) {
      audio.volume=0;
    }
    document.getElementById("vol").value=audio.volume;
  }
  function change_inp_vol() {
    audio.volume = document.getElementById("vol").value;
  }
  window.setTimeout(
    function () {
    document.getElementById("timer_span").innerText = audio.duration;
  }, 500
)

  /**
   * Crea un document HTML amb un div amb id “llista_propietats”. Programa amb JS que es creï una
llista amb els següents missatges i amb els valors obtinguts dinàmicament:
a. Valor mínim que pot tenir un número JS
b. Amplada total de la pantalla
c. Amplada interna de la finestra
d. Títol de la web
e. Hora actual
   */
  window.setInterval(mostraLlista, 1000)
  function mostraLlista() {
    let data = new Date();
    let llista =  document.getElementById("llista_propietats");
    llista.innerHTML = `<ol> <li> Valor minim 
    que pot tenir un numero JS: ` +Number.MIN_VALUE + `</li>
    <li> Amplada total de la pantalla `+ screen.width+` </li>
    <li> Amplada interna de la finestra: `+window.innerWidth+` </li>
    <li> Titol de la web: `+document.title+`</li>
    <li> Hora Actual: `+ data.getHours()+` : `+ data.getMinutes() + `:
    / `+data.getSeconds()+ ` segons </li>
    </ol>`;
  }


