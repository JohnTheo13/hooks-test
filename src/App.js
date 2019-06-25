import React from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import UseStateComponent from './UseStateComponent';
import UseReducerComponent from './UseReducerComponent';
import ComposedComponent from './ComposedComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <UseStateComponent />
      <UseReducerComponent />
      <ComposedComponent />
    </div>
  );
}

export default App;
