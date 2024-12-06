import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SobreNos from './components/SobreNos';
import OndeEstamos from './components/OndeEstamos';
import Ministerios from './components/Colabore'; // Verifique se o nome está correto
import Contato from './components/Contato';
import Celulas from './components/Celulas';
import CultoAoVivo from './components/CultoAoVivo'; // Importando o novo componente
import Footer from './components/Footer';
import Hero from './components/Hero';
import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/onde-estamos" element={<OndeEstamos />} />
          <Route path="/colabore" element={<Ministerios />} /> {/* Certifique-se de que a rota está correta */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/celulas" element={<Celulas />} />
          <Route path="/culto-ao-vivo" element={<CultoAoVivo />} /> {/* Nova rota para o Culto ao Vivo */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
