import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonSize } from '../../../types/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: string | ReactNode
  size?: ButtonSize
  outline?: boolean
  rest?: Record<string, any>
}

const Button = ({
  className,
  children,
  size = ButtonSize.PRIMARY,
  outline = false,
  ...rest
}: ButtonProps) => {
  const baseClassName =
    size === ButtonSize.PRIMARY
      ? `h-[42px] xl:h-[3.75rem] max-w-[186px] xl:max-w-[268px] bg-buttonGradient py-[13px] pl-4 text-buttonSmall xl:text-buttonPrimary font-bold text-white hover:bg-buttonGradientHover`
      : size === ButtonSize.SMALL && !outline
      ? `h-6 xl:h-[34px] max-w-[64px] xl:max-w-[90px] font-semibold bg-buttonGradient xl:py-2 text-center text-2.5 xl:text-buttonSmall text-white hover:bg-buttonGradientHover`
      : `max-w-[64px] xl:max-w-[90px] font-semibold`

  return (
      <button
        className={`${className} w-full rounded-[20px] font-RedHat transition-all duration-1000 ${baseClassName}`}
        {...rest}
      >
        {!outline ? (
          children
        ) : (
          <>
            <div className="h-6 xl:h-[34px] w-full rounded-[20px] bg-featureWrapperGradient p-[2px] text-2.5 xl:text-buttonSmall xl:p-[.15rem] font-semibold">
              <div className="h-full text-white bg-black rounded-2xl">
                <div className="flex items-center justify-center w-full h-full rounded-lg outlineButton bg-featureGradient hover:bg-featureGradientHover">
                  <span>{children}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </button>
  )
}

export default Button
