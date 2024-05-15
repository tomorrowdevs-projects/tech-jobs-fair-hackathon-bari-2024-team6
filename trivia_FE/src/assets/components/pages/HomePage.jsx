import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import profilePicture from '../../img/ProfilePicture.jpg';


const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=> {
      navigate('/user')
    }, 10000
    )
  }, [])

  return (
    <>
    <div className='pageContainer'>
      <div className='mainContainer'>
        <div className='brandImgContainer'>
          <img className='brandImg' src={profilePicture} alt="brand picture"/>
        </div>
        <h1 className='pt-5 text-white'>Trivia Game</h1>    
        <p className='text-white'>Test your knowledge with an interactive game</p>
      </div>
    </div>
    </>
  )
}

export default HomePage