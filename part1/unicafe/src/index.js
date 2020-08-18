import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  /*const [clicks, setClicks] = useState({
    good: 0, neutra: 0, bad: 0
  })*/
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  
  return(
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />

      <Statistics good={good} bad={bad} neutral={neutral}
        total={total} />
      
    </div>
  )
}

const Statistics = ({ good, bad, neutral, total}) => {
  if (total === 0){
    return (
      <p> No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        
        <Statistic text='all' value={total} />
        <Statistic text='average' value={total/3} />
        <Statistic text='positive' value={(good / total) * 100} />
      </table>
        <p>positive {(good / total) * 100} %</p>
    </div>
  )
}

const Button = ({ handleClick, text }) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ value, text }) => (
  //<p>{text} {value}</p>
  
  <tbody>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  </tbody>
  
)
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
