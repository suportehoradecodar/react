import React from 'react';

const ComponenteB = ({ currentState, onStateChange }) => (
    <div>
      <h2>Componente B</h2>
      <button onClick={() => onStateChange(!currentState)}>
        {currentState ? 'Desativar Estado' : 'Ativar Estado'}
      </button>
    </div>
  );

export default ComponenteB;
