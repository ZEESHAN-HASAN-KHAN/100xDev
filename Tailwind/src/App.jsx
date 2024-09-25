// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// const [count, setCount] = useState(0)

function App() {

  return (


    <div>
      <div className='flex justify-between'>
        <div className="bg-red-600"> first</div>
        <div className="bg-green-600">second</div>
        <div className="bg-yellow-600"> hird</div>
      </div>

      <div className="grid grid-cols-12">
        <div className="bg-red-600 col-span-5"> first</div>
        <div className="bg-green-600">second</div>
        <div className="bg-yellow-600"> third</div>
        <div className="bg-yellow-600"> Four</div>
        <div className="bg-yellow-600"> Five</div>
      </div>
      <div className="bg-red-500 md:bg-blue-500">
        Zeeshan
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-600 "> first</div>
        <div className="bg-green-600">second</div>
        <div className="bg-yellow-600"> third</div>
      </div>
    </div>
  )
}

export default App
