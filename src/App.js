import React, { Fragment } from "react";
import "./App.css";
import ClassComponent from "./ClassComponent";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import ComposedComponent from "./ComposedComponent";
import StoreProvider from "./contextState/StoreProvider";
import CollapsingTest from "./CollapsingLIstTest";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <ClassComponent />
        <UseStateComponent />
        <UseReducerComponent />
        <ComposedComponent />
      </div>
      <div className="rest_test">
        <CollapsingTest />
      </div>
    </StoreProvider>
  );
}

export default App;
