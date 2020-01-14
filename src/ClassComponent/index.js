import React, { Component } from 'react';
import { StoreContext } from '../contextState/StoreProvider';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', context: {} };
  }

  handleChange = ({ target: { value } }) =>  this.setState({ value });

  render() {
    const { value } = this.state;
    const { state: { supported, enabled } } = this.context;
    // console.log(supported)
    return (
      <div>
        <div>Input: {value}</div>
        <input onChange={this.handleChange} value={value} />
        <div><strong>supported: </strong><span>{supported.toString()}</span></div>
        <div><strong>enabled: </strong><span>{enabled.toString()}</span></div>
      </div>
    )
  }
};

ClassComponent.contextType = StoreContext;