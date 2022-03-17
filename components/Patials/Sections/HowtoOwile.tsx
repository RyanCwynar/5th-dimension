import React from 'react'
import { methodData } from '../../../data/data'
import { ButtonSize } from '../../../types/types'
import Button from '../../Elements/Button'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const HowtoOwileSection = () => {
  return (
    <Section className="mx-auto mt-[86px] tablet:mt-36 xl:mt-40 max-w-[500px] tablet:max-w-[900px] xl:max-w-[1240px] px-5 text-center">
      <AnimateWrapper xOffset={-150} delayOrder={.5} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          How to Get an Owlie
        </Heading>
      </AnimateWrapper>
      <div className="grid-cols-1 tablet:grid-cols-3 method-container gap-x-5 gap-y-6 mt-[33px] tablet:mt-9 xl:mt-14 hidden tablet:grid"> {/** Slide right to left and left to right */}
        {methodData.map((method, index) => (
          <AnimateWrapper
            animateType={AnimateType.FADEIN} 
            yOffset={50}
            delayOrder={1.5 + index * 0.5}
            className="method-item"
            key={index}
          >
            <div
              className="mx-auto h-45 xl:h-[268px] w-full max-w-[180px] xl:max-w-[268px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
            >
              <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-featureGradient px-[22px] pt-[18px] pb-3 text-center hover:bg-featureGradientHover">
                  <div className='max-w-[150px] max-h-[150px] mx-auto flex h-full flex-col justify-center'>
                    <img src={method.img} className="mx-auto" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <Paragraph className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
              {method.title}
            </Paragraph>
            <Paragraph className="mx-auto tablet:max-w-[342px] text-center text-3 tablet:text-4 xl:text-contentSmall text-primary max-w-[230px]">
              {method.description}
            </Paragraph>
          </AnimateWrapper>
        ))}
      </div>
      <div className="grid tablet:hidden grid-cols-1 tablet:grid-cols-3 method-container gap-y-6 mt-[33px] tablet:mt-9 xl:mt-14">
        {methodData.map((method, index) => (
          <AnimateWrapper
            animateType={AnimateType.SLIDEIN} 
            xOffset={index % 2 === 0 ? 100 : -100}
            delayOrder={1.5 + index * 0.5}
            className="method-item"
            key={index}
          >
            <div
              className="mx-auto h-45 xl:h-[268px] w-full max-w-[180px] xl:max-w-[268px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
            >
              <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-featureGradient px-[22px] pt-[18px] pb-3 text-center hover:bg-featureGradientHover">
                  <img src={method.img} className="mx-auto" alt="" />
                </div>
              </div>
            </div>
            <Paragraph className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
              {method.title}
            </Paragraph>
            <Paragraph className="mx-auto tablet:max-w-[342px] text-center text-3 tablet:text-4 xl:text-contentSmall text-primary max-w-[230px]">
              {method.description}
            </Paragraph>
          </AnimateWrapper>
        ))}
      </div>
      <AnimateWrapper yOffset={0} delayOrder={3} animateType={AnimateType.FADEIN}>
        <Button size={ButtonSize.PRIMARY} className="mt-10 xl:mt-[72px]" onClick={() => window.open('https://discord.gg/BW4XKRhyHs', '_blank')}>
          <span className="flex items-center justify-start ml-2">
            <img src="/Icons/IDiscord-white.svg" className="mr-[14px] w-7 xl:w-[38px]" alt="" />
            Join Discord
          </span>
        </Button>
      </AnimateWrapper>
    </Section>
  )
}
