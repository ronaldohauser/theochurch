import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SobreNos from './components/SobreNos';
import Agenda from './components/Agenda';
import Ministerios from './components/Ministerios';
import Contato from './components/Contato';
import Celulas from './components/Celulas';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} /> {/* Renderiza Hero apenas na Home */}
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/celulas" element={<Celulas />} /> {/* Nova rota para Células */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
