import { useState } from 'react';
import generatePassword from '../utils/generatePassword';
import { encrypt } from '../utils/cryptoUtils';

function PasswordForm({ masterKey, onAdd }) {
    // State variables to manage the form inputs
    const [site, setSite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    // It encrypts the password and saves the entry to local storage
    const handleSubmit = (e) => {
        e.preventDefault();

        const encryptedPassword = encrypt(password, masterKey);
        const entry = { site, username, password: encryptedPassword, id: Date.now() };

        const stored = JSON.parse(localStorage.getItem('passwords')) || [];
        stored.push(entry);
        localStorage.setItem('passwords', JSON.stringify(stored));

        setSite('');
        setUsername('');
        setPassword('');
        if (onAdd) {
            onAdd();
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Ajouter un mot de passe</h2>
            <input
                type="text"
                placeholder="Nom du site"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Identifiant"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="button"
                onClick={() => setPassword(generatePassword())}
                style={{
                    marginLeft: '0.5rem',
                    padding: '0.3rem 0.6rem',
                    background: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Générer un mot de passe
            </button>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default PasswordForm;
