import React from 'react'

export function Badge({ children, className = '', variant = 'outline', ...props }) {
  return (
    <span className={`px-2 py-1 rounded-md text-sm ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
