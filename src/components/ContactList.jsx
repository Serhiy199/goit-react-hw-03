import Contact from './Contact';
export default function ContactList({ listContacts }) {
    return (
        <ul>
            {listContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
