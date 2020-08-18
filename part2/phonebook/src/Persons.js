import React from 'react'

const Persons = ({ showSearch, persons, delPerson }) => {
    const searchedPersons = persons.filter(person =>
        person.name.toLowerCase()
        .includes(showSearch.toLowerCase())
    )
    /*return(
    <div>
    {showSearch 
        ? searchedPersons.map(person => <p key={person.name}>
            {person.name} {person.number} 
            <button onClick={() => delPerson(person.id)}>delete</button></p>)

        : persons.map((person) => <p key={person.name}>
            {person.name} {person.number} 
            <button onClick={() => delPerson(person.id)}>delete</button></p>)  }
    </div>   
    ) */

    return (
        searchedPersons.map(person => 
            <p key={person.name}>
            {person.name} {person.number} 
            <button onClick={() => delPerson(person)}>delete</button></p>)
    )
}

export default Persons