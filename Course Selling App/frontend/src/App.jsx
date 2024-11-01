import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './SignUp'
import { Login } from './Login'
import { Home } from './Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { CourseDetails } from './CourseDetails'
import Navbar from './Navbar'
import { MyCourse } from './MyCourse'
import { Profile } from './Profile'
// import { Navbar } from './Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myProfile' element={<Profile />}></Route>
        <Route path='/myCourses' element={<MyCourse />}></Route>
        <Route path='/courseDetails/:courseId' element={<CourseDetails />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
