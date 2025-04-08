import React, { useState } from 'react';

type MultipleChoiceProps = {
  data: {
    question: string;
    choices: string[];
    answer: string;
  };
  onNext: (isCorrect: boolean) => void;
};

export default function MultipleChoice({ data, onNext }: MultipleChoiceProps) {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === data.answer;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    onNext(isCorrect);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{data.question}</h2>
      <ul className="space-y-2">
        {data.choices.map((choice) => (
          <li key={choice}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="mc"
                value={choice}
                checked={selected === choice}
                onChange={() => setSelected(choice)}
                disabled={submitted}
              />
              <span>{choice}</span>
            </label>
          </li>
        ))}
      </ul>

      {!submitted && (
        <button
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded"
          onClick={handleSubmit}
          disabled={!selected}
        >
          Submit
        </button>
      )}

      {submitted && (
        <>
          <p className="mt-2">{isCorrect ? '✅ Correct!' : `❌ Incorrect. Answer: ${data.answer}`}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </div>
  );
}