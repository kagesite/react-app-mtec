"use client"
import React, { useState } from 'react'

function TestQuiz() {

    const questions = [
        {
            question: "Question 1",
            answers: [
                { text: 'Option 1', correct: true },
                { text: 'Option 2', correct: false },
                { text: 'Option 3', correct: false },
            ]
        },
        {
            question: "Question 2",
            answers: [
                { text: 'Option 4', correct: false },
                { text: 'Option 5', correct: true },
                { text: 'Option 6', correct: false },
            ]
        },
        {
            question: "Question 3",
            answers: [
                { text: 'Option 7', correct: false },
                { text: 'Option 8', correct: false },
                { text: 'Option 9', correct: true },
            ]
        },
    ];


    const [start, setStart] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);


    function handleStart() {
        setStart(true);
    }

    function handleGoHome() {
        setStart(false);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
    }

    function handleTryAgain() {
        setStart(true);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
    }

    function handleAnswerClick(correct) {
        if (correct) {
            setScore((prev) => prev + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    }

    return (
        <div>
            {
                start ? (

                    showResult ? (
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <h1 className='text-3xl text-blue-600 font-bold'>Quiz Complete!</h1>
                            <p className='text-2xl font-normal'>Score:
                                <span className='text-2xl font-semibold'> {score} of {questions.length}</span>
                            </p>
                            <div className='flex gap-4'>
                                <button
                                    className='border-2 px-6 py-3 rounded-lg transition-[0.1s] hover:border-blue-600 py-4 rounded-lg active:bg-blue-600 active:text-white active:border-blue-600'
                                    onClick={handleGoHome}
                                >Go Home</button>
                                <button
                                    className='border-2 px-6 py-3 rounded-lg transition-[0.1s] hover:border-blue-600 py-4 rounded-lg active:bg-blue-600 active:text-white active:border-blue-600'
                                    onClick={handleTryAgain}
                                >Try Again</button>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center items-center border-4 rounded-lg p-8 min-w-[400px]'>
                            <i className='text-gray-400'>{currentIndex + 1} of {questions.length}</i>
                            <h1 className='text-2xl font-semibold mb-4 '>{questions[currentIndex].question}</h1>
                            <hr className='border-2 w-full mb-8' />
                            <ul className='flex flex-col gap-4 w-2/3'>
                                {questions[currentIndex].answers.map((answer, i) => {
                                    return (
                                        <button
                                            className='text-lg border-2 transition-[0.1s] hover:border-blue-600 py-4 rounded-lg active:bg-blue-600 active:text-white active:border-blue-600'
                                            onClick={() => handleAnswerClick(answer.correct)}
                                            key={i}>{answer.text}</button>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                ) : (
                    <button
                        className='text-3xl text-blue-600 font-bold'
                        onClick={handleStart}>Start Quiz</button>
                )
            }
        </div >
    )
}

export default TestQuiz
