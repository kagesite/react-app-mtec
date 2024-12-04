"use client"
import React, { useState } from 'react'

function MultiQuiz() {

    // Below is the Array that holds all the quizes and there questions and answers.
    const quizes = [
        {
            name: "Geography Quiz",
            prompt: "Test your knowledge of coninents, countries, and geographical landmarks around the world!",
            specialColor: "sky",
            questions: [
                {
                    question: "What is the largest continent by land area?",
                    answers: [
                        { text: 'Asia', correct: true },
                        { text: 'Africa', correct: false },
                        { text: 'Europe', correct: false },
                    ]
                },
                {
                    question: "Which country has the most time zones?",
                    answers: [
                        { text: 'France', correct: true },
                        { text: 'Russia', correct: false },
                        { text: 'United States', correct: false },
                    ]
                },
                {
                    question: "What is the smallest country in the world by area?",
                    answers: [
                        { text: 'Vatican City', correct: true },
                        { text: 'Monaco', correct: false },
                        { text: 'San Marino', correct: false },
                    ]
                },
                {
                    question: "The Nile River flows throug hwhich of these countries?",
                    answers: [
                        { text: 'Egypt', correct: true },
                        { text: 'South Africa', correct: false },
                        { text: 'Morocco', correct: false },
                    ]
                },
                {
                    question: "What is the southernmost continent?",
                    answers: [
                        { text: 'Antarctica', correct: true },
                        { text: 'South America', correct: false },
                        { text: 'Australia', correct: false },
                    ]
                },
            ]
        },
        {
            name: "Math Quiz",
            prompt: "Challenge your math skills with problems on multiplication, division, and algebraic equations!",
            specialColor: "green",
            questions: [
                {
                    question: "What is 12 x 7?",
                    answers: [
                        { text: '84', correct: true },
                        { text: '82', correct: false },
                        { text: '86', correct: false },
                    ]
                },
                {
                    question: "Solve 45 / 9 + 3",
                    answers: [
                        { text: '8', correct: true },
                        { text: '10', correct: false },
                        { text: '16', correct: false },
                    ]
                },
                {
                    question: "What is the square root of 81?",
                    answers: [
                        { text: '9', correct: true },
                        { text: '8', correct: false },
                        { text: '11', correct: false },
                    ]
                },
                {
                    question: "If x = 5, what is the value of 3x + 2?",
                    answers: [
                        { text: '17', correct: true },
                        { text: '15', correct: false },
                        { text: '14', correct: false },
                    ]
                },
                {
                    question: "Solve for x: 3x + 7 = 19",
                    answers: [
                        { text: '4', correct: true },
                        { text: '3', correct: false },
                        { text: '5', correct: false },
                    ]
                },
            ]
        },
        {
            name: "Science Quiz",
            prompt: "Explore the wonders of science with questions about planets, chemistry, and biology!",
            specialColor: "purple",
            questions: [
                {
                    question: "What planet is known as the Red Planet?",
                    answers: [
                        { text: 'Mars', correct: true },
                        { text: 'Venus', correct: false },
                        { text: 'Jupiter', correct: false },
                    ]
                },
                {
                    question: "What is the boiling point of water in Celcius?",
                    answers: [
                        { text: '100°C', correct: true },
                        { text: '50°C', correct: false },
                        { text: '212°C', correct: false },
                    ]
                },
                {
                    question: "What gas do plants primarily absorb during photosynthesis?",
                    answers: [
                        { text: 'Carbon Dioxide', correct: true },
                        { text: 'Oxygen', correct: false },
                        { text: 'Nitrogen', correct: false },
                    ]
                },
                {
                    question: "What is the chemical symbol for water?",
                    answers: [
                        { text: 'H2O', correct: true },
                        { text: 'O2', correct: false },
                        { text: 'CO2', correct: false },
                    ]
                },
                {
                    question: "How many legs does a spider have?",
                    answers: [
                        { text: '8', correct: true },
                        { text: '6', correct: false },
                        { text: '10', correct: false },
                    ]
                },
            ]
        },
    ];

    // Here are all my useState hooks.
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [start, setStart] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Create function to shuffle an array.
    // I am using the Fisher-Yates shuffle algorithm.
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
        }
        return shuffled;
    }

    // Create function to shuffle quiz answers to prevent remembering answer positions.
    function shuffleAnswersForQuiz(quizData) {
        return {
            ...quizData,
            questions: quizData.questions.map((question) => ({
                ...question,
                answers: shuffleArray(question.answers),
            }))
        }
    }

    // Start Quiz function
    function handleStart() {
        if (selectedQuiz !== null) {
            const selectedQuizData = shuffleAnswersForQuiz(quizes[selectedQuiz]);
            setQuiz(selectedQuizData);
            setStart(true);
        }
    }

    // Go Home function
    function handleGoHome() {
        setSelectedQuiz(null);
        setStart(false);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
    }

    // Try Again function (this does reshuffle the answers in the quiz).
    function handleTryAgain() {
        if (quiz) {
            const reshuffledQuiz = shuffleAnswersForQuiz(quiz);
            setQuiz(reshuffledQuiz);
            setCurrentIndex(0);
            setScore(0);
            setShowResult(false);
        }
    }

    // Answer Click function. If the answer is correct, the score increases.
    function handleAnswerClick(correct) {
        if (correct) {
            setScore((prev) => prev + 1);
        }

        if (currentIndex + 1 < quiz.questions.length) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    }


    return (
        <div>
            {
                start
                    ? (
                        showResult
                            ? (
                                <div>
                                    <h1>Quiz Completed!</h1>
                                    <p>Score: <span>{score} / {quiz.questions.length}</span></p>
                                    <div>
                                        <button onClick={handleTryAgain}>Try Again</button>
                                        <button onClick={handleGoHome}>Go Home</button>
                                    </div>
                                </div>
                            )
                            : (
                                <div>
                                    <h1>{quiz.name}</h1>
                                    <div>
                                        <i>{currentIndex + 1} of {quiz.questions.length}</i>
                                        <p>{quiz.questions[currentIndex].question}</p>
                                        <hr />
                                        <ul>
                                            {quiz.questions[currentIndex].answers.map((answer, i) => {
                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleAnswerClick(answer.correct)}
                                                    >
                                                        {answer.text}
                                                    </button>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )

                    )
                    : (
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl mb-8'>Select a Quiz</h1>
                            <div className='flex flex-wrap gap-12 justify-center mb-12'>
                                {
                                    quizes.map((quiz, i) => {
                                        return (
                                            <button
                                                key={i}
                                                className='border-2 rounded-xl max-w-[30%] min-w-[400px] py-6 px-2 text-center flex flex-col justify-center items-center gap-4'
                                                onClick={() => setSelectedQuiz(i)}
                                            >
                                                <h1 className='text-lg font-bold'>{quiz.name}</h1>
                                                <hr className='border-500 border w-[60%]' />
                                                <i className='text-sm w-[80%]'>{quiz.prompt}</i>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <button
                                className='border-2 w-fit px-6 py-3 rounded-xl'
                                onClick={handleStart}
                            >
                                Start Quiz
                            </button>
                        </div >
                    )
            }
        </div >
    )
}

export default MultiQuiz
