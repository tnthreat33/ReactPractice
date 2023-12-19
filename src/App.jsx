import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  

  const addName =(e) => {
    e.preventDefault();
    const personExist = persons.some((person) => person.name === newName)
    if(personExist){
       alert(`${newName} is already added to phonebook`)
     } else{
       setPersons([...persons, {name: newName}])
     }
  }

  const handleNameChange= (e) =>{
    
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange ={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((name)=>(
        <ul key = {name.name}>
          <li> {name.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default App