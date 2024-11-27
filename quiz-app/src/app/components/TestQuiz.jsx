"use client"
import React, { useState } from 'react'

function TestQuiz() {

    const questions = [
        {
            question: "Question 1",
            answers: [
                { text: 'Option 1', correct: true},
                { text: 'Option 2', correct: false},
                { text: 'Option 3', correct: false},
            ]
        },
        {
            question: "Question 2",
            answers: [
                { text: 'Option 4', correct: false},
                { text: 'Option 5', correct: true},
                { text: 'Option 6', correct: false},
            ]
        },
        {
            question: "Question 3",
            answers: [
                { text: 'Option 7', correct: false},
                { text: 'Option 8', correct: false},
                { text: 'Option 9', correct: true},
            ]
        },
    ];


    const [start, setStart] = useState(false);
    const [currnetIndex, setCurrnetIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    
    function handleStart() {
        setStart(true);
    }

    function handleAnswerClick(correct) {
        if (correct) {
            setScore((prev) => prev + 1);
        } 

        if (currnetIndex < questions.length - 1) {
            setCurrnetIndex((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    }

  return (
    <div>
        {
            start ? (
                <div className='flex flex-col justify-center items-center border-4 rounded-lg p-8 gap-4 min-w-[400px]'>
                    <h1 className='text-2xl font-semibold'>{questions[currnetIndex].question}</h1>
                    <hr className='border-2 w-full border-blue-600 mb-4'/>
                    <ul className='flex flex-col gap-4 w-2/3'>
                        {questions[currnetIndex].answers.map((answer, i) => {
                            return (
                                <button 
                                    className='text-lg border-4 transition-[0.1s] hover:border-blue-600 py-4 rounded-lg active:bg-blue-600 active:text-white active:border-blue-600'
                                    onClick={() => handleAnswerClick(answer.correct)}
                                    key={i}>{answer.text}</button>
                            )
                        })}
                    </ul>
                </div>
            ) : (
                <button 
                    className='text-3xl text-blue-600 font-bold'
                    onClick={handleStart}>Start Quiz</button>
            )
        }
    </div>
  )
}

export default TestQuiz
