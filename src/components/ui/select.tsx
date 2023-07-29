'use client'

import { Listbox, Transition } from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

interface SelectProps {
  options: {
    [key: string]: string
  }
  selected: string | null
  onChange: (value: string) => void
  placeholder?: string
  reset?: string
}

export function Select({
  options,
  selected,
  onChange,
  placeholder,
  reset,
}: SelectProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="border border-slate-900/20 p-2 bg-white text-slate-400 font-light text-sm">
          {selected ? options[selected] : placeholder}
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white border border-slate-900/20 text-slate-900 focus:outline-none min-w-fit">
            {!!reset && (
              <Listbox.Option
                value={null}
                className={({ active }) =>
                  clsx(
                    `relative cursor-default select-none py-1.5 px-4 font-light text-sm whitespace-nowrap`,
                    active ? 'text-sky-500' : 'text-slate-900'
                  )
                }
              >
                {reset}
              </Listbox.Option>
            )}

            {Object.keys(options).map(option => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  clsx(
                    `relative cursor-default select-none py-1.5 px-4 font-light text-sm whitespace-nowrap`,
                    active ? 'text-sky-500' : 'text-slate-900'
                  )
                }
              >
                {options[option]}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
