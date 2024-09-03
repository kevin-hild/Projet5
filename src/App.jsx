import {Routes,Route} from "react-router-dom";
import Accueil from "./components/Home/Accueil";
import A_Propos from "./components/Apropos/A_Propos";
import Header from "./components/Home/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<Accueil />}/>
        <Route  path="/A-Propos" element={<A_Propos />}/>
      </Routes>
    </div>
  );
}

export default App;