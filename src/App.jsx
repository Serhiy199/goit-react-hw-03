import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
const listContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
    const [contacts, setContacts] = useState(listContacts);
    const [filterContacts, setFiltrContacts] = useState('');

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );

    return (
        <>
            <h1>Phonebook</h1>
            {/* <ContactForm /> */}
            <SearchBox value={filterContacts} onFilterContacts={setFiltrContacts} />
            <ContactList listContacts={visibleContacts} />
        </>
    );
}

export default App;
