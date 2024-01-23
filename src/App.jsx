import { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
    </div>
  )
}


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

  const addName = async (e) => {
    e.preventDefault();
    const personExists = data.some((person) => person.name === newName);

    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      try {
        await axios.post('/db.json', { name: newName, number: newNumber });
        setData(prevData => [...prevData, { name: newName, number: newNumber }]);
        setNewName('');
        setNewNumber('');
      } catch (error) {
        console.error('Error adding person:', error);
      }
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
    
    <div>
        <h3> Notes:</h3>
        <l1 className='first'>
          This is the first note
        </l1>
        <li>
          This is another note
        </li>
        <li>
          wow a third note
        </li>
    </div>
    ,<Footer />
    </div>
  );
};

export default App;
