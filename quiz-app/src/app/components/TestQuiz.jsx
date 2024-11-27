"use state"
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


  return (
    <div>
      
    </div>
  )
}

export default TestQuiz
