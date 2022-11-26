import React, { useEffect } from 'react';

const AllCycles = () => {
  useEffect(() => {
    console.log('component creado');
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log('actualización del componente');
    }, 1000);
    return () => {
      console.log('component va a desaparecer');
      document.title = 'Tiempo Detenido';
      clearInterval(intervalID);
    };
  }, []);
  return <div></div>;
};

export default AllCycle;
