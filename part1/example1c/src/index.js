import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  //const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button text='+' handleClick={increaseByOne}/>
      <Button text={counter} />
      <Button text='zero' handleClick={() => setCounter(0)} />
      <Button text ='-' handleClick={decreaseByOne} />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)