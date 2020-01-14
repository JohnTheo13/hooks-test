import React from 'react';

export default class AbstractTest extends React.Component {
  content =  undefined;
  render () {
    return (
      <div className="test_container">{this.content}</div>
    )
  }
}
