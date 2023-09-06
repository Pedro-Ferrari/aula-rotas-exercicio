import React from 'react';

function DeviceList({ devices }) {
  return (
    <section className="device-list">
      <h2>Aparelhos Disponíveis</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            <a href={`/devices/${device.id}`}>
              <img src={device.image} alt={device.name} />
              <h3>{device.name}</h3>
              <p>{device.description}</p>
              <p>Preço: ${device.price}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DeviceList;
