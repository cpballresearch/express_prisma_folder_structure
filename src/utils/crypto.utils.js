import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

class CryptoUtils {
  static #algorithm = process.env.CRYPTO_ALGORITHM || 'sha512';
  static #keyLength = parseInt(process.env.CRYPTO_KEY_LENGTH) || 64;
  static #saltSize = parseInt(process.env.CRYPTO_SALT_SIZE) || 32;
  static #iterations = parseInt(process.env.CRYPTO_SALT_ROUNDS) || 10000;

  static hashPassword(password) {
    const salt = crypto.randomBytes(this.#saltSize).toString('hex');
    const hash = crypto.pbkdf2Sync(
      password,
      salt,   
      this.#iterations,
      this.#keyLength,
      this.#algorithm
    ).toString('hex');

    return `${salt}:${hash}`;
  }

  static verifyPassword(password, storedHash) {
    const [salt, hash] = storedHash.split(':');
    const newHash = crypto.pbkdf2Sync(
      password,
      salt,
      this.#iterations,
      this.#keyLength,
      this.#algorithm
    ).toString('hex');

    return hash === newHash;
  }
}

export default CryptoUtils;


