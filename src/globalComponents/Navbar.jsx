import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom'
import headerLogo from '../resource/headerlogo.png'

import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";
import { RiLightbulbFlashLine } from "@react-icons/all-files/ri/RiLightbulbFlashLine";
import { VscRadioTower } from "@react-icons/all-files/vsc/VscRadioTower";

const user = {
    name: 'Abdul Jabbar',
    email: 'admin@abduljabbar.xyz',
    imageUrl:
        'https://i.ibb.co/41MgcHn/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.png',
}
const navigation = [
    { name: 'HOME', to: '/', current: false },
    {
        name: 'DEPARTMENTS', to: '/departments', current: false,
        submenu: [
            { name: 'CSE', to: '/cse', icon: <FaDatabase /> },
            { name: 'EEE', to: '/', icon: <RiLightbulbFlashLine /> },
            { name: 'DTE', to: '/', icon: <VscRadioTower /> },
        ]
    },
    { name: 'CONTACT', to: '/contactwithus', current: false },
    { name: 'NEWS', to: '/news', current: false },
    { name: 'ADMIN INFO', to: '/admininfo', current: false },
    { name: 'LOGIN', to: '/login', current: false },
    { name: 'REPORTS', to: '/reports', current: false },
]
const userNavigation = [
    { name: 'Your Profile', to: '/studentdash' },
    { name: 'Settings', to: '/' },
    { name: 'Sign out', to: '/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
            <div className="min-h-full sticky z-50 top-0">
                <Disclosure as="nav" className="bg-white shadow">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-20">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to={'/'}>
                                                <img
                                                    className="h-16 w-16"
                                                    src={headerLogo}
                                                    alt="MIST Logo"
                                                />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item, i) => (
                                                    item.submenu ? <div key={i}>
                                                        <Menu as="div" className=" relative text-left p-0 m-0">
                                                            <NavLink to={item.to}
                                                                className={({ isActive }) => {
                                                                    item.current = true
                                                                    return (isActive ? 'bg-gray-800 text-white ' : 'color_text hover:bg-gray-800 hover:text-white ').concat(' inline-flex justify-start px-3 py-2 rounded-md text-sm font-medium')
                                                                }
                                                                }>
                                                                {item.name}
                                                                <Menu.Button >
                                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                                </Menu.Button>
                                                            </NavLink>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="origin-top absolute z-50 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 focus:outline-none">
                                                                    <div className="py-1">
                                                                        {item.submenu && item.submenu.map((items, i) => {
                                                                            return (
                                                                                <Menu.Item key={i}>
                                                                                    {({ active }) => (
                                                                                        <Link to={items.to}
                                                                                            className={classNames(
                                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                'block px-4 py-2  text-sm'
                                                                                            )}
                                                                                        >
                                                                                            <span className='flex items-center gap-3'>
                                                                                                <span>{items.icon}</span>
                                                                                                {items.name}
                                                                                            </span>
                                                                                        </Link>
                                                                                    )}
                                                                                </Menu.Item>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </Menu></div> :
                                                        <NavLink
                                                            key={item.name}
                                                            to={item.to}

                                                            className={({ isActive }) => {
                                                                item.current = true
                                                                return (isActive ? 'bg-gray-800 text-white ' : 'color_text hover:bg-gray-800 hover:text-white ').concat('px-3 py-2 rounded-md text-sm font-medium')
                                                            }
                                                            }
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">


                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
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
                                                    <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48  shadow-lg  bg-white ring-1 focus:outline-none">
                                                        {userNavigation.map((item, i) => (
                                                            <Menu.Item key={i}>
                                                                <Link to={item.to}
                                                                    className={'bg-gray-100 text-gray-900 block px-4 py-2 hover:bg-slate-800 hover:text-slate-100 text-sm'}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                    {navigation.map((item, i) => (
                                        item.submenu ?
                                            <Menu as="div" key={i} className=" relative text-left p-0 m-0">
                                                <Link to={item.to} className="inline-flex justify-start w-full pl-3 py-2 mt-0 rounded-md text-base font-medium color_text hover:text-white hover:bg-gray-700 ">
                                                    {item.name}
                                                    <Menu.Button className=' pr-3 '>
                                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                    </Menu.Button>
                                                </Link>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1  focus:outline-none">
                                                        <div className="py-1">
                                                            {item.submenu && item.submenu.map((items, i) => {
                                                                return (
                                                                    <Menu.Item key={i}>
                                                                        {({ active }) => (
                                                                            <Link to={items.to}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                    'block px-4 py-2 text-sm'
                                                                                )}
                                                                            >
                                                                                <span className='flex items-center gap-3'>
                                                                                    <span>{items.icon}</span>
                                                                                    {items.name}
                                                                                </span>
                                                                            </Link>
                                                                        )}
                                                                    </Menu.Item>
                                                                )
                                                            })}
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                            :

                                            <NavLink
                                                key={item.name}
                                                to={item.to}

                                                className={({ isActive }) => {
                                                    item.current = true
                                                    return (isActive ? 'color_text text-white ' : 'color_text hover:bg-gray-700 hover:text-white ').concat('px-3 py-2 w-full block rounded-md text-sm font-medium')
                                                }
                                                }
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>

                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item, i) => (
                                            <Disclosure.Button
                                                key={i}
                                                as="a"
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>



            </div>
        </>
    )
}