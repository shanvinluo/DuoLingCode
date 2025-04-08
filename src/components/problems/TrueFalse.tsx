import React, { useState } from 'react';

type TrueFalseProps = {
  data: {
    statement: string;
    answer: boolean;
  };
  onNext: (isCorrect: boolean) => void;
};

export default function TrueFalse({ data, onNext }: TrueFalseProps) {
  const [selected, setSelected] = useState<null | boolean>(null);
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
      <h2 className="text-lg font-semibold mb-4">{data.statement}</h2>
      <div className="space-x-4">
        <button
          onClick={() => setSelected(true)}
          className={`px-4 py-2 rounded ${selected === true ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          disabled={submitted}
        >
          True
        </button>
        <button
          onClick={() => setSelected(false)}
          className={`px-4 py-2 rounded ${selected === false ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          disabled={submitted}
        >
          False
        </button>
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Submit
        </button>
      )}

      {submitted && (
        <>
          <p className="mt-2">
            {isCorrect ? '✅ Correct!' : `❌ Incorrect. Answer: ${data.answer ? 'True' : 'False'}`}
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </div>
  );
}