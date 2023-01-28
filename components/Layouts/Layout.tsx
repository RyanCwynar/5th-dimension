import Head from 'next/head'
import React, { ReactNode } from 'react'
import Header from '../Patials/Header'

interface LayoutProps {
  className?: string
  children: ReactNode
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>5th Dimension</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${className}`}>
        <Header />
        {children}
      </main>
    </>
  )
}

export default Layout
