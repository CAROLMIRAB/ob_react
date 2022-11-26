/**
 * ejemplo de uso de ciclo de vida en componente clases
 * y el hook en ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
  componentDidMount() {
    console.log('Comportamiento antes de que se renderice');
  }

  render() {
    return <div></div>;
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log('Comportamiento antes del que componente renderice');
  }, []);
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
