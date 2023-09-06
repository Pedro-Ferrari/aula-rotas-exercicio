import React from 'react';

function DeviceDetail({ device }) {
  return (
    <section className="device-detail">
      <h2>{device.name}</h2>
      <img src={device.image} alt={device.name} />
      <p>{device.description}</p>
      <p>Preço: ${device.price}</p>
      {/* Adicione mais detalhes do aparelho, se necessário */}
    </section>
  );
}

export default DeviceDetail;
