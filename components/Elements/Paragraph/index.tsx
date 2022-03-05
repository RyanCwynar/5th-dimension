import React, { ReactNode } from 'react'

interface ParagraphProps {
  className?: string
  children?: ReactNode
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <>
      <p className={`font-RedHat ${className}`}>{children}</p>
    </>
  )
}

export default Paragraph
