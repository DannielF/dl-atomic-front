import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
