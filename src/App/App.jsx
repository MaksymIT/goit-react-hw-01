import clsx from 'clsx';
import styles from './App.module.css'
import Header from '../components/Header/Header.jsx';
import WelkomeSection from '../components/WelkomeSection/WelkomeSection.jsx';


const App = () => {
  return (
    <>
      <Header />
      <WelkomeSection />
      <h1 className={clsx(styles.app)}>Hello Ukraine!</h1>

    </>
  );
};

export default App;

