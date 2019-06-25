import React, { useReducer } from 'react';
import { onChangeReducer, initial, CHANGE } from '../shared';

const UseReducerComponent = () => {
  const [{ value }, dispatch] = useReducer(onChangeReducer, initial);
  return (
    <div>
      <div>Input: {value}</div>
      <input value={value} onChange={({target: {value}}) => dispatch({type: CHANGE, payload: value})} />
    </div>
  )
}

export default UseReducerComponent;
