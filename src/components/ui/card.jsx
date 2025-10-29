import React from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`rounded-xl p-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
