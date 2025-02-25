import React from 'react'

const LinkComponent = ({url , text}) => {
  return (
    <a href={url}>{text}</a>
  )
}

export default LinkComponent