// CodeAndCrowsGame.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    tier: "Novice",
    xp: 10,
    question: "What is an algorithm?",
    answer: "A step-by-step set of instructions to solve a problem."
  },
  {
    tier: "Novice",
    xp: 10,
    question: "What does CPU stand for?",
    answer: "Central Processing Unit"
  },
  {
    tier: "Apprentice",
    xp: 20,
    question: "Name the three main components of the CPU.",
    answer: "Control Unit, ALU, and Registers"
  },
  {
    tier: "Expert",
    xp: 30,
    question: "Describe how data is stored in binary.",
    answer: "Using 0s and 1s to represent numbers using place values of powers of 2."
  }
];

export default function CodeAndCrowsGame() {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [completed, setCompleted] = useState(false);
  const totalXp = questions.reduce((acc, q) => acc + q.xp, 0);

  function checkAnswer() {
    const correct = input.trim().toLowerCase() === questions[current].answer.trim().toLowerCase();
    if (correct) setXp(xp + questions[current].xp);
    setScore(score + (correct ? 1 : 0));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setInput("");
    } else {
      setCompleted(true);
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🦉 Code & Crows</h1>
        <div>
          <p className="text-sm">XP: {xp} / {totalXp}</p>
          <Progress value={(xp / totalXp) * 100} className="w-32 h-2 bg-gray-200" />
        </div>
      </div>

      {!completed ? (
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">{questions[current].tier} Tier</h2>
            <p className="text-lg">{questions[current].question}</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type your answer here"
            />
            <Button onClick={checkAnswer}>Submit</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🎉 Mission Complete</h2>
          <p>You got {score} out of {questions.length} correct.</p>
          <p>Total XP earned: {xp}</p>
          <Button onClick={() => {
            setCurrent(0);
            setInput("");
            setScore(0);
            setXp(0);
            setCompleted(false);
          }}>Play Again</Button>
        </div>
      )}
    </div>
  );
}
