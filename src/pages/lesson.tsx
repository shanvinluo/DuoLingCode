// pages/lesson.tsx
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { leetcodeProblems } from "../utils/leetcodeProblems";
import MultipleChoice from "../components/problems/MultipleChoice";
import CodeFillIn from "../components/problems/CodeFillIn";
import TrueFalse from "../components/problems/TrueFalse";
import Matching from "../components/problems/Matching";
import DragAndDrop from "../components/problems/DragAndDrop";
import { useBoundStore } from "../hooks/useBoundStore";

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

type Problem = (typeof leetcodeProblems)[number];

const Lesson: NextPage = () => {
  const router = useRouter();
  const startTime = useRef(Date.now());

  const increaseLessonsCompleted = useBoundStore((x) => x.increaseLessonsCompleted);
  const increaseXp = useBoundStore((x) => x.increaseXp);
  const addToday = useBoundStore((x) => x.addToday);
  const streak = useBoundStore((x) => x.streak);

  const [problems, setProblems] = useState<Problem[]>([]);
  const [problemIndex, setProblemIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const shuffled = shuffle([...leetcodeProblems]);
    const selected = shuffled.slice(0, 3);
    setProblems(selected);
  }, []);

    useEffect(() => {
    if (showResults) {
      increaseLessonsCompleted(1);
      increaseXp(correctCount*10);
      addToday();
    }
  }, [showResults, correctCount, increaseLessonsCompleted, increaseXp, addToday]);

  const [attempted, setAttempted] = useState(false);

  const handleNext = (correct: boolean) => {
    setAttempted(true);
  
    if (correct) setCorrectCount((x) => x + 1);
    else setIncorrectCount((x) => x + 1);
  
    if (problemIndex + 1 < problems.length) {
        setAttempted(false);
        setProblemIndex((i) => i + 1);
    } else {
      setShowResults(true);
    }
  };

  const problem = problems[problemIndex];

  if (!problem) return <div className="p-6 text-xl">Loading lesson...</div>;

  if (showResults) {
    const timeTaken = ((Date.now() - startTime.current) / 1000).toFixed(0);
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-green-600">Lesson Complete!</h1>
        <p className="mt-4 text-xl">✅ Correct: {correctCount}</p>
        <p className="text-xl">❌ Incorrect: {incorrectCount}</p>
        <p className="text-xl">⏱ Time Taken: {timeTaken} seconds</p>
        <p className="text-xl text-orange-500">🔥 Streak: {streak} day{streak !== 1 && 's'}</p>
        <button
          className="mt-6 rounded bg-blue-500 px-4 py-2 text-white font-bold"
          onClick={() => router.push("/learn")}
        >
          Back to Learn
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <ProgressBar current={problemIndex} total={problems.length} />
        <div className="mt-10">
          {problem.type === "MultipleChoice" && (
            <MultipleChoice data={problem} onNext={handleNext} attempted={attempted}/>
          )}
          {problem.type === "CodeFillIn" && (
            <CodeFillIn data={problem} onNext={handleNext} attempted={attempted}/>
          )}
          {problem.type === "TrueFalse" && (
            <TrueFalse data={problem} onNext={handleNext} attempted={attempted}/>
          )}
          {problem.type === "Matching" && (
            <Matching data={problem} onNext={handleNext} attempted={attempted}/>
          )}
          {problem.type === "DragAndDrop" && (
            <DragAndDrop data={problem} onNext={handleNext} attempted={attempted}/>
          )}
        </div>
      </div>
    </main>
  );
};

export default Lesson;

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = ((current / total) * 100).toFixed(2);
  return (
    <div className="w-full">
      <div className="h-4 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-1 text-center text-sm text-gray-500">
        {current} / {total} completed
      </p>
    </div>
  );
};
