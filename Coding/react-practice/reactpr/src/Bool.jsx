import React, { useState } from 'react';

const Bool = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;


    // Check if the input is valid
    const isValidInput = /^[a-zA-Z\s]+$/.test(inputValue) && inputValue.length >= 3;

    // Update state
    setInputValue(inputValue);
    setIsValid(isValidInput);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text" />
      <p>{ `Is Valid: ${isValid}` }</p>
    </div>
  );
};

export default Bool
