import React, { useState } from 'react';

type MatchingProps = {
  data: {
    question: string;
    pairs: Record<string, string>;
  };
  onNext: (isCorrect: boolean) => void;
};

export default function Matching({ data, onNext }: MatchingProps) {
  const leftItems = Object.keys(data.pairs);
  const rightItems = Object.values(data.pairs).sort(() => Math.random() - 0.5);

  const [matches, setMatches] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const checkCorrect = () => {
    return leftItems.every((left) => matches[left] === data.pairs[left]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    onNext(checkCorrect());
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{data.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {leftItems.map((left) => (
          <div key={left} className="flex flex-col">
            <span className="font-medium">{left}</span>
            <select
              className="mt-1 p-1 border rounded"
              value={matches[left] || ''}
              onChange={(e) => setMatches({ ...matches, [left]: e.target.value })}
              disabled={submitted}
            >
              <option value="">Select</option>
              {rightItems.map((right) => (
                <option key={right} value={right}>{right}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {!submitted && (
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded" onClick={handleSubmit}>
          Submit
        </button>
      )}

      {submitted && (
        <>
          <p className="mt-2">{checkCorrect() ? '✅ Correct!' : '❌ Incorrect matching.'}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </div>
  );
}