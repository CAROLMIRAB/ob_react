import React, { useRef, useEffect, useState } from 'react';

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const miRef = useRef();

  const incrementar1 = () => {
    setContador1(contador1 + 1);
  };

  const incrementar2 = () => {
    setContador2(contador2 + 1);
  };

  /* useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('Mostrando referencia del DOM:');
    console.log(miRef);
  }, [contador1]);*/

  /**
   * cada vez que hay un cambio en contador1 o contador2 se ejecuta el useEffect
   */
  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('Mostrando referencia del DOM:');
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1> ejemplo useEffect useRef useState</h1>
      <h2>Cont1: {contador1}</h2>
      <h2>Cont2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}> incrementar 1</button>
        <button onClick={incrementar2}> incrementar 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
