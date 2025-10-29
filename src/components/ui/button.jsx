import React from 'react'

export function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center rounded-lg px-4 py-2 font-medium'
  const variants = {
    solid: 'bg-white/6 text-white',
    outline: 'border border-white/20 text-white bg-transparent'
  }
  return (
    <button className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
