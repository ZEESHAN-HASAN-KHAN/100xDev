import { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'
import { useFetch } from '../hooks/useFetch'
function Layout() {
  return <div>
    <div style={{ backgroundColor: "red" }}>HEADER
      <Link to="/home">Home</Link>
    </div>

    <Outlet />
    <div style={{ backgroundColor: "red" }}>FOOTER</div>
  </div>
}
function Home() {
  return <div>
    Home
    <a href="/about">About</a>

  </div>
}

function About() {
  const navigate = useNavigate();
  return <div>
    About
    <button onClick={() => {
      navigate('/home');
    }}>Button</button>
  </div>
}
function Ref() {
  const ref = useRef();
  //useRef  is reference to value or dom
  //reference to a value such that when u change the value
  //the component doesn't re-render 
  const [value, setValue] = useState('raman');
  const [currentCount, setCurrentCount] = useState(1);
  let timer = 0;
  function startClock() {
    timer = setInterval(function () {
      setCurrentCount(c => c + 1);

    }, 1000)
  }
  function stopClock() {
    clearInterval(timer);
  }
  return <div>
    <input ref={ref} type='text'></input>


    <br />
    <button onClick={() => {
      ref.current.focus();

    }}>Submit</button>
    <br></br>
    {currentCount}
    <button onClick={startClock}>Start </button>
    <button onClick={stopClock}>Stop </button>
  </div>
}
//custom Hooks
function useCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(c => c + 1);
  }
  return {
    count: count,
    increaseCount: increaseCount
  };
}
function CustomHooks() {
  const { count, increaseCount } = useCounter();
  const { finalData } = useFetch('https://jsonplaceholder.typicode.com/posts/1');
  return <div>
    {count}
    <button onClick={increaseCount}>Increases</button>
    {JSON.stringify(finalData)}
  </div>
}




function App() {
  const [count, setCount] = useState(0)
  return (
    <>

      <Router>

        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/useref' element={<Ref />} />
          <Route path='/custom' element={<CustomHooks />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
