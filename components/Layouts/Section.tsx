import React, { ReactNode } from 'react'

interface SectionProps {
  className?: string
  children: ReactNode
  navigateID?: string
}

const Section = ({className, children, navigateID}: SectionProps) => {
  return (
    <>
      <section className={`${className}`} id={`${navigateID}`}>
        { children }
      </section>
    </>
  )
}

export default Section