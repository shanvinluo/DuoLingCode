import React, { useState } from 'react';

type CodeFillInProps = {
  data: {
    question: string;
    code: string;
    blanks: string[];
    choices: string[];
  };
  onNext: (isCorrect: boolean) => void;
};

export default function CodeFillIn({ data, onNext }: CodeFillInProps) {
  const [answers, setAnswers] = useState<string[]>(Array(data.blanks.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const checkCorrect = () => {
    return answers.every((answer, i) => answer === data.blanks[i]);
  };

  const handleSubmit = () => {
    const correct = checkCorrect();
    setIsCorrect(correct);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (isCorrect !== null) {
      onNext(isCorrect);
    }
  };

  const renderedCode = data.code.split('___').map((chunk, index) => (
    <span key={index}>
      {chunk}
      {index < data.blanks.length && (
        <select
          className="mx-1 p-1 border rounded"
          value={answers[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          disabled={submitted}
        >
          <option value="">---</option>
          {data.choices.map((choice, i) => (
            <option key={i} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      )}
    </span>
  ));

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{data.question}</h2>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{renderedCode}</pre>

      {!submitted && (
        <button
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}

      {submitted && (
        <>
          <p className="mt-2">
            {isCorrect ? '✅ Correct!' : '❌ Incorrect answer.'}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}