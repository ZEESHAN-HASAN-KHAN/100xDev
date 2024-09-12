// import { useState } from 'react'

// import './App.css'
// // Define the Todo component
// const Todo = ({ title, time }) => {
//   return (
//     <div className="todo">
//       <h3 className="todo-title">{title}</h3>
//       <p className="todo-time">{time}</p>
//     </div>
//   );
// };

// function App() {
//   console.log('Render');
//   function submit() {
//     if (title && time) {
//       setTodos([...todos, { title, time }]);
//       setTime('');
//       setTitle('');
//     }
//     else {
//       alert('Please fill in both field');
//     }
//   }

//   const [todos, setTodos] = useState([{
//     title: "Go to Gym",
//     time: "8PM"
//   }, {
//     title: "Learn Web Development",
//     time: "10PM"
//   }])

//   const [title, setTitle] = useState('');
//   const [time, setTime] = useState('');
//   return (
//     <>
//       <input type='text' placeholder='title' value={title}
//         onChange={(e) => {
//           setTitle(e.target.value)
//         }}
//       ></input>
//       <br />
//       <input type='text' placeholder='time' value={time}
//         onChange={(e) => { setTime(e.target.value) }}
//       ></input>
//       <br />
//       <button onClick={submit}>Add Todo</button>
//       <div>
//         {

//           todos.map((value) => {
//             return (<Todo title={value.title} time={value.time} />)
//           })
//         }
//       </div>
//     </>
//   )
// }

// export default App
import { useState } from 'react'

import './App.css'


function App() {
  function submit() {
    setName(Math.random());
  }
  const [name, setName] = useState('Zeeshan');
  return (
    <>
      <button onClick={submit}>Click me to change the title</button>
      <h1>My Name is {name}</h1>
      <h1>My Name is Hasan</h1>
    </>
  )
}

export default App
