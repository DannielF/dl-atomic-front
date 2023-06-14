import styles from './App.module.css';
import LoginButton from './components/atoms/loginButton/LoginButton';
import { SignupButton } from './components/atoms/signupButton/SignupButton';

const classCss = `${styles.homeLogin}`;

function App() {
  return (
    <main className={classCss}>
      <h2>WalletApp</h2>
      <LoginButton />
      <SignupButton />
    </main>
  );
}

export default App;
