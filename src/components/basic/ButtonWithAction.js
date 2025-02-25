import React from 'react'

const ButtonWithAction = ({onAction}) => {
  return (
    <button onClick={onAction}>Click Me</button>
  )
}

export default ButtonWithAction