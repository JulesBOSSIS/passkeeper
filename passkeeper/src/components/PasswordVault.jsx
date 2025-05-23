import { encrypt, decrypt } from '../utils/cryptoUtils';

function savePassword(site, username, password, masterKey) {
  const entry = {
    site,
    username,
    password: encrypt(password, masterKey), // chiffré
  };

  const vault = JSON.parse(localStorage.getItem("vault")) || [];
  vault.push(entry);
  localStorage.setItem("vault", JSON.stringify(vault));
}

function loadPasswords(masterKey) {
  const vault = JSON.parse(localStorage.getItem("vault")) || [];
  return vault.map(entry => ({
    ...entry,
    password: decrypt(entry.password, masterKey), // déchiffré
  }));
}
