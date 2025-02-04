import React from 'react'

const Child = React.memo(({count})=>{
    console.log("child");
    return <div>{count}</div>;
})
export default Child