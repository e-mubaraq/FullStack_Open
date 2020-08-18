import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import phoneService from './services/comms'
import './App.css'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showSearch, setShowSearch ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ success, setSuccess ] = useState(null)

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => showMessage('Records could not be retrieved', false))
  } , [])

  const updatePerson = (id, newNumber) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = {...person, number: newNumber}

    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
      phoneService.update(id, changedPerson)
        .then(changedPerson => {
            setPersons(persons.map(p => p.id !== id ? p : changedPerson))
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.find((p) => p.name === newName)) {
      if (persons.find(p => p.number === newNumber)) {
          showMessage(`${person.name} is already in the phonebook`, false)
      }
      else {
        const pers = persons.find(p => p.name === newName)
        updatePerson(pers.id, newNumber)
        showMessage(`${person.name} has been updated in the phonebook`)
      }
    }
    else if (newName === '' || newNumber === '') {
        showMessage('The fields should not be empty', false)
    }
    else {
      phoneService.create(person)
        .then(retPerson => setPersons(persons.concat(retPerson)))
        showMessage(`${person.name} was added to the phonebook`)
    }

    setNewName('')
    setNewNumber('')
  }

  const delPerson = person => {       
    if (window.confirm(`Delete ${person.name} ?`)) {
        phoneService.deletePerson(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
          showMessage(`${person.name} was deleted from the phonebook`)
        })
        .catch (error => {
          showMessage(`${person.name} was already deleted from server`, false)
        })
        setPersons(persons.filter(p => p !== person))
    }
    
}

const showMessage = (message, success = true) => {
  setErrorMessage(message);
  setSuccess(success)

  setTimeout(() => {
    setErrorMessage(null)
  }, 3000)
}

const Notification = ( {message, success} ) => {
  if (message === null) {
    return null
  }
  if (success) {
    return (
    <div className="success">{message}</div>
    )
  }
  else {
    return(
      <div className="error">{message}</div>
    )
  }
}

const handleNameChange = (event) => setNewName(event.target.value)
const handleNumberChange = (event) => setNewNumber(event.target.value)
const handleSearch = (event) => setShowSearch(event.target.value)
  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification message={errorMessage} success={success}/>

      <Filter showSearch={showSearch} handleSearch={handleSearch} />

      <h2>Add a new contact</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      
      <h2>Numbers</h2>
      <Persons showSearch={showSearch} persons={persons}
        delPerson={delPerson} />
      
    </div>
  )
}

export default App;
