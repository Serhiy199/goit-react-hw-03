import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
    const [listContacts, setListContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    console.log(listContacts);
    return (
        <>
            <h1>Phonebook</h1>
            {/* <ContactForm /> */}
            {/* <SearchBox /> */}
            <ContactList listContacts={listContacts} />
        </>
    );
}

export default App;
