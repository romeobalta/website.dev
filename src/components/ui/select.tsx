import { Listbox, Transition } from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

import { Button } from './button'

interface SelectProps {
  options: {
    [key: string]: string
  }
  selected: string | null
  onChange: (value: string | null) => void
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
        <div
          className={clsx(
            'border border-slate-900/20 p-2 bg-white text-slate-400 font-light text-sm hover:text-slate-900 [&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:border-slate-950',
            selected && 'pr-7 text-slate-950'
          )}
        >
          <Listbox.Button className="focus:outline-none">
            {selected ? options[selected] : placeholder}
          </Listbox.Button>
        </div>
        {selected && (
          <Button
            className="absolute inset-y-2 right-1 flex items-center p-0.5 border-white cursor-pointer hover:text-slate-950"
            onClick={() => onChange(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </Button>
        )}

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
