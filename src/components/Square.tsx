"use client";

interface SquareProps {
  value?: string;
  onSquareClick?: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
