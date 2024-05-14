import React, { useEffect, useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const UserPage = () => {

    //function if player=1, button disabled, if players >1, button enabled
    const [ playersNumber, setplayersNumber ] = useState(0); //to understand how to get the info
    const playBtnRef = useRef(null); //issue due to timing of when I am trying to access the DOM element playBtn. When your component renders, the useEffect hook and other code run before the DOM elements are fully created. Therefore, trying to access document.getElementById('playBtn') will return null because the element is not yet present in the DOM.

    const navigate = useNavigate();

    const verifyPlayersNumber = () => {
        if(playBtnRef.current){
            playBtnRef.current.addEventListener('click', navigate('/quitz'))

            playersNumber <2 
            ? playBtnRef.current.classList.add('disabled')
            : playBtnRef.current.classList.remove('disabled')
        }
    }
    
    //reloads every time the players number changes
    useEffect(() => {
        verifyPlayersNumber()
        }, [playersNumber])

    

  return (
    <>
    <div className='playerImgContainer'>
        <img src="trivia_FE\src\assets\img\ProfolePicture.jpg" alt="player image" />
    </div>
    <Form className='d-flex flex-column'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='nameField'>Name</Form.Label>
        <Form.Control className='' type="email" placeholder="Type your name here" />
      </Form.Group>

      <Button ref={playBtnRef} id='playBtn' variant="primary" type="button">
        Play
      </Button>
    </Form>    
    </>
  )
}

export default UserPage