'use client'

import { clsx } from 'clsx'
import React, { HTMLProps } from 'react'

export type ButtonProps = HTMLProps<HTMLButtonElement>

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline text-center p-2 text-sm font-light border border-slate-900/20 bg-white text-slate-400',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
