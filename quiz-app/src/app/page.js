import React from 'react'
// import TestQuiz from './components/TestQuiz'
import MultiQuiz from './components/MultiQuiz'

function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-screen mx-auto p-16'>
            <MultiQuiz />
        </div>
    )
}

export default Home
