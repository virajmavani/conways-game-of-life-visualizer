import React from 'react';
import './Cell.css';


function Cell (props) {
    const divStyle = {
        width: '10px',
        height: '10px'
    };

    let isActive = 'inactive';

    if ( props.live ) {
        isActive = 'active';
    }
    return (
        <div className={isActive} style={divStyle} />
    )
};

export default Cell;
