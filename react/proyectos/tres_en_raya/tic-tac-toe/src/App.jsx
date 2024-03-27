import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx"
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js"


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  /* 
  * Null = no hay ganador
  * false = empate
  */
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    /* 
    * No se actualiza la posición si ya está marcado
    */
    if (board[index] || winner) return
    /* 
    * Se hace una copia para evitar 
    * modificar el original (generaría problemas de renderizado)
    */
    const newBoard = [...board]
    newBoard[index] = turn // 'x' u 'o'
    setBoard(newBoard) // Actualización asíncrona
    // Cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      /* La actualización de los estados en React son asíncronos */
      setWinner(newWinner)
      /* setWinner((prewWinner parámetro opcional ) => {
        console.log(`Ganador: ${newWinner}, el anterior era ${prewWinner}`);
        return newWinner
      }) */
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelect={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelect={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App