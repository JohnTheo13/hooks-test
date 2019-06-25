import React, { useState } from 'react';

const UseStateComponent = () => {
  const [value, change] = useState('');

  const handleChange = ({ target: { value }}) => change(value);

  return (
    <div>
      <div>Input: {value}</div>
      <input value={value} onChange={handleChange} />
    </div>
  )
};

export default UseStateComponent;
