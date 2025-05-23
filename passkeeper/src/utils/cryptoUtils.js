import CryptoJS from "crypto-js";

export function encrypt(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString();
}

export function decrypt(cipher, key) {
  try {
    return CryptoJS.AES.decrypt(cipher, key).toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return "Erreur de déchiffrement";
  }
}
