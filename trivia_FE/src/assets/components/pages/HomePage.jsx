import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=> {
      navigate('/user')
    }, 10000
    )
  }, [])

  return (
    <>
    <div className='brandImgContainer'>
      <img className='brandImg' src=".." alt="brand picture"/>
    </div>
    <h1>Trivia Game</h1>    
    <p>Test your knowledge with an interactive game</p>
    </>
  )
}

export default Home