import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Frase = () => {
  const [frase, setFrase] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/frase')
      .then(response => {
        setFrase(response.data.frase);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <h1>{frase}</h1>
    </div>
  );
};

export default Frase;
