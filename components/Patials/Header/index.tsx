import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { SlideIn } from '../AnimateWrapper'

const MenuAlt = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  )
}

const routes = [
  {
    to: 'topSection',
    className:
      'text-gradient-opacity block cursor-pointer font-RedHat text-xl font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Owlie NFTs',
  },
  {
    to: 'roadmap',
    className:
      'text-gradient-opacity block cursor-pointer font-RedHat text-xl font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Roadmap',
  },
  {
    to: 'lore',
    className:
      'text-gradient-opacity block cursor-pointer font-RedHat text-xl font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Lore',
  },
  {
    to: 'faq',
    className:
      'text-gradient-opacity block cursor-pointer font-RedHat text-xl font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'FAQ',
  },
  {
    to: 'team',
    className:
      'text-gradient-opacity block cursor-pointer font-RedHat text-xl font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Team',
  },
]

const MenuClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="absolute z-30 w-full">
      <nav>
        <div className="mx-auto max-w-[1440px] px-10">
          <div className="flex h-21 items-center justify-between">
            <div style={{ flex: 5 }}>
              <a href="/">
                <SlideIn xOffset={-100} delayOrder={1}>
                  <img
                    className="max-w-logo"
                    src="/5th-dimension-logo.png"
                    alt="Workflow"
                  />
                </SlideIn>
              </a>
            </div>
            <div
              className="mx-auto hidden max-w-[626px] lg:block"
              style={{ flex: 9 }}
            >
              <div className="flex items-baseline justify-between space-x-2">
                {routes.map((route, index) => (
                  <SlideIn
                    xOffset={-100}
                    delayOrder={1.5 + index * 0.5}
                    key={index}
                  >
                    <Link
                      to={route.to}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className={route.className}
                    >
                      {route.title}
                    </Link>
                  </SlideIn>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end" style={{ flex: 2 }}>
              <div className="hidden items-center justify-center lg:flex">
                <a href="#" className="social-link">
                  <SlideIn xOffset={-100} delayOrder={4}>
                    <img src="/Icons/IDiscord.png" className="mr-2" alt="" />
                  </SlideIn>
                </a>
                <a href="#" className="social-link">
                  <SlideIn xOffset={-100} delayOrder={4.5}>
                    <img src="/Icons/ITwitter.png" className="ml-2" alt="" />
                  </SlideIn>
                </a>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 outline-none lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <MenuAlt /> : <MenuClose />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="mx-auto max-w-[1440px] px-10">
              <div className="lg:hidden" id="mobile-menu">
                <div ref={ref} className="">
                  {routes.map((route, index) => (
                    <Link
                      to={route.to}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className={route.className}
                    >
                      {route.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Header
