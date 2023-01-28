import React, { useState, useEffect, useMemo, ReactNode } from 'react'
import { motion } from 'framer-motion'

export enum AnimateType {
  FADEIN = "FadeIn",
  SLIDEIN = "SlideIn",
  POPUP = "PopUp",
}

interface AnimateProps {
  children: ReactNode
  xOffset?: number
  yOffset?: number
  className?: string
  easing?: Array<number>
  delayOrder?: number
  delayOffset?: number
  animateType?: AnimateType
  animateClear?: boolean
}

export const AnimateWrapper = ({
  children,
  yOffset = 24,
  xOffset = 50,
  easing = [0.42, 0, 0.58, 1],
  delayOrder = 1,
  className,
  animateType,
  animateClear = false,
  delayOffset = 0.5,
  ...rest
}: AnimateProps) => {
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

  // SlideIn ==> Left to Right
  const SlideIn_variants = {
    hidden: { x: xOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  }

  // PopUp, FadeIn ==> Bottom to Up
  const FadeIn_variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  }

  return (
      !animateClear ? 

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={
            animateType === AnimateType.FADEIN ? FadeIn_variants : SlideIn_variants
          }
          className={className}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
        : <div className={`${className}`}>{ children }</div>
  )
}
