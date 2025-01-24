import './App.css';
import Header from './components/Header/Header'
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Equipments from './components/Equipments/Equipments';
import Intro from './components/Introduction/Intro'
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <Equipments />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
