import React, { useState } from "react";

type DragAndDropProps = {
  data: {
    question: string;
    wordBank: string[];
    correctAnswer: string[];
  };
  onNext: (isCorrect: boolean) => void;
};

export default function DragAndDrop({ data, onNext }: DragAndDropProps) {
  const { question, wordBank = [], correctAnswer } = data;

  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect =
    JSON.stringify(selected) === JSON.stringify(correctAnswer);

  const handleWordClick = (word: string) => {
    if (!selected.includes(word)) {
      setSelected([...selected, word]);
    }
  };

  const handleRemoveWord = (index: number) => {
    const updated = [...selected];
    updated.splice(index, 1);
    setSelected(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    onNext(isCorrect);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">{question}</h2>

      {/* Constructed Answer Area */}
      <div className="flex flex-wrap gap-2 min-h-[60px] p-2 border-b-2 border-t-2 border-gray-200">
        {selected.map((word, index) => (
          <button
            key={index}
            onClick={() => handleRemoveWord(index)}
            className="px-3 py-2 bg-blue-100 border-b-4 border-blue-300 rounded-xl text-gray-800"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Word Bank */}
      <div className="flex flex-wrap gap-2 mt-4">
        {wordBank.map((word, i) => (
          <button
            key={i}
            onClick={() => handleWordClick(word)}
            disabled={selected.includes(word)}
            className={`px-3 py-2 border-2 border-b-4 rounded-xl ${
              selected.includes(word)
                ? "bg-gray-200 text-gray-300 border-gray-300"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Submit / Feedback / Next */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-2 bg-yellow-500 text-black font-bold uppercase rounded-xl"
          disabled={selected.length === 0}
        >
          Submit
        </button>
      ) : (
        <div className="mt-6 space-y-3">
          <p
            className={`font-bold ${
              isCorrect ? "text-green-600" : "text-red-500"
            }`}
          >
            {isCorrect ? "✅ Correct!" : "❌ Try again."}
          </p>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white font-bold uppercase rounded-xl"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}