"use client"
import React, { useState } from 'react'

function MultiQuiz() {

    // Below is the Array that holds all the quizes and there questions and answers.
    const quizes = [
        {
            // GEOGRAPHY QUIZ
            name: "Geography Quiz",
            prompt: "Test your knowledge of continents, countries, and geographical landmarks around the world!",
            questions: [
                { // Geography Question 1
                    question: "What is the largest continent by land area?",
                    answers: [
                        { text: 'Asia', correct: true },
                        { text: 'Africa', correct: false },
                        { text: 'Europe', correct: false },
                    ]
                },
                { // Geography Question 2
                    question: "Which country has the most time zones?",
                    answers: [
                        { text: 'France', correct: true },
                        { text: 'Russia', correct: false },
                        { text: 'United States', correct: false },
                    ]
                },
                { // Geography Question 3
                    question: "What is the smallest country in the world by area?",
                    answers: [
                        { text: 'Vatican City', correct: true },
                        { text: 'Monaco', correct: false },
                        { text: 'San Marino', correct: false },
                    ]
                },
                { // Geography Question 4
                    question: "The Nile River flows throug hwhich of these countries?",
                    answers: [
                        { text: 'Egypt', correct: true },
                        { text: 'South Africa', correct: false },
                        { text: 'Morocco', correct: false },
                    ]
                },
                { // Geography Question 5
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
            // MATH QUIZ
            name: "Math Quiz",
            prompt: "Challenge your math skills with problems on multiplication, division, and algebraic equations!",
            questions: [
                { // Math Question 1
                    question: "What is 12 x 7?",
                    answers: [
                        { text: '84', correct: true },
                        { text: '82', correct: false },
                        { text: '86', correct: false },
                    ]
                },
                { // Math Question 2
                    question: "Solve 45 / 9 + 3",
                    answers: [
                        { text: '8', correct: true },
                        { text: '10', correct: false },
                        { text: '16', correct: false },
                    ]
                },
                { // Math Question 3
                    question: "What is the square root of 81?",
                    answers: [
                        { text: '9', correct: true },
                        { text: '8', correct: false },
                        { text: '11', correct: false },
                    ]
                },
                { // Math Question 4
                    question: "If x = 5, what is the value of 3x + 2?",
                    answers: [
                        { text: '17', correct: true },
                        { text: '15', correct: false },
                        { text: '14', correct: false },
                    ]
                },
                { // Math Question 5
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
            // SCIENCE QUIZ
            name: "Science Quiz",
            prompt: "Explore the wonders of science with questions about planets, chemistry, and biology!",
            questions: [
                { // Science Question 1
                    question: "What planet is known as the Red Planet?",
                    answers: [
                        { text: 'Mars', correct: true },
                        { text: 'Venus', correct: false },
                        { text: 'Jupiter', correct: false },
                    ]
                },
                { // Science Question 2
                    question: "What is the boiling point of water in Celcius?",
                    answers: [
                        { text: '100°C', correct: true },
                        { text: '50°C', correct: false },
                        { text: '212°C', correct: false },
                    ]
                },
                { // Science Question 3
                    question: "What gas do plants primarily absorb during photosynthesis?",
                    answers: [
                        { text: 'Carbon Dioxide', correct: true },
                        { text: 'Oxygen', correct: false },
                        { text: 'Nitrogen', correct: false },
                    ]
                },
                { // Science Question 4
                    question: "What is the chemical symbol for water?",
                    answers: [
                        { text: 'H2O', correct: true },
                        { text: 'O2', correct: false },
                        { text: 'CO2', correct: false },
                    ]
                },
                { // Science Question 5
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
    const [wrongAnswers, setWrongAnswers] = useState([]);

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
        setWrongAnswers([]);
    }

    // Try Again function (this does reshuffle the answers in the quiz).
    function handleTryAgain() {
        if (quiz) {
            const reshuffledQuiz = shuffleAnswersForQuiz(quiz);
            setQuiz(reshuffledQuiz);
            setCurrentIndex(0);
            setScore(0);
            setShowResult(false);
            setWrongAnswers([]);
        }
    }

    // Exit Quiz function (This allows you to exit the quiz without finishing or resfreshing the page.)
    // This function also has a confirm message that asks if you want to exit the quiz.
    function handleExitQuiz() {
        const msg = confirm('Are you sure you want to exit?');

        if (msg) {
            setSelectedQuiz(null);
            setStart(false);
            setCurrentIndex(0);
            setScore(0);
            setShowResult(false);
            setWrongAnswers([]);
        }
    }

    // Answer Click function. If the answer is correct, the score increases.
    function handleAnswerClick(correct) {
        if (!correct) {
            setWrongAnswers((prev) => [
                ...prev,
                quiz.questions[currentIndex]
            ]);
        } else {
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
                    // If Start is true:
                    ? (
                        showResult
                            // If Show result is true:
                            // RESULT PAGE START
                            ? (
                                <div className='flex flex-col justify-center items-center'>

                                    <h1 className={`font-bold text-3xl mb-4
                                        ${selectedQuiz !== null
                                            ? quiz.name === "Geography Quiz"
                                                ? "text-sky-500"
                                                : quiz.name === "Math Quiz"
                                                    ? "text-emerald-500"
                                                    : quiz.name === "Science Quiz"
                                                        ? "text-purple-500"
                                                        : ""
                                            : ""
                                        }
                                    `}>
                                        Quiz Completed!
                                    </h1>
                                    <p className={`text-3xl font-semibold mb-7
                                    
                                        ${selectedQuiz !== null
                                            ? quiz.name === "Geography Quiz"
                                                ? "text-sky-700"
                                                : quiz.name === "Math Quiz"
                                                    ? "text-emerald-700"
                                                    : quiz.name === "Science Quiz"
                                                        ? "text-purple-700"
                                                        : ""
                                            : ""
                                        }
                                        
                                    `}>
                                        Score: <span className=''>{score} / {quiz.questions.length}</span>
                                    </p>


                                    {/*  REVIEW SECTION */}

                                    {wrongAnswers.length > 0
                                        ? (
                                            <div className='w-[80%] mb-6'>
                                                <h2 className="text-2xl font-bold mb-4">
                                                    Review Incorrect Answers:
                                                </h2>
                                                <ul className="list-disc pl-5">
                                                    {wrongAnswers.map((question, i) => (
                                                        <li key={i} className='mb-2'>
                                                            <p className="font-semibold">
                                                                {question.question}
                                                            </p>
                                                            <p className="text-gray-700">
                                                                Correct Answer: {" "}
                                                                <span className="font-bold">
                                                                    {question.answers.find((answer) => answer.correct).text}
                                                                </span>
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                        : (
                                            <div className='w-[80%] mb-6 text-center'>
                                                <h2 className="text-2xl font-bold mb-4">You got 100%!</h2>
                                            </div>
                                        )
                                    }

                                    <div className='flex gap-4'>
                                        <button
                                            className={`border-2 w-fit px-6 py-3 rounded-xl
                                                ${selectedQuiz !== null
                                                    ? quiz.name === "Geography Quiz"
                                                        ? "hover:border-sky-500 active:border-sky-700 active:bg-sky-500 active:text-white"
                                                        : quiz.name === "Math Quiz"
                                                            ? "hover:border-emerald-500 active:border-emerald-700 active:bg-emerald-500 active:text-white"
                                                            : quiz.name === "Science Quiz"
                                                                ? "hover:border-purple-500 active:border-purple-700 active:bg-purple-500 active:text-white"
                                                                : ""
                                                    : ""
                                                }
                                            transition-[0.1s]
                                            `}
                                            onClick={handleTryAgain}>Try Again</button>
                                        <button
                                            className={`border-2 w-fit px-6 py-3 rounded-xl
                                            ${selectedQuiz !== null
                                                    ? quiz.name === "Geography Quiz"
                                                        ? "hover:border-sky-700 active:border-sky-500 active:bg-sky-700 active:text-white"
                                                        : quiz.name === "Math Quiz"
                                                            ? "hover:border-emerald-700 active:border-emerald-500 active:bg-emerald-700 active:text-white"
                                                            : quiz.name === "Science Quiz"
                                                                ? "hover:border-purple-700 active:border-purple-500 active:bg-purple-700 active:text-white"
                                                                : ""
                                                    : ""
                                                }
                                        transition-[0.1s]
                                        `}
                                            onClick={handleGoHome}>Go Home</button>
                                    </div>
                                </div>
                            )
                            // RESULT PAGE END

                            // If showResult is false:
                            // QUIZ UI START
                            : (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h1 className={`font-bold text-3xl

                                        ${selectedQuiz !== null
                                                ? quiz.name === "Geography Quiz"
                                                    ? "text-sky-500"
                                                    : quiz.name === "Math Quiz"
                                                        ? "text-emerald-500"
                                                        : quiz.name === "Science Quiz"
                                                            ? "text-purple-500"
                                                            : "text-grey-500"
                                                : ""
                                            }
                                    
                                        `}>
                                            {quiz.name}
                                        </h1>

                                        <button
                                            className={`border-2 w-fit text-sm px-3 py-1 rounded-xl text-gray-500 transition-[0.1s]
                                                hover:text-white hover:border-red-500 hover:bg-red-700
                                            `}
                                            onClick={handleExitQuiz}
                                        >
                                            Exit
                                        </button>
                                    </div>

                                    <div className={`border-2 rounded-xl p-4 flex flex-col justify-center items-center min-w-[400px]

                                        ${selectedQuiz !== null
                                            ? quiz.name === 'Geography Quiz'
                                                ? "border-sky-700"
                                                : quiz.name === "Math Quiz"
                                                    ? "border-emerald-700"
                                                    : quiz.name === "Science Quiz"
                                                        ? "border-purple-700"
                                                        : ""
                                            : ""
                                        }
                                    
                                    `}>
                                        <i className='text-gray-400 font-semibold mb-2'>Question {currentIndex + 1} of {quiz.questions.length}</i>
                                        <p className='text-center mb-4'>{quiz.questions[currentIndex].question}</p>
                                        <hr className={`border w-[80%] mb-8
                                            ${selectedQuiz !== null
                                                ? quiz.name === 'Geography Quiz'
                                                    ? "border-sky-700"
                                                    : quiz.name === "Math Quiz"
                                                        ? "border-emerald-700"
                                                        : quiz.name === "Science Quiz"
                                                            ? "border-purple-700"
                                                            : ""
                                                : ""
                                            }
                                        '`} />
                                        <ul className='flex flex-col gap-6 w-[80%] mb-8'>
                                            {quiz.questions[currentIndex].answers.map((answer, i) => {
                                                return (
                                                    <button
                                                        key={i}
                                                        className={`border-2 rounded-lg p-4
                                                        
                                                            ${selectedQuiz !== null
                                                                ? quiz.name === "Geography Quiz"
                                                                    ? "active:border-sky-500 active:bg-sky-700 active:text-white hover:border-sky-500"
                                                                    : quiz.name === "Math Quiz"
                                                                        ? "active:border-emerald-500 active:bg-emerald-700 active:text-white hover:border-emerald-500"
                                                                        : quiz.name === "Science Quiz"
                                                                            ? "active:border-purple-500 active:bg-purple-700 active:text-white hover:border-purple-500"
                                                                            : ""
                                                                : ""
                                                            }

                                                            transition-[0.1s]
                                                        
                                                        `}
                                                        onClick={() => handleAnswerClick(answer.correct)}
                                                    >
                                                        {answer.text}
                                                    </button>
                                                )
                                            })}
                                        </ul>
                                        <hr className={`border w-[80%] mb-6 
                                            
                                        '`} />

                                    </div>

                                </div>
                            )

                    )
                    : (
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl'>Select a Quiz</h1>
                            <div className='flex flex-wrap gap-8 justify-center my-8'>
                                {
                                    quizes.map((quiz, i) => {
                                        return (
                                            <button
                                                key={i}
                                                className={`border-2 rounded-xl max-w-[30%] min-w-[400px] py-6 px-2 textecenter flex flex-col justify-center items-center gap-2
                                                
                                                    ${selectedQuiz === i
                                                        ? quiz.name === "Geography Quiz"
                                                            ? "border-sky-700 text-white bg-sky-500"
                                                            : quiz.name === "Math Quiz"
                                                                ? "border-emerald-700 text-white bg-emerald-500"
                                                                : quiz.name === "Science Quiz"
                                                                    ? "border-purple-700 text-white bg-purple-500"
                                                                    : "border-gray-700 text-gray-700"
                                                        : ""
                                                    }
                                                transition-[0.1s]
                                                `}
                                                onClick={() => setSelectedQuiz(i)}
                                            >
                                                <h1 className='text-lg font-bold'>
                                                    {quiz.name}
                                                </h1>
                                                <i className='text-sm w-[80%]'>
                                                    {quiz.prompt}
                                                </i>

                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <button
                                className={`border-2 w-fit px-6 py-3 rounded-xl
                                    ${selectedQuiz === null
                                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                        : selectedQuiz === 0
                                            ? "border-sky-700 text-white bg-sky-500 hover:bg-sky-400 active:bg-sky-700 active:border-sky-500"
                                            : selectedQuiz === 1
                                                ? "border-emerald-700 text-white bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-700 active:border-emerald-500"
                                                : selectedQuiz === 2
                                                    ? "border-purple-700 text-white bg-purple-500 hover:bg-purple-400 active:bg-purple-700 active:border-purple-500"
                                                    : ""
                                    }
                                transition-[0.1s]
                                `}
                                onClick={handleStart}
                            >
                                Start Quiz
                            </button>


                        </div >
                    )
                // QUIZ UI END
            }
        </div >
    )
}

export default MultiQuiz
