import { Routes, Route } from 'react-router-dom';
import Accueil from './Page/Accueil';
import A_Propos from './Page/A_Propos';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationDetail from './Page/LocationDetail'; // Importer le composant des détails de la location
import Erreur404 from './Page/Erreur404';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A-Propos" element={<A_Propos />} />
        <Route path="/location/:id" element={<LocationDetail />} /> {/* Nouvelle route pour les détails */}
        <Route path="/404" element={<Erreur404 />} /> {/* Route pour la page 404 */}
        <Route path="*" element={<Erreur404 />} /> {/* Route de correspondance pour les erreurs 404 */}
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
