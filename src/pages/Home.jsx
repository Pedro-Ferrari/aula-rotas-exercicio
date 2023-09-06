import React from 'react';
import Promotions from '../components/Promotions'; // Importe o componente Promotions

function Home() {
  return (
    <div>
      <h2>Bem-vindo à Loja de Smartphones e Tablets</h2>
      <Promotions /> {/* Renderize as promoções */}
    </div>
  );
}

export default Home;
