import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import { Fragment, useState } from 'react'

export type ToggleOptions = {
  title: string
  value: string
  description: string
  current?: boolean
}

type Props = {
  options: ToggleOptions[]
  onClick: (opt: ToggleOptions) => void
}

export default function EmailToggle({ options, onClick }: Props) {
  const [selected, setSelected] = useState(options[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Change email sending</Listbox.Label>
          <div className="relative">
            <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
              <div className="relative z-0 inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                <button
                  className="relative inline-flex items-center rounded-l-md border border-transparent bg-indigo-500 py-2 pl-3 pr-4 text-white shadow-sm hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={(e) => onClick(selected)}
                >
                  <span className="ml-2.5 text-sm font-medium">{selected.title}</span>
                </button>
                <Listbox.Button className="relative inline-flex items-center rounded-l-none rounded-r-md bg-indigo-500 p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      cx(
                        active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                        'relative cursor-pointer select-none p-4 text-sm'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          {selected && (
                            <span
                              className={cx('mr-2', {
                                'text-white': active,
                                'text-indigo-500': !active,
                              })}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                          <p className={selected ? 'font-semibold' : 'font-normal'}>
                            {option.title}
                          </p>
                        </div>
                        <p className={cx(active ? 'text-indigo-200' : 'text-gray-500', 'mt-2')}>
                          {option.description}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
