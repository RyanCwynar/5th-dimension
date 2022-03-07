import React, { ReactNode } from 'react'
import Header from '../Patials/Header'

interface LayoutProps {
  className?: string
  children: ReactNode
}

const Layout = ({className, children }: LayoutProps) => {
  return (
    <>
      <main className={`${className}`} >
        <header className="absolute z-30 w-full">
          <Header />
        </header>
        { children }
      </main>
    </>
  )
}

export default Layout