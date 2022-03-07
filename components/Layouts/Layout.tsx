import React, { ReactNode } from 'react'
import Header from '../Patials/Header'

interface LayoutProps {
  wrapperClassName?: string
  children: ReactNode
}

const Layout = ({wrapperClassName, children }: LayoutProps) => {
  return (
    <>
      <main className={`${wrapperClassName}`} >
        <header className="absolute z-30 w-full">
          <Header />
        </header>
        { children }
      </main>
    </>
  )
}

export default Layout