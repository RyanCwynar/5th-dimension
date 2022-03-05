import React, { ReactNode } from 'react'
import { ButtonSize } from '../../../types/types'

import styles from '../../../styles/components/button.module.css'

interface ButtonProps {
  className?: string
  children: string | ReactNode
  size?: ButtonSize
  outline?: boolean
}

const Button = ({
  className,
  children,
  size = ButtonSize.PRIMARY,
  outline = false,
}: ButtonProps) => {
  const baseClassName =
    size === ButtonSize.PRIMARY
      ? `h-[3.75rem] max-w-[268px] bg-buttonGradient py-[13px] px-14 text-buttonPrimary font-bold text-white hover:bg-buttonGradientHover`
      : size === ButtonSize.SMALL && !outline
      ? `h-[34px] max-w-[90px] font-semibold bg-buttonGradient py-2 text-center text-buttonSmall text-white hover:bg-buttonGradientHover`
      : `max-w-[90px]`

  return (
    <>
      <button
        className={`${className} w-full rounded-[20px] font-RedHat transition-all duration-1000 ${baseClassName}`}
      >
        {!outline ? (
          children
        ) : (
          <>
            <div className="h-[34px] w-full rounded-[20px] bg-featureWrapperGradient p-[.15rem] font-semibold">
              <div className="h-full rounded-2xl bg-black text-white">
                <div className="outlineButton flex h-full w-full items-center justify-center rounded-lg bg-featureGradient hover:bg-featureGradientHover">
                  <span>{children}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </button>
    </>
  )
}

export default Button
