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

//Example 1 Memo let you skip re-rendering 
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

// import { useEffect, useState } from 'react'
// import React from 'react'

// function Todo(props) {
//   return <>
//     <h1>{props.title}</h1>
//     <h1>{props.description}</h1>
//   </>
// }
// let counter = 1;
// function App() {
//   const [todos, setTodos] = useState([{
//     id: counter,
//     title: 'Z',
//     description: 'H'
//   }]);

//   function addTodo() {
//     setTodos([...todos, { id: ++counter, title: Math.random(), description: Math.random() }])
//   }

//   useEffect(() => {
//     console.log('This line come from Use Effect Hook which run on first re-render')
//   }, [])
//   //[]:- It is a dependency list which means any state define here will make useEffect run 
//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map((todo) => {
//         return <Todo key={todo.id} title={todo.title} description={todo.description} />
//       })}
//     </div>
//   )


// }
// export default App;



//Example UseMemo Hooks
// import { useMemo, useState } from 'react'
// import React from 'react'
// function App() {
//   const [value, setValue] = useState(0);
//   const [counter, setCounter] = useState(0);
//   //useMemo will be called only when the state value change
//   let count = useMemo(() => {
//     console.log('Memo Got Called')
//     let count = 0;
//     for (let i = 0; i < value; i++) {
//       count += i;
//     }
//     return count;
//   }, [value])
//   return (
//     <div>
//       <input type='text' placeholder='Enter a Value' onChange={(e) => {

//         setValue(e.target.value)
//       }}></input>
//       <h1>Sum is {value}</h1>
//       <button onClick={() => { setCounter(counter + 1) }}>Click to Increase the counter {counter}</button>
//     </div>
//   )


// }
// export default App;


//Example of Callback
//Even though we are passing same function 
//everytime Render they are refrentially not equal
//so that's why Comp will render every time
//React.memo skip the re-rendering when the props/attribute don't change
//But here the function is changing referentially 
// and hence useCallback came into picture

import { useCallback, useMemo, useState } from 'react'
import React from 'react'

const Comp = React.memo(function Comp({ fn }) {
  console.log('First Time Render')
  return <h1>Hi there from comp </h1>
})
function App() {
  const [counter, setCounter] = useState(0);
  const fn = useCallback(() => {

    console.log('Function is called');
  }
    , [])
  var a = 1;
  return (
    <div>
      <Comp fn={fn} ></Comp>
      <button onClick={() => { setCounter(counter + 1) }}>Click to Increase the counter {counter}</button>
    </div>
  )
}
export default App;