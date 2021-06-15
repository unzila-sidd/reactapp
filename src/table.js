import React from 'react';
function Table(props){
    return(
        <div className="App">
            <h1>multiplication</h1>
            <p>10X5 = {props.Number*10}</p>
           
        </div>
       )
}
export default Table;