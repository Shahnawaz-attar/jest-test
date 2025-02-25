import React from 'react'

const Welcome = ({name = "Guest"}) => {
  return (
    <div>{name}</div>
  )
}

export default Welcome