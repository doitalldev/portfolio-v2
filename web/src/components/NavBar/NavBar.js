/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { routes, Link } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <div className="absolute left-0 bg-white top-0 w-full">
      <nav className="justify-between flex py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-4xl text-sky-600 font-bold">
          //refactor_this
          <span className="blinking-cursor text-white font-normal">|</span>
        </div>
        <div className="flex text-right">
          <Link to={routes.home()} className="nav-button">
            Home
          </Link>
          <Link to={routes.about()} className="nav-button">
            Blog
          </Link>
          <Link
            to={routes.contact()}
            className="bg-sky-600 rounded text-xl text-center px-4 py-2 hover:bg-sky-700 text-white"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
