import { WINNER_COMBOS } from "../constants"

export { checkWinnerFrom, checkEndGame }

const checkWinnerFrom = (boardToCheck) => {
   /* 
   * Se revisan todas las combinaciones ganadoras 
   * por si hay  alguna que cumpla. Si no lo hace, se devuelve null 
   */
   for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
         boardToCheck[a] &&
         boardToCheck[a] === boardToCheck[b] &&
         boardToCheck[a] === boardToCheck[c]
      ) {
         return boardToCheck[a]
      }
   }
   /* En caso de que no exista un ganador */
   return null
}

const checkEndGame = (newBoard) => {
   return newBoard.every(square => square != null)
}