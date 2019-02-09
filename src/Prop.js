import React from 'react';

const prop = (props) => {
   return (
    <p>{props.name} is a bad {props.gender} {props.children}</p>
   )
}

export default prop;