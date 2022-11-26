/**
 * ejemplo de uso de ciclo de vida en componente clases
 * y el hook en ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props o cambios en sus componentes privados'
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props o cambios en sus componentes privados'
    );
  });
  return (
    <div>
      <h1>DidUpdateHook </h1>
    </div>
  );
};
