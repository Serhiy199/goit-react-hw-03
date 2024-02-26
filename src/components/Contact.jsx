export default function Contact({ list: { name, number, id }, onDelete }) {
    return (
        <li>
            <h3>{name}</h3>
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}
