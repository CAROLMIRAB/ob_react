import React, { useContext, useState } from 'react';

/**
 *
 * @returns componente1
 *
 * dispones de un contexto que recibe desde el padre
 *
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>el token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2> La session es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: '123456',
    sesion: 1,
  };

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({
      token: 'JWT123456789',
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      <Componente1></Componente1>
      <button onClick={actualizarSession}>actualiza sesion</button>
    </miContexto.Provider>
  );
}
