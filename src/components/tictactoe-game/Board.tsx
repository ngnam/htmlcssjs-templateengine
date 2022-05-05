import React from 'react'
import { OIcon } from './OIcon'
import { XIcon } from './XIcon'

interface PlayerProp {
    winner: string,
    playerX: boolean,
    squares: Array<any>,
    size: number;
    handlePlayer(i: number): void,
    handleRestartGame(): void,
}

interface SquareProp {
    value: JSX.Element | string | null,
    onClick(): void,
}

export const Board = ({ winner, playerX, handlePlayer, handleRestartGame, squares, size }: PlayerProp) => {
    const arrRender = Array.from(Array(Math.pow(size, 2)).keys());

    var rows = [], i = 0, len = Math.pow(size, 2);
    while (i < len) {
        rows.push(i);
        i += size;
    }

    // console.log(rows)

    // Square Button and RenderSquare function
    function Square({ value, onClick }: SquareProp) {
        return (
            <button className="square" onClick={onClick} disabled={winner ? true : false} >
                {value}
            </button>
        )
    }

    function value(i: number) {
        let value;
        if (squares[i] === "X") {
            value = <XIcon />
        } else if (squares[i] === "O") {
            value = <OIcon />
        } else {
            value = null;
        }

        return value;
    }

    const renderSquare = (i: number, index?: number) => {
        return <Square key={index} value={value(i)} onClick={() => handlePlayer(i)} />
    }

    return (
        <div>
            <div className="board">
                <div className=" w-[300px] md:[w-400px] rounded-lg flex items-center justify-center space-x-10">
                    <div>
                        {playerX
                            ?
                            <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium uppercase">
                                <span className="text-[#30c4bd] text-2xl font-bold">
                                    X
                                </span>
                                {" "}
                                Turn
                            </div>

                            :
                            <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium  uppercase">
                                <span className=" text-[#f3b236] text-2xl  font-bold">
                                    O
                                </span>
                                {" "}
                                Turn
                            </div>

                        }

                    </div>
                    <button onClick={handleRestartGame} className="group button px-2 py-1 hover:ring-4 hover:ring-cyan-300 rounded-md bg-[#f3b236] hover:bg-[#30c4bd]" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:rotate-180 transition duration-300 eas-in  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>

                {size && (
                    <>
                        {
                            rows.map((row, idx) => {
                                let sizex = row + size;
                                console.log(sizex)
                                return (
                                    <div className="board-row" key={idx}>
                                        {arrRender.slice(row, sizex).map((item, index) => {
                                            return (
                                                renderSquare(item, index)
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }                        
                    </>
                   
                )}

                {/* <div className="board-row">
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                    {renderSquare(7)}
                </div>

                <div className="board-row">
                    {renderSquare(8)}
                    {renderSquare(9)}
                    {renderSquare(10)}
                    {renderSquare(11)}
                </div>

                <div className="board-row">
                    {renderSquare(12)}
                    {renderSquare(13)}
                    {renderSquare(14)}
                    {renderSquare(15)}
                </div> */}
            </div>
        </div>
    )
}