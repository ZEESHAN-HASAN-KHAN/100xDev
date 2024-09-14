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

//Example 1
// import { useState } from 'react'
// import React from 'react'

// //
// //React.memo() skip re-rendering when the state of the component doen't change
// const Header = React.memo(function Header({ title }) {
//   return <>
//     <h1>
//       {title}
//     </h1>
//   </>
// })

// function App() {
//   function submit() {
//     setName(Math.random());
//   }
//   const [name, setName] = useState('Z');
//   return (
//     <div>
//       <button onClick={submit}>Click me to change the title</button>
//       <Header title={name}></Header>
//       <Header title="X"></Header>
//       <Header title="y"></Header>
//       <Header title="a"></Header>
//     </div>
//   )
// }

// export default App


//Example 2: Key For list array
// import { useState } from 'react'
// import React from 'react'

// function Todo({ title, description }) {
//   return (
//     <>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </>
//   )
// }
// let counter = 3;
// function App() {
//   const [todo, setTodo] = useState([{
//     id: 1,
//     title: "Go to Gym",
//     description: "Go to gym Today"
//   },
//   {
//     id: 2,
//     title: "Eat Food",
//     description: "Eat food"
//   }])



//   function addTodo() {
//     setTodo([...todo, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todo.map((todo) => {
//         return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
//       })}
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from 'react'
import React from 'react'

function Todo(props) {
  return <>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </>
}
let counter = 1;
function App() {
  const [todos, setTodos] = useState([{
    id: counter,
    title: 'Z',
    description: 'H'
  }]);

  function addTodo() {
    setTodos([...todos, { id: ++counter, title: Math.random(), description: Math.random() }])
  }

  useEffect(() => {
    console.log('First Time Render It will show');
  }, [])
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
    </div>
  )


}
export default App;
