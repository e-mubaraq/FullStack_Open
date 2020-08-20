import axios from 'axios'
const baseUrl = '/api/persons'
//const baseUrl = 'https://agile-savannah-15025.herokuapp.com/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request =  axios.post(baseUrl, newPerson)
    //return request.then(response => setPersons(persons.concat(response.data)))
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, contact) => {
    const request = axios.put(`${baseUrl}/${id}`, contact)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update }