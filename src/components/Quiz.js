import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';



export default function Quiz() {
    const [currentQuest, setQuest]= useState(0);
    const [score, setScore]= useState(0);
    const [clickedOpt, setOpt]= useState(0);
    const [showResult, setShowResult]= useState(false);

    const changeQuest =()=>{
        updateScore();
        if(currentQuest < QuizData.length-1){
            setQuest(currentQuest+1);
            setOpt(0);
        }else{
            setShowResult(true);
        }
    }
    const updateScore =()=>{
        if(clickedOpt === QuizData[currentQuest].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setQuest(0);
        setOpt(0);
        setScore(0);
    }
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
            <QuizResult score = {score} totalScore = {QuizData.length} tryAgain={resetAll}/>
        ):(
         <>
        <div className="question">
            <span id='question-number'>{currentQuest+1}</span>
            <span id='question-txt'>{QuizData[currentQuest].question} </span>
        </div>
        <div className="option-container">
            {QuizData[currentQuest].options.map((Option,i)=>{
                return(
                    <button 
                    className={`option-btn ${
                        clickedOpt === i+1?"checked":null
                    }`}
                     key={i} onClick={()=>setOpt(i+1)}>
                        {Option}
                    </button>
                )
            })}
        </div>
        <input type="button" value="Next" id='next-button' onClick={changeQuest} />
        </>)}
      </div>
    </div>
  )
}


