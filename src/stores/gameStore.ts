import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares: string[]) => {
        set((state) => ({
          squares: nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext: boolean) => {
        set((state) => ({
          xIsNext: nextXIsNext,
        }));
      },
    };
  })
);
