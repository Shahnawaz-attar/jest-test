import React, { forwardRef } from 'react'

const Fchild = forwardRef((props ,ref)=>{
    return <div ref={ref}>hellow</div>;
}) 

export default Fchild