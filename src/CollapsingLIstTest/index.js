import React, { useState } from 'react';
import { onChangeReducer, initial, CHANGE } from '../shared';

export default () => {
  const [closed, toggle] = useState(true)
  const arr = new Array(7);
  arr.fill('sakta')
  return (
    <div style={{display: 'flex', marginTop: 100 }}>
      <div>
        {arr.map((it, index) => <div key={index} style={{display: index !== 3 && closed ? 'none' : 'block'}}>{it}</div>)}
      </div>
      <div style={{marginLeft: '30px'}}>
        <button onClick={() => toggle(!closed)} >{closed ? 'closed' : 'open'}</button>
      </div>
    </div>
  )
}

