import React from "react";

const ChessBoard = () => {
  const number = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const letter = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let board = [];

  for (let j = number.length - 1; j >= 0; j--) {
    for (let i = 0; i < letter.length; i++) {
      const line = j + i + 2;

      if (line % 2 === 0) {
        board.push(
          <div className="bg-[#B58863] w-[75px] h-[75px]">
            [{letter[i]} {number[j]}]
          </div>
        );
      } else {
        board.push(
          <div className="bg-[#F0D9B5] w-[75px] h-[75px]">
            [ {letter[i]} {number[j]}]
          </div>
        );
      }
    }
  }

  return <div className=" w-[600px] h-[600px] flex flex-wrap">{board}</div>;
};

export default ChessBoard;
