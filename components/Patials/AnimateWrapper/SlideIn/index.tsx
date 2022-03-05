import React, { useState, useEffect, useMemo, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideInProps {
  children: ReactNode
  xOffset?: number
  className?: string
  easing?: Array<number>
  delayOrder?: number
  delayOffset?: number
}

export const SlideIn = ({
  children,
  xOffset = 50,
  easing = [0.42, 0, 0.58, 1],
  delayOrder = 1,
  className,
  delayOffset = 0.5,
  ...rest
}: SlideInProps) => {
  const [delay, setDelay] = useState(0.25)

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * delayOffset)
  }, [delayOrder, delayOffset])

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing,
    }),
    [delay, easing]
  )

  const variants = {
    hidden: { x: xOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={variants}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
