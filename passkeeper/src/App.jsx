import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  const [inputKey, setInputKey] = useState('');
  const [masterKey, setMasterKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey.trim()) {
      setMasterKey(inputKey);
    }
  };

  if (!masterKey) {
    return (
      <div className="App" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>🔐 Entrez votre mot de passe maître</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Mot de passe maître"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem', marginTop: '1rem' }}
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Valider
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
        <PasswordForm masterKey={masterKey} />
        <PasswordList masterKey={masterKey} />
      </main>
    </div>
  );
}

export default App;
