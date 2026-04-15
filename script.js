let intervalo = null;
let tempoTotal = 0;

function start(){
    if(intervalo !== null) return;

    console.log("botão start funcionando ao clicar");

    if(tempoTotal === 0) {
        // as linhas abaixo vão pegar os valores que estão presentes no html e võa puxar para o JS
        const horas = parseInt(document.getElementById("horas").value) || 0;
        const minutos = parseInt(document.getElementById("minutos").value) || 0;
        const segundos = parseInt(document.getElementById("segundos").value) || 0;

        tempoTotal = horas * 3600 + minutos * 60 + segundos; // o tempo escolhido transformado em segundos para faciltar no hora de mudar as horas
        console.log(tempoTotal);
    }

     // tá pegando os valores do input certinho ao clicar no INICIAR
    //  agora tenho que converter esses valores em horas, minutos e segundos respectivamente, para segundos


    const display = document.getElementById("display");

    intervalo = setInterval(() => {
        if(tempoTotal <= 0){
            clearInterval(intervalo);
            intervalo = null; // para corrigir o reset piscando
            display.textContent = "00:00:00";
            return;
        }
        
        tempoTotal--; // aqui vai pegar o valor total e diminuir um para ser por vez

        const h = Math.floor(tempoTotal / 3600); // o tempoTotal(em segundos) transformado para horas
        // Math.floor faz o arredondamento dos valores para baixo
        const m = Math.floor((tempoTotal % 3600) / 60); // tempoTotal(em segundos) transformado em minutos
        // o tempoTotal % 3600, serve para remover as horas e sobrar só oq não completou uma hora, os minutos
        const s = tempoTotal % 60; // tempoTotal(em segundos) transformado em segundos


        display.innerText =
            String(h).padStart(2, "0") + ":" + 
            String(m).padStart(2, "0") + ":" + 
            String(s).padStart(2, "0");

    }, 1000);// 1000 milissegundos = 1 segundo
}

function stop(){
    clearInterval(intervalo);
    intervalo = null;
    console.log("botão stop funcionando ao clicar")
    console.log(tempoTotal);
}

function reset(){
    clearInterval(intervalo);
    intervalo = null;
    console.log("botão reset funcionando ao clicar")

    tempoTotal = 0;

    document.getElementById("display").innerText = "00:00:00";

    document.getElementById("horas").value = 0;
    document.getElementById("minutos").value = 0;
    document.getElementById("segundos").value = 0;
}