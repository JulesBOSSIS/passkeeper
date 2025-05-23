import { useEffect, useState } from 'react';
import { decrypt } from '../utils/cryptoUtils';

function PasswordList({ masterKey, refresh }) {
    // State variable to manage the list of passwords
    const [passwords, setPasswords] = useState([]);

    // Effect to load passwords from local storage and decrypt them
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('passwords')) || [];
        const decrypted = stored.map(entry => ({
            ...entry,
            password: decrypt(entry.password, masterKey)
        }));
        setPasswords(decrypted);
    }, [masterKey, refresh]);

    // Function to handle deletion of a password entry
    // It filters out the entry with the specified ID and updates local storage
    const handleDelete = (id) => {
        const filtered = passwords.filter((entry) => entry.id !== id);
        localStorage.setItem('passwords', JSON.stringify(filtered));
        setPasswords(filtered);
    };

    return (
        <section>
            <h2>📋 Mots de passe enregistrés</h2>
            {passwords.length === 0 ? (
                <p>Aucun mot de passe enregistré.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {passwords.map((entry) => (
                        <li key={entry.id} style={cardStyle}>
                            <strong>{entry.site}</strong> <br />
                            Identifiant : {entry.username} <br />
                            Mot de passe : {entry.password} <br />
                            <button onClick={() => handleDelete(entry.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

const cardStyle = {
    background: '#1f2937',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    color: '#c9d1d9',
};

export default PasswordList;
