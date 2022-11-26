import React, { useState, useEffect } from 'react';

const Ejemplo1 = () => {
  const personaInicial = {
    nombre: 'martin',
    email: 'example@gmail.com',
  };

  const valorInicial = 0;

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const actualizarPersona = () => {
    setPersona({
      nombre: 'PEPE',
      email: 'example@gmail.com',
    });
  };

  return (
    <div>
      <h1>ejemplo de use state</h1>
      <h2>contador: {contador}</h2>
      <h2>datos de la persona: {}</h2>
      <h2>nombre: {persona.nombre}</h2>
      <h2>email: {persona.email}</h2>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}> actualizarPersona</button>
    </div>
  );
};

export default Ejemplo1;
