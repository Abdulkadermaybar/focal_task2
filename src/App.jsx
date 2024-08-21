import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FilterButtons from './components/FilterButtons/FilterButtons';
import VillaCard from './components/VillaCard/VillaCard';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  const buttons = [
    { label: 'All', onClick: () => console.log('All clicked') },
    { label: 'For Sale', onClick: () => console.log('For Sale clicked') },
    { label: 'For Rent', onClick: () => console.log('For Rent clicked') }
  ];

  const villas = [
    {
      title: "Luxury Villa",
      description: "Beautiful villa with sea view.",
      image: "/images/villa_sea.jfif"
    },
    {
      title: "Modern Villa",
      description: "Modern villa in the city center.",
      image: "/images/modern_city.jfif"
    },
    {
      title: "Countryside Villa",
      description: "Cozy villa in the countryside.",
      image: "/images/country_villa.jfif"
    }
  ];

  return (
    <Router>
      <div className="App">
        <Header title="Villa Marketplace" links={links} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection image="/images/villa_market.jfif" />
                <FilterButtons buttons={buttons} />
                <div className="villa-list">
                  {villas.map((villa, index) => (
                    <VillaCard
                      key={index}
                      title={villa.title}
                      description={villa.description}
                      image={villa.image}
                    />
                  ))}
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer text="&copy; 2024 Villa Marketplace. All rights reserved." />
      </div>
    </Router>
  );
}

export default App;
