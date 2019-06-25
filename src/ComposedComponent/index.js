import React, { useReducer } from 'react';
import { onChangeReducer, CHANGE, initial } from '../shared';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const updateListReducer = (state, { type, payload }) => {
  const { list } = state;
  if (type === ADD) {
    list.push(payload);
    return { ...state, list, value: '' };
  } else if (type === REMOVE) {
    list.pop();
    return { ...state, list };
  }
};

const reducerHandler = (state, action) => {
  if (action.type.startsWith("C")) {
    return onChangeReducer(state, action);
  } 
  return updateListReducer(state, action);
};

initial.list = [];

const ComposedComponent = () => {
  const [{ value, list }, dispatch] = useReducer(reducerHandler, initial);
  return (
    <div>
      <div>Input: {value}</div>
      <input value={value} onChange={({target: {value}}) => dispatch({type: CHANGE, payload: value})} />
      <button type="button" onClick={() => dispatch({ type: ADD, payload: value })}>+</button>
      <button type="button" onClick={() => dispatch({ type: REMOVE })}>-</button>
      <div>{list.map(el => <div key={el}>{el}</div>)}</div>
    </div>
  );
};

export default ComposedComponent;
