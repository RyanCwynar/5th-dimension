import React, { useState, useEffect, useMemo, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  yOffset?: number
  className?: string
  easing?: Array<number>
  delayOrder?: number
  delayOffset?: number
}

export const FadeIn = ({
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  delayOrder = 1,
  className,
  delayOffset = 0.3,
  ...rest
}: FadeInProps) => {
  const [delay, setDelay] = useState(0.25)

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * delayOffset)
  }, [delayOrder, delayOffset])

  const transition = useMemo(
    () => ({
      duration: 0.5,
      delay,
      ease: easing,
    }),
    [delay, easing]
  )

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
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
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
