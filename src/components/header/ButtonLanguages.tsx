'use client'
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  en: string,
  es: string,
  current: string
}

function classNames(...classes : Array<string>) {
    return classes.filter(Boolean).join(' ');
}

const ButtonLanguage = ({ en, es, current } : ButtonProps) => {

  const router = useRouter();

  const redirectToLanguage = () => {
    
    if(current === 'es') {
      router.push('/en');
    } else {
      router.push('/es');
    }
  };

    return (
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500">
          {current == 'es' ? es : en }
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items 
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onClick={redirectToLanguage}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-500 text-gray' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {current == 'es' ? en : es }
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    );
}

export default ButtonLanguage;
