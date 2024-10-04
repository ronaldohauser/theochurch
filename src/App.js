import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; // Importando o Hero
import Home from './components/Home';
import SobreNos from './components/SobreNos';
import Agenda from './components/Agenda';
import Ministerios from './components/Ministerios';
import Contato from './components/Contato';
import Footer from './components/Footer'; // Importando o Footer
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Hero /> {/* Adicionando o Hero */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer /> {/* Adicionando o Footer */}
    </Router>
  );
}

export default App;
