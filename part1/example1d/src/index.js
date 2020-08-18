import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/*const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

const History = (props) => {
  console.log(props)
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)*/

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => { //using a function that returns a function
    setValue(newValue)
  }
  
  const setToVal = (newValue) => { //using a normal function
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    
      {value}
      <Button handleClick={() => setToVal(1000)} text="thousand" />
      <Button handleClick={() => setToVal(0)} text="reset" />
      <button onClick={() => setToVal(value + 1)}>
        increment
      </button>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

