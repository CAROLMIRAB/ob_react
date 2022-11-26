/**
 * componente que dispones de los metodos de ciclo de vida
 */
import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor() {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('WillMount: antes del montaje del componente');
  }

  componentDidMount() {
    console.log('DidMount: se hace al montaje y justo antes de renderizarlo ');
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps: si va  a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * controlar si el componente debe o no actualizarse
     */
  }

  componentWillUpdate() {
    console.log('WillUpdate: justo antes de actualizarce');
  }

  componentDidUpdate() {
    console.log('DidUpdate: justo despues de actualizarce');
  }

  componentWillUnmount() {
    console.log('WillUnmount: justo antes de desaparecer');
  }

  render() {
    return <div></div>;
  }
}
