function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ marginBottom: '0.5rem' }}>🔐 Password Manager</h1>
      <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>
        Stockez vos identifiants en local, simplement et en toute sécurité.
      </p>
    </header>
  );
}

const headerStyle = {
  background: '#111827',
  color: '#f9fafb',
  padding: '2rem 1rem',
  textAlign: 'center',
  borderBottom: '2px solid #2563eb',
};

export default Header;
