import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
import LoginScreen from './pages/LoginScreen';
import ContactScreen from './pages/ContactScreen';
import RegisterScreen from './pages/RegisterScreen';
import AppFooter from './components/common/AppFooter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './assets/styles/Home.module.css';




function App() {
  return (
    <div className={styles.main_container}>
      <BrowserRouter>

        <div >
          <nav >
            <ul className={styles.navMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>


        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
      <div >
      <AppFooter/>
      </div>
    </div>
  );
}

export default App;
