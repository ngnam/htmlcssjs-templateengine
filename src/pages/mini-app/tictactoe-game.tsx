import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/tictactoe-game/Footer'
import { ChoosePlayer } from '../../components/tictactoe-game/ChoosePlayer'
import { Board } from '../../components/tictactoe-game/Board'
import { WinnerModal } from '../../components/tictactoe-game/WinnerModal'
import { create2DArray } from '../../utils/helper'

const square = 5;

function TicTacToeGame() {
  const [isX, setIsX] = React.useState<boolean>(true)
  const [newGame, setNewGame] = React.useState<boolean>(false)
  const [squares, setSqaures] = React.useState<Array<any>>(Array(Math.pow(square, 2)).fill(null))

  let winner = calculateWinner(squares)

  // handle Choose player
  function handlePlayerX() {
    setIsX(true)
  }

  function handlePlayerO() {
    setIsX(false)
  }

  //// It will Handle which Icon will apppear on Board on cliking  one the Squares
  function handlePlayer(i: number) {

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? "X" : "O"
    setSqaures(squares)
    setIsX(!isX)
  }

  // It will handle the Restart of the Game 
  function handleRestartGame() {
    setIsX(true)
    setSqaures(Array(Math.pow(square, 2)).fill(null))
  }

  // It will handle the start Game when the player choose one of the Icon
  // with which they want to player
  function handleNewGame() {
    // setIsX(true);
    setSqaures(Array(Math.pow(square, 2)).fill(null))
    setNewGame(true)
  };

  function handleQuitGame() {
    setIsX(true)
    setSqaures(Array(Math.pow(square, 2)).fill(null))
    setNewGame(false)
  }

  // Calculate the winner
  function calculateWinner(squares: Array<any>) {
    // Total 8 winning patterens
    const winningPatterns = create2DArray(square, square)

    // 3x3
    // 00 01 02
    // 03 04 05
    // 06 07 08
    // 4x4
    // 00 01 02 03
    // 04 05 06 07
    // 08 09 10 11
    // 12 13 14 15
    // 5x5
    // 00 01 02 03 04
    // 05 06 07 08 09
    // 10 11 12 13 14
    // 15 16 17 18 19
    // 20 21 22 23 24
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c, d] = winningPatterns[i]

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center py-2 bg-[#ffffff]">
      <Head>
        <title>Tic tac toe Game | 5 Web apps template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-[#30c4bd] ">
        Tic
        {" "}
        <span className="text-[#f3b236]">Tac </span>
        {" "}
        Toe {square + 'x' + square}
      </h1>

      {!newGame
        ?
        <ChoosePlayer
          handleNewGame={handleNewGame}
          handlePlayerX={handlePlayerX}
          handlePlayerO={handlePlayerO} />
        :
        <Board
          winner={winner}
          playerX={isX}
          squares={squares}
          size={square}
          handlePlayer={handlePlayer}
          handleRestartGame={handleRestartGame} />}
      {winner &&
        <WinnerModal
          winner={winner}
          handleQuitGame={handleQuitGame}
          handleNewGame={handleNewGame} />}

      <Footer />
    </div>
  )
}

export default TicTacToeGame;
