import React from 'react';
import DeviceList from '../components/DeviceList'; // Importe o componente DeviceList
import devices from '../data/devices'; // Importe a lista de aparelhos

function Devices() {
  return (
    <div>
      <h2>Aparelhos Disponíveis</h2>
      <DeviceList devices={devices} /> {/* Renderize a lista de aparelhos */}
    </div>
  );
}

export default Devices;