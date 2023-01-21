import React, { memo } from 'react'
const ChildA = ({ props}) => {
    const name = props;
        console.log(`child compo A clicked..${name}`)
    return (
        <div>
            <h1>Child ComponentA: {name}</h1>
        </div>
    )
}

export default memo(ChildA)