import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className={`w-[min(80%,78.75rem)] mx-auto ${styles}`}>
     {children}
    </div>
  )
}

export default Wrapper