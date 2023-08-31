import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import { useState, useEffect } from 'react';

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(({ results }) => setContacts(results))
  }, [])

  return (
    <div className="App">
      {contacts.map((contact, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={contact.picture.medium}
            name={`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
            email={contact.email}
            age={contact.dob.age}
          />
        )
      })}
    </div>
  );
}

export default App;
