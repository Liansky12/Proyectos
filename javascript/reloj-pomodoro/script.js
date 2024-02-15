const cuentaAtras = document.querySelector("#cuenta_atras"),
   estado = document.querySelector("#estado");

const segWorkSession = 3, segShortBreak = 2, segLongBreak = 1;

let contadorCiclo = 1;
let totalSeg = segWorkSession;
estado.textContent = "Work Session";

function iniciarCuentaAtras() {
   // Se calculan los minutos restantes
   const minutos = Math.floor(totalSeg / 60);
   // Se calculan los segundos restantes
   const segundos = totalSeg % 60;
   // Actualiza el contador de la página
   cuentaAtras.textContent = `${String(minutos).padStart(2, 0)}:${String(segundos).padStart(2, 0)}`;

   if (totalSeg <= 0) {
      // Actualiza el contador
      contadorCiclo++;

      /**
       * Cambia la duración del temporizador según el ciclo
       * Work Session (1) -> Short Break (2) -> Work Session (3) -> Short Break (4) ->
       * Work Session (5) -> Short Break (6) -> Work Session (7) -> Long Break (8)
       * 
       * Si el contador es impar se asigna el tiempo de estudio; si es par y no es 8
       * se asigna un descanso corto; y si es 8 se asigna un descanso largo y se
       * reincia el contador
       */
      if (contadorCiclo % 2 == 1) {
         estado.textContent = "Work Session";
         totalSeg = segWorkSession; // Se asigna el tiempo de estudio
      } else if (contadorCiclo != 8 && contadorCiclo % 2 == 0) {
         estado.textContent = "Short Break";
         totalSeg = segShortBreak; // Se asiga el tiempo de descanso corto
      } else if (contadorCiclo == 8) {
         estado.textContent = "Long Break";
         totalSeg = segLongBreak; // Se asigna el tiempo de descanso largo
         // Reiniciar el contador al finalizar el ciclo
         contadorCiclo = 0;
      }

      // Vuelve a iniciar el temporizador
      setTimeout(iniciarCuentaAtras, 1000);
   } else {
      // Resta un segundo
      totalSeg--;
      // Se vuelve a llamar a la función con un tiempo de pausa de 1 seg
      setTimeout(iniciarCuentaAtras, 1000);
   }
}

iniciarCuentaAtras();