import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)

    const handleRef = () => {
        inputRef.current.focus();

        
    }



  return (
    <div>
      <input ref={inputRef} type="text" />
      
      <button onClick={handleRef}>Click</button>
      
    </div>
  )
}

export default UseRef