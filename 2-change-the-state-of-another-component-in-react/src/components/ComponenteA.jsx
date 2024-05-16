import React from 'react';

const ComponenteA = ({ state }) => (
  <div>
    <h2>Componente A</h2>
    <p>O estado é: {state ? 'ativo' : 'inativo'}</p>
  </div>
);

export default ComponenteA;
