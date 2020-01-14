import React, { useReducer } from 'react';
import { onChangeReducer, CHANGE, initial } from '../shared';
import * as test from './Tester';
import SwitchTest from './TestSwitch';

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
  const Test = test[list[0]];
  return (
    <div>
      <div>Input: {value}</div>
      <input value={value} onChange={({target: {value}}) => dispatch({type: CHANGE, payload: value})} />
      <button type="button" onClick={() => dispatch({ type: ADD, payload: value })}>+</button>
      <button type="button" onClick={() => dispatch({ type: REMOVE })}>-</button>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>{!!Test && <SwitchTest at={list[0]} />}{!!Test && <Test />}</div>
    </div>
  );
};

export default ComposedComponent;
