import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  arto.greet()       // "hello, my name is Arto Hellas" gets printed
  setTimeout(arto.greet, 1000)
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      { /*<Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name}
        exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
  */}
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => ( //destructuring using { course } instead of using props
  <h1>{course}</h1>
)

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Part = ( props ) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const Total = ({ parts }) => (
  <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
)

ReactDOM.render(<App />, document.getElementById('root'))