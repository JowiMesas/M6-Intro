let taula = document.getElementById("taula_propietats");
taula.innerHTML = `
<table>
    <tr>
        <td> a. Valor máxim que pot tenir un número JS </td>
        <td> `+Number.MAX_VALUE +` </td>
    </tr>
    <tr>
        <td> b. Altura total de la pantalla </td>
        <td> `+ screen.height + ` </td>
    </tr>
    <tr>
        <td> c. Altura interna de la finestra </td>
        <td> ` + window.innerHeight +` </td>
    </tr>
    <tr>
        <td> d. URL de la web </td>
        <td> ` + document.URL+` </td>
    </tr>
</table>
`;

let interval;
let tempsRestants = 0;
const alarma = document.getElementById('alarma');
let pausado = false;

function iniciar() {
    const minuts = parseInt(document.getElementById('minutos').value);
    const segons = parseInt(document.getElementById('segundos').value);
    tempsRestants = (minuts * 60) + segons;
    actualitzarTempsRestants();
    
    interval = setInterval(compte_enrere, 1000);
}
function compte_enrere() {
    if (tempsRestants > 0) {
        tempsRestants--;
        actualitzarTempsRestants();
    } else {
        clearInterval(interval);
        alarma.play();
    }
}
function actualitzarTempsRestants() {
    const minuts = Math.floor(tempsRestants / 60);
    const segons = tempsRestants % 60;
     let time = document.getElementById('time');
     time.innerText = minuts + ":"  + segons;
}

function pausar() {
    if(!pausado) {
        clearInterval(interval);
        pausado = true;
    } else {
        interval = setInterval(compte_enrere, 1000);
        pausado = false;
    }

}

function restablecer() {
    clearInterval(interval);
    tempsRestants = 0;
    document.getElementById('time').textContent = '00:00';
    alarma.paused();
    alarma.currentTime = 0;
    pausado = false;s
}
/**
 * Reloj
 */

const reloj = document.getElementById('reloj');
const tiempoAlarmaInput = document.getElementById('tiempoAlarma');
const audioAlarma = document.getElementById('audioAlarma');
 let tiempoAlarma = null;
 let alarmaSonando = false; //Controlamos si suena la alarma  o no
window.setInterval(actualizarReloj, 1000);
 function actualizarReloj() {
    let  actualizado = new Date();
    reloj.textContent = actualizado.getHours() + `:`
     + actualizado.getMinutes() + `:` + actualizado.getSeconds();

     if (tiempoAlarma === actualizado.getHours()+ `:` + actualizado.getMinutes()) {
        audioAlarma.play();
        alarmaSonando = true;
     }
 }
 function setAlarm() {
    tiempoAlarma = tiempoAlarmaInput.value;
    alarmaSonando = false;
 }

 function cambiarMusica() {
    audioAlarma.src = document.getElementById('seleccionarMusica').value;
    audioAlarma.load();
 }
 function playMusica() {
    audioAlarma.play();
 }
 function detenerMusica() {
    audioAlarma.pause();
    audioAlarma.currentTime=0;
    alarmaSonando = false;
 }

