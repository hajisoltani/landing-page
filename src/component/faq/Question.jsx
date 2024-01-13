import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



const Question = (question) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer=() =>{
        setShowAnswer(!showAnswer)
    }

    return (
        <>
            <div className="question-title">
                <h2>{question.title}</h2>
                <button  onClick={toggleAnswer}>
                    {showAnswer?<AiOutlineMinus color='#1f93ff' />:<AiOutlinePlus color='#1f93ff' /> }
                </button>
              </div>
              <div className="question-answer">
                {
                  showAnswer && <p>{question.answer}</p>
                }
              </div>
        </>
    );
}

export default Question;
