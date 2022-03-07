import React, { ReactNode } from 'react'

interface SectionProps {
  wrapperClassName?: string
  children: ReactNode
  navigateID?: string
}

const Section = ({wrapperClassName, children, navigateID}: SectionProps) => {
  return (
    <>
      <section className={`${wrapperClassName}`} id={`${navigateID}`}>
        { children }
      </section>
    </>
  )
}

export default Section