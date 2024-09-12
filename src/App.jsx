import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Home/Accueil';
import A_Propos from './components/Apropos/A_Propos';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import LocationDetail from './components/Home/LocationDetail'; // Importer le composant des détails de la location

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A-Propos" element={<A_Propos />} />
        <Route path="/location/:id" element={<LocationDetail />} /> {/* Nouvelle route pour les détails */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
