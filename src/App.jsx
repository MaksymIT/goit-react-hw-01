import Header from './components/Header/Header.jsx';
import WelkomeSection from './components/WelkomeSection/WelkomeSection.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <WelkomeSection />
      <Footer brand='JS' id='38' />
      <Footer brand='C#' id='28' />
      <ul>{[1, 2, 3, 4, 5].map(item => <li>{item}</li>)}</ul>
    </>
  );
};

export default App;

