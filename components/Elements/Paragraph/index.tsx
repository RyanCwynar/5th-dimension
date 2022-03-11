import React, { ReactNode } from 'react'

interface ParagraphProps {
  className?: string
  children?: ReactNode
}

const Paragraph = ({ className, children, ...rest }: ParagraphProps) => {
  return (
    <>
      <p className={`font-RedHat ${className}`} {...rest}>{children}</p>
    </>
  )
}

export default Paragraph
