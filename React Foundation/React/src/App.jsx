import { useState } from 'react'
import './App.css'

function App() {
  //It is a hook React look at this variable and re-render whenever this sate variable changes
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <CustomButton count={count} setCount={setCount} />
      </div>

    </>
  )
}
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>
      Count is {props.count}
    </button>
  )
}

export default App
