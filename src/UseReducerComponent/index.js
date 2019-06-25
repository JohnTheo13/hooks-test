import React, { useReducer } from 'react';

const CHANGE = 'CHANGE';

const onChangeReducer = (state, { type, payload }) => {
  if (type === CHANGE) {
    return { ...state, value: payload };
  }
  return { ...state };
}

const initial = { value: '' };

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

export { CHANGE, onChangeReducer, initial };
