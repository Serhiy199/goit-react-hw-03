import Contact from './Contact';
export default function ContactList({ listContacts, onDelete }) {
    return (
        <ul>
            {listContacts.map(list => (
                <Contact list={list} key={list.id} onDelete={onDelete} />
            ))}
        </ul>
    );
}
