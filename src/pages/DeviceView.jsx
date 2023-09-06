import React from 'react';
import { useParams } from 'react-router-dom'; // Importe useParams para obter o ID do aparelho
import DeviceDetail from '../components/DeviceDetail'; // Importe o componente DeviceDetail
import devices from '../data/devices'; // Importe a lista de aparelhos

function DeviceView() {
  const { id } = useParams(); // Obtenha o ID do aparelho da URL
  const device = devices.find((d) => d.id === parseInt(id, 10)); // Encontre o aparelho com base no ID

  if (!device) {
    return <div>Aparelho não encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Aparelho</h2>
      <DeviceDetail device={device} /> {/* Renderize os detalhes do aparelho */}
    </div>
  );
}

export default DeviceView;
