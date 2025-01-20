import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue, bigKey }) {
    const { board, setBoard, currAttempt, setCurrAttempt,
        onSelectLetter, onEnter, onDelete
    } = useContext(AppContext);

    return (
        <div className='key' id={bigKey ? 'big' : undefined}
            onClick={() => {
                if (keyValue === 'ENTER') {
                    onEnter();
                } else if (keyValue === 'DELETE') {
                    onDelete();
                } else {
                    onSelectLetter(keyValue);
                }
            }}>{keyValue}</div>
    )
}

export default Key;