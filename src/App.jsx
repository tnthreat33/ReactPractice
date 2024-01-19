import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [data, setData] = useState([])
  console.log(data)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json');
        console.log(response.data)
        setData(response.data)
      } catch (error){
        console.log('Error', error);
      }
    }
    fetchData();

  }, [])

  const addName = (e) => {
    e.preventDefault();
    const personExists = data.some((person) => person.name === newName);
    
    if (personExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setData([...data, { name: newName, number: newNumber }]);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {data.map((person) => (
        <ul key={person.name}>
          <li>
            {person.name} : {person.number}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
