'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PuzzlePiece {
  id: number;
  originalPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  isPlaced: boolean;
  emoji: string;
}

const ANIMALS = ['🦔', '🐿️', '🐰', '🦉'];
const GRID_SIZE = 2; // 2x2 puzzle

export function PuzzleGame() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [draggedPiece, setDraggedPiece] = useState<number | null>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Initialize puzzle pieces
  const initializePuzzle = () => {
    const newPieces: PuzzlePiece[] = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      newPieces.push({
        id: i,
        originalPosition: { x: col * 60, y: row * 60 },
        currentPosition: {
          x: Math.random() * 200 + 50,
          y: Math.random() * 100 + 200
        },
        isPlaced: false,
        emoji: ANIMALS[currentAnimal]
      });
    }
    setPieces(newPieces);
    setIsCompleted(false);
  };

  const startGame = () => {
    setIsGameStarted(true);
    initializePuzzle();
  };

  const resetGame = () => {
    setIsGameStarted(false);
    setIsCompleted(false);
    setPieces([]);
  };

  const nextAnimal = () => {
    const next = (currentAnimal + 1) % ANIMALS.length;
    setCurrentAnimal(next);
    initializePuzzle();
  };

  const handleMouseDown = (pieceId: number) => {
    setDraggedPiece(pieceId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedPiece === null || !gameAreaRef.current) return;

    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 20; // Offset for piece center
    const y = e.clientY - rect.top - 20;

    setPieces(prev => prev.map(piece =>
      piece.id === draggedPiece
        ? { ...piece, currentPosition: { x, y } }
        : piece
    ));
  };

  const handleMouseUp = () => {
    if (draggedPiece === null) return;

    const piece = pieces.find(p => p.id === draggedPiece);
    if (!piece) return;

    // Check if piece is close to its original position
    const distance = Math.sqrt(
      Math.pow(piece.currentPosition.x - piece.originalPosition.x, 2) +
      Math.pow(piece.currentPosition.y - piece.originalPosition.y, 2)
    );

    if (distance < 30) {
      // Snap to correct position
      setPieces(prev => prev.map(p =>
        p.id === draggedPiece
          ? {
              ...p,
              currentPosition: p.originalPosition,
              isPlaced: true
            }
          : p
      ));
    }

    setDraggedPiece(null);
  };

  // Check if puzzle is completed
  useEffect(() => {
    if (pieces.length > 0 && pieces.every(piece => piece.isPlaced)) {
      setIsCompleted(true);
    }
  }, [pieces]);

  if (!isGameStarted) {
    return (
      <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-white/20 rounded-lg p-2">
          <div className="w-6 h-6 bg-white/40 rounded"></div>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-8">Fluffy Friends Puzzle</h2>

        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">{ANIMALS[currentAnimal]}</span>
          </div>
        </div>

        <Button
          onClick={startGame}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-xl px-8 py-4 rounded-full font-bold"
        >
          スタート
        </Button>

        <p className="text-sm text-gray-700 mt-4">
          森の仲間たちの可愛いパズルゲーム by FluffyStudio (´｡• ◡ •｡`) - Ver 2.0
        </p>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-green-200 to-green-300 border-0">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {ANIMALS[currentAnimal]} パズルを完成させよう！
          </h3>
          <p className="text-gray-700">ピースをドラッグして正しい位置に配置してください</p>
        </div>

        <div
          ref={gameAreaRef}
          className="relative w-full h-80 bg-white/50 rounded-lg mx-auto border-2 border-dashed border-gray-400 mb-6"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Target grid */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid grid-cols-2 gap-1 p-4 bg-white/30 rounded-lg">
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                <div
                  key={i}
                  className="w-14 h-14 border-2 border-gray-300 border-dashed rounded-lg flex items-center justify-center bg-white/20"
                >
                  {pieces.find(p => p.id === i && p.isPlaced) && (
                    <span className="text-2xl">{ANIMALS[currentAnimal]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Puzzle pieces */}
          {pieces.filter(piece => !piece.isPlaced).map((piece) => (
            <div
              key={piece.id}
              className="absolute w-10 h-10 bg-white rounded-lg shadow-lg cursor-move flex items-center justify-center text-xl border-2 border-gray-300 hover:shadow-xl transition-shadow"
              style={{
                left: piece.currentPosition.x,
                top: piece.currentPosition.y,
                zIndex: draggedPiece === piece.id ? 10 : 1,
              }}
              onMouseDown={() => handleMouseDown(piece.id)}
            >
              {piece.emoji}
            </div>
          ))}
        </div>

        {isCompleted && (
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🎉</div>
            <p className="text-green-800 font-bold text-lg">おめでとうございます！パズル完成！</p>
          </div>
        )}

        <div className="flex justify-center space-x-4">
          <Button
            onClick={resetGame}
            variant="outline"
            className="border-gray-600 text-gray-700 hover:bg-gray-100"
          >
            やり直し
          </Button>
          <Button
            onClick={nextAnimal}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            次の仲間 ({ANIMALS[(currentAnimal + 1) % ANIMALS.length]})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
