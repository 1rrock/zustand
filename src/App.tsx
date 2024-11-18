import React from 'react';
import {useStoreCount, useStoreInc} from './store/store';

function Counter() {
    const count = useStoreCount();
    const inc = useStoreInc();

    return (
        <div>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
        </div>
    )
}

export default Counter;
