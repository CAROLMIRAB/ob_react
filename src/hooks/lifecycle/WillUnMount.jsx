/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase
 * Ejemplo de usp de hooks para componente funcional
 * {cuando va a desaparecer}
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log('Comportamiento antes de que el componente desaparezca');
  }
  render() {
    return (
      <div>
        <h1>willunmount</h1>
      </div>
    );
  }
}

const WillUnMountHook = () => {
  useEffect(() => {
    effect;
    return () => {
      console.log('Comportamiento antes de que el componente desaparezca');
    };
  }, []);
  return (
    <div>
      <h1>willunmount</h1>
    </div>
  );
};
