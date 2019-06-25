import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' };
  }

  handleChange = ({ target: { value } }) =>  this.setState({ value });

  render() {
    const { value } = this.state;
    console.log(value)
    return (
      <div>
        <div>Input: {value}</div>
        <input onChange={this.handleChange} value={value} />
      </div>
    )
  }
}