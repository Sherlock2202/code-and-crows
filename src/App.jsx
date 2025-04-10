// src/App.jsx

import React, { useState } from "react";
<button>Click Me</button>
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    question: "What does CPU stand for?",
    answers: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit"],
    correct: 0,
    xp: 10,
  },
  {
    question: "What is 8-bit binary for the number 13?",
    answers: ["00001101", "00001110", "00001001"],
    correct: 0,
    xp: 20,
  },
  {
    question: "What is the purpose of the ALU in the CPU?",
    answers: ["Store memory", "Carry out calculations", "Control input/output"],
    correct: 1,
    xp: 15,
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Markup Language", "Hyper Text Markup Language", "High Text Machine Language"],
    correct: 1,
    xp: 5,
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXP] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (i) => {
    if (selected !== null) return;

    setSelected(i);

    if (i === questions[index].correct) {
      setScore(score + 1);
      setXP(xp + questions[index].xp);
    }

    setTimeout(() => {
      const next = index + 1;
      if (next < questions.length) {
        setIndex(next);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🕵️ Code & Crows: GCSE Hack Game</h1>
      <Progress value={(index / questions.length) * 100} className="mb-4" />
      <div className="text-sm mb-2">XP: {xp} | Questions: {index}/{questions.length}</div>

      {completed ? (
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Mission Complete</h2>
            <p>You got {score} out of {questions.length} correct.</p>
            <p>Total XP: {xp} 🪙</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2">{questions[index].question}</h2>
            <div className="space-y-2">
              {questions[index].answers.map((a, i) => (
                <Button
                  key={i}
                  variant={selected === i
                    ? i === questions[index].correct ? "default" : "destructive"
                    : "outline"}
                  onClick={() => handleAnswer(i)}
                  className="w-full"
                >
                  {a}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
