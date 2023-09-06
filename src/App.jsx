import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importe o componente Link para navegar entre as rotas
import Header from '../src/components/Header'; // Use a extensão .jsx
import Footer from '../src/components/Footer'; // Use a extensão .jsx
import Home from '../src/pages/Home'; // Use a extensão .jsx
import Devices from '../src/pages/Devices'; // Use a extensão .jsx
import DeviceView from '../src/pages/DeviceView'; // Use a extensão .jsx
import NotFound from '../src/pages/NotFound'; // Use a extensão .jsx

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/devices">Aparelhos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/devices/:id" element={<DeviceView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;