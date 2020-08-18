import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name}/>
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
        {parts.map((part) => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
  }
  
  const Part = ( props ) => (
    <p>
      {props.name} {props.exercises}
    </p>
  )
  
  const Total = ({ parts }) => {
    let total = parts.reduce((sum, part) => sum + part.exercises  , 0)
    return (
    <p>total of <b>{total}</b> exercises</p>
    )
  }

  export default Course