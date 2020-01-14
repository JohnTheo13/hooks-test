import React from 'react';

export const Span = ({ at, frm }) => { 
  const now = new Date();
  console.log(now.getMilliseconds(), frm)
  return <span>{at}</span>};

export default class SwitchTest extends React.Component {
  render () {
    const { at } = this.props;
    switch (at) {
      case 'Test':
        return <Span at="test" frm="switch" />
      case 'Test1':
        return <Span at="test1" frm="switch" />
      case 'Test2':
        return <Span at="test2" frm="switch" />
      case 'Test3':
        return <Span at="test3" frm="switch" />
      default:
        return null;
    }
  }
}
