import React from 'react';
import styles from '../assets/styles/LoginScreen.module.css'

function LoginScreen() {
  return (
    <div>
    <div className={styles.card_container}>
      <h3 className={styles.title}>Authentication</h3>
        
      <form className={styles.form}>
      <div className={styles.input_group}>
        <label htmlFor="email" className={styles.input_label}>Email:</label>
        <input type="email" id="email" className={styles.input_field} placeholder="Enter your email" />
      </div>
      <div className={styles.input_group}>
        <label htmlFor="password" className={styles.input_label}>Password:</label>
        <input type="password" id="password" className={styles.input_field} placeholder="Enter your password" />
      </div>
      <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
    </div>
  );
}


export default LoginScreen;