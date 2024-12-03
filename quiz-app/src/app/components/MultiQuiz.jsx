"use client"
import React, { useState } from 'react'

function MultiQuiz() {

    const quizes = [
        {
            name: 'Geography',
            questions: [
                {
                    question: 'What is the capital of England?',
                    answers: [
                        { text: "London", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
                {
                    question: 'What is the capital of France?',
                    answers: [
                        { text: "Paris", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
                {
                    question: 'What is the capital of Germany?',
                    answers: [
                        { text: "Berlin", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
            ]
        },
        {
            name: 'Math',
            questions: [
                {
                    question: 'What is 9 + 10?',
                    answers: [
                        { text: "19", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
                {
                    question: '45 / 9?',
                    answers: [
                        { text: "5", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
                {
                    question: '96 inches is how many feet?',
                    answers: [
                        { text: "8 ft", correct: true },
                        { text: "Option 2", correct: false },
                        { text: "Option 3", correct: false },
                    ]
                },
            ]
        },
    ];

    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [start, setStart] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    
    
    
    return (
        <div>
            test
        </div>
    )
}

export default MultiQuiz
