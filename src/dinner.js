import React from 'react';

function Dinner(props) {
  return (
    <div className="App">
    <h1>today we are having {props.dishname}</h1>
    <h1>we are having  {props.sweetdish} also</h1>
    </div>
  );
}

export default Dinner;
