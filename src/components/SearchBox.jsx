export default function SearchBox({ value, onFilterContacts }) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={e => onFilterContacts(e.target.value)} />
        </div>
    );
}
