export default function Contact({ list: { name, number } }) {
    return (
        <li>
            <h3>{name}</h3>
            <p>{number}</p>
            <button>Delete</button>
        </li>
    );
}
