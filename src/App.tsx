import styles from './App.module.css';
import LoginButton from './components/atoms/LoginButton';

const classCss = `${styles.homeLogin}`;

function App() {
  return (
    <main className={classCss}>
      <h2>WalletApp</h2>
      <LoginButton />
    </main>
  );
}

export default App;
