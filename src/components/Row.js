import React from 'react';
import Cell from './Cell';


function Row (props) {
    let cells = [];
    for (let i = 0; i < props.rows.length; i++) {
        cells.push(<Cell live={props.rows[i]} />)
    }

    let rowStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div style={rowStyle}>
            {cells}
        </div>
    )
}

export default Row;
