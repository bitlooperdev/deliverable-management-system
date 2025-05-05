import React from 'react';
import styles from '../assets/styles/LoginScreen.module.css'

function LoginScreen() {
  return (
    <div>
    <div className={styles.card_container}>
      <h3 className={styles.title}>Authentication</h3>
      <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" className={styles.input} placeholder="Enter your email" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input type="password" id="password" className={styles.input} placeholder="Enter your password" />
      </div>
      <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
    </div>
  );
}


export default LoginScreen;