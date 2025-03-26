import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import CardsSection from './components/CardSection';
import AboutUs from './components/AboutUs';
import TechnologiesBanner from './components/TechnologiesBanner';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import PoliciesSection from './components/PoliceSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <CardsSection />
        <AboutUs />
        <TechnologiesBanner />
        <WhyUsSection />
        <ContactSection />
        <PoliciesSection />
        
      </main>
    </div>
  );
}

export default App;
