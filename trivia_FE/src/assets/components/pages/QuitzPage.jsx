import React, { useEffect, useState } from 'react';
import profilePicture from '../../img/ProfilePicture.jpg';
import { Form } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AnswerButton from '../molecules/AnswerButton';

const question = 'which one is a fruit?'
const correctAnswer = "Apple";
const options = ["Apple", "Milk", "Bread", "Pasta"]; 

const QuitzPage = () => {
  const [timer, setTimer] = useState(15); // set the timer at 15 seconds
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const correctBtn = document.getElementById({correctAnswer})
  const selectedBtn = document.getElementById({selectedAnswer})

  //every second (1000ms)the timer decreases of 1. When timer 0, it stops
  setInterval(
    () => {
      setTimer(timer => timer - 1);
    },
    // timer === 0 ? null : 1000
1000  );

  //callback function that sets the selectedAnswer
  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
  };

  //when button is presser OR when time is over, it checks if selectedAnswer === correctAnswer and sets the style of the button accordingly
  const confirmAnswer = () =>{
    //to dislay results for a limited amoutn of time, 5 seconds (timer is 15 seconds, this timeout is 5 seconds from when the function in called )
    setTimeout(() => {
      correctBtn.classList.add('correct'); //shows in green the correct answer
       if(selectedAnswer === correctAnswer){
        // increment score + saves timing
       } else {
        selectedBtn.classList.add('incorrect') //highlights in red the answer if wrong
       } 
    }, 5000);
    // dysplay next question
  }
    // - the user selected an answer didn't click the send button before the time is over, the send functtion will be triggered as above
  useEffect(()=>{
    if(timer === 0){
      confirmAnswer();
    }
  }, [timer])

  //cases
  //1. a) the user selects an answer V
    // - the selected answer changes color to show it is selected V
    // - the user can press the send button, it will check if the answer is correct and save the time and increment the score (if correct answer) V
    // - the user selected an answer didn't click the send button before the time is over, the send functtion will be triggered as above V

    // b) the user doesn't select an answer and the time is over V
    // - the send function is triggered as the answer was wrong --> i should set initial answer status as wrong, eventually chenge it to correct V




  // const answerBtn = document.getElementById('')
  // answerBtn.addEventListener('click', () =>sendAnswer(id_button))
  // playersNumber <2 
  //           ? playBtnRef.current.classList.add('disabled')
  //           : playBtnRef.current.classList.remove('disabled')

  return (
    <>
      <div className='pageContainer'>
        <div className='mainContainer'>
          
          <div className='questionImgContainer'>
            <img className='questionImg' src={profilePicture} alt="brand picture"/>
          </div>
          <div className='questionField'>
            <h4>Question</h4>
            <p>{question}</p>
          </div>
          
          <div className='answerField d-flex flex-column'>
            {options.map(option => (
              <AnswerButton
                id={option}
                key={option} //identifier of the answer
                option={option}
                timer={timer}
                onAnswerSelected={handleAnswerSelected}
                className='col'
              />
            ))}
          </div>  
          <div className="">
            <Button 
            onClick={(e) => {
              e.preventDefault();
              confirmAnswer()}}>
            Confirm
            </Button>
          </div>
            
 

          <p className='text-white'>Timer: {timer}</p>
        </div>
      </div>
    </>
  )
}

export default QuitzPage