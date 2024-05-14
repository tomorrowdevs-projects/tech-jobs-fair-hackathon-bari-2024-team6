import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/pages/HomePage'
import UserPage from './assets/components/pages/UserPage'
import QuitzPage from './assets/components/pages/QuitzPage'
import ClassificPage from './assets/components/pages/ClassificPage'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/quitz' element={<QuitzPage/>}/>
        <Route path='/classific' element={<ClassificPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
