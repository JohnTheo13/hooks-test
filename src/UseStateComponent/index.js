import React, { useState, useContext } from 'react';
import { types as type } from '../contextState/reducer';
import { StoreContext } from "../contextState/StoreProvider";
import { myDispatch } from '../contextState/actions';

const UseStateComponent = () => {
  const [value, change] = useState('');
  const { state: { supported, enabled }, dispatch } = useContext(StoreContext)
  const handleChange = ({ target: { value }}) => change(value);

  // const enable = new checkEnabled(dispatch);
  // const supporte = new checkSupport(dispatch);

  return (
    <div>
      <div>Input: {value}</div>
      <input value={value} onChange={handleChange} />
      <button onClick={() => dispatch({type: type.CHECK_SUPPORT, payload: !supported})}>Supported toggle</button>
      <button onClick={() => dispatch({type: type.CHECK_ENABLED, payload: !enabled})}>Enebled toggle</button>
    </div>
  )
};

export default UseStateComponent;
