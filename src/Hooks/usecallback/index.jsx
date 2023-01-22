import React, { useCallback, useState } from 'react'
import ChildA from './childA'

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);

    const show = useCallback(() => {
        console.log('show function clicked...')
        return `My name is surendra`;
    }, [])

    return (
        <>
            <div className='main'>
                <h2>{add}</h2>
                <button onClick={() => setAdd(add + 2)}>Add</button>
                <ChildA show={show} />

                <button onClick={() => setCount(count + 1)}> Increment</button>
                <h1>count: {count}</h1>
                <button onClick={() => setCount(count - 1)}> Decrement</button>


            </div>

        </>
    )
}

export default UseCallback