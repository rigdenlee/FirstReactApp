import React from 'react';

const prop = (props) => {
   return (
   <div>
    <p onClick={props.click}>{props.name} is a bad {props.gender} {props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
   </div>
   )
}

export default prop;