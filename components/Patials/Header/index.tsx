import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

const MenuAlt = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
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
      'text-gradient-opacity block cursor-pointer RedHatRegular text-buttonPrimary tablet:text-8 lg:text-5 font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Owlie NFTs',
  },
  {
    to: 'lore',
    className:
      'text-gradient-opacity block cursor-pointer RedHatRegular text-buttonPrimary tablet:text-8 lg:text-5 font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'About Us',
  },
  {
    to: 'team',
    className:
      'text-gradient-opacity block cursor-pointer RedHatRegular text-buttonPrimary tablet:text-8 lg:text-5 font-semibold leading-[26.46px] hover:bg-textGradient',
    title: 'Team',
  },
]

const MenuClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
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
  const resizeHanlder = () => {
    const width = window.innerWidth;

    if ( width > 1023 ) {
      setIsOpen(false)
    }
  };


  useEffect(() => {
    window.onresize = resizeHanlder;
  }, []);

  useEffect(() => {
    if ( isOpen ) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'scroll'
    
  }, [isOpen])

  return (
    <header className="absolute z-50 w-full">
      <nav>
        <div className="mx-auto max-w-[1440px] px-[14px] tablet:px-10">
          <div className="flex items-center justify-between h-16 tablet:h-21">
            <div style={{ flex: 5 }}>
              <a href="/">
                <AnimateWrapper animateType={AnimateType.SLIDEIN} xOffset={-100} delayOrder={1}>
                  <img
                    className="max-w-[240px] tablet:max-w-[308px] -ml-3 tablet:-ml-6"
                    src="/5th-logo.png"
                    alt="Workflow"
                  />
                </AnimateWrapper>
              </a>
            </div>
            <div
              className="mx-auto hidden max-w-[626px] lg:block"
              style={{ flex: 9 }}
            >
              <div className="flex items-baseline justify-evenly space-x-2">
                {routes.map((route, index) => (
                  <AnimateWrapper
                    xOffset={-100}
                    delayOrder={1.5 + index * 0.5}
                    animateType={AnimateType.SLIDEIN}
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
                  </AnimateWrapper>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end" style={{ flex: 2 }}>
              <div className="items-center justify-center hidden lg:flex">
                <a href="https://discord.gg/BW4XKRhyHs" target={'_blank'} className="social-link">
                  <AnimateWrapper xOffset={-100} delayOrder={4} animateType={AnimateType.SLIDEIN}>
                    <img src="/Icons/IDiscord.png" className="mr-2 max-w-[44px]" alt="" />
                  </AnimateWrapper>
                </a>
                <a href="https://twitter.com/5thDimension_io " target={'_blank'} className="social-link">
                  <AnimateWrapper xOffset={-100} delayOrder={4.5} animateType={AnimateType.SLIDEIN}>
                    <img src="/Icons/ITwitter.png" className="ml-2 max-w-[40px]" alt="" />
                  </AnimateWrapper>
                </a>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="fixed inline-flex items-center justify-center p-2 rounded-md outline-none lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <img src='/Icons/IOpen.svg' className='w-[24px]' /> : ""}
              </button>
            </div>
          </div>
        </div>

        <div className={`fixed top-0 z-40 w-full h-screen mobile-header lg:hidden bg-black bg-opacity-50 ${!isOpen ? '-left-full' : 'left-0'}`}>
        </div>
        <div className={`bg-headerGradient fixed top-0 z-50 w-[300px] lg:hidden tablet:w-[500px] transition-all duration-500 h-full ml-auto ${!isOpen ? '-right-full' : 'right-0'}`}>
          <img src="/Icons/IClose.svg" className='w-[18px] tablet:w-[24px] absolute top-3 right-5 tablet:top-8 tablet:right-9' onClick={() => setIsOpen(false)} alt="" />
          <div className="flex flex-col items-center justify-center h-full space-x-2">
            {routes.map((route, index) => (
              // <SlideIn
              //   xOffset={-100}
              //   delayOrder={1.5 + index * 0.5}
              //   key={index}
              // >
                <Link
                  to={route.to}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`${route.className} mb-5 lg:mb-[50px]`}
                  key={index}
                >
                  {route.title}
                </Link>
              // </SlideIn>
            ))}
            <div className="flex items-center justify-center lg:hidden mt-[47px] lg:mt-[87px]">
              <a href="https://discord.gg/BW4XKRhyHs" target={'_blank'} className="social-link">
                {/* <SlideIn xOffset={-100} delayOrder={4}> */}
                  <img src="/Icons/IDiscord.png" className="mr-2 max-w-[44px]" alt="" />
                {/* </SlideIn> */}
              </a>
              <a href="https://twitter.com/5thDimension_io " target={'_blank'} className="social-link">
                {/* <SlideIn xOffset={-100} delayOrder={4.5}> */}
                  <img src="/Icons/ITwitter.png" className="ml-2 max-w-[40px]" alt="" />
                {/* </SlideIn> */}
              </a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header
