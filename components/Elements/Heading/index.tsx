import React, { ReactNode } from 'react'

interface HeadingProps {
  className?: string
  children?: ReactNode
}

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <>
      <h2 className={` font-RedRose font-bold ${className}`}>{children}</h2>
    </>
  )
}

export default Heading
