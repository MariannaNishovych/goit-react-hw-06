import { useState, useEffect } from 'react';
import './App.css';
import initialContacts from './contacts.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('saved-contacts');
    return savedContacts && JSON.parse(savedContacts).length > 0
      ? JSON.parse(savedContacts)
      : initialContacts;
  });



  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onSearch={handleChange} />
      <ContactList contacts={contactsFilter} onDelete={deleteContacts} />
    </div>
  );
}

export default App;
