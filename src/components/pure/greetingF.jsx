import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {
  //BREVE INTRODUCCION A useState

  const [age, setAge] = useState(29);
  const birthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h1>hola {props.name} desde componente funcional</h1>
      <h2> tu edad es de: {age}</h2>
      <button onClick={birthday}> Cumplir años</button>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
