import React from 'react'
import { featureData } from '../../../data/data'
import { ButtonSize } from '../../../types/types'
import Button from '../../Elements/Button'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const CreateOwileSection = () => {
  return (
    <Section className="mx-auto mt-[89px] tablet:mt-[133px] max-w-[500px] tablet:max-w-[900px] xl:max-w-[1120px] px-6 tablet:px-[45px] xl:px-[55px]">
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="block text-center text-white text-headingMobile tablet:hidden">
          Create Your Owlie
        </Heading>
      </AnimateWrapper>
      <div className="flex flex-col tablet:flex-row items-center tablet:items-end w-full mx-auto mt-[30px] tablet:mt-0">
        <div className="w-full max-w-[220px] tablet:max-w-[316px] xl:max-w-[465px]">
          <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN} className="hidden tablet:block"> {/** Slide right to left on mobile */}
            <img src="/custom-owile.png" alt="" className='rounded-[20px]' />
          </AnimateWrapper>
          <AnimateWrapper xOffset={100} delayOrder={1} animateType={AnimateType.SLIDEIN} className="block tablet:hidden">
            <img src="/custom-owile.png" alt="" className='rounded-[20px]' />
          </AnimateWrapper>
        </div>
        <div className="flex-grow pl-0 tablet:pl-16 xl:pl-24 mt-[30px] tablet:mt-0">
          <AnimateWrapper xOffset={100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
            <Heading className="hidden text-white text-headingMobile tablet:text-8 xl:text-heading tablet:block">
              Create Your Owlie
            </Heading>
          </AnimateWrapper>
          <AnimateWrapper yOffset={0} delayOrder={1.5} animateType={AnimateType.FADEIN}>
            <Paragraph className="mt-2 text-3.75 tablet:text-5 xl:text-content text-primary text-center tablet:text-left">
              Randomly generate a feature:
            </Paragraph>
          </AnimateWrapper>
          <div className="mt-[14px] xl:mt-6">
            <div className="feature-container grid max-w-[294px] xl:max-w-[430px] grid-cols-3 gap-2 tablet:gap-3 xl:gap-5">
              {featureData.map((feature, index) => (
                <AnimateWrapper yOffset={50} delayOrder={1.5 + index * 0.5} animateType={AnimateType.FADEIN} key={index} className="h-[90px] w-[90px] xl:h-[130px] xl:w-[130px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1">
                  <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                    <div className="h-full w-full rounded-lg bg-featureGradient xl:px-[22px] pt-3 pb-2 text-center hover:bg-featureGradientHover">
                      <div className="mx-auto flex h-full max-h-[50px] max-w-[50px] xl:max-h-[75px] w-full xl:max-w-[75px] flex-col justify-center">
                        <img
                          src={feature.img}
                          className="mx-auto"
                          alt=""
                        />
                      </div>
                      <p className="text-gradient text-2.5 xl:text-buttonSmall mt-1">
                        {feature.featureTitle}
                      </p>
                    </div>
                  </div>
                </AnimateWrapper>
              ))}
            </div>
          </div>
          <AnimateWrapper animateType={AnimateType.FADEIN} yOffset={0} delayOrder={4} className="xl:mt-6 mt-[14px]">
            <div className="flex items-center justify-center tablet:justify-start">
              <Button size={ButtonSize.SMALL} className="">
                <span className="flex items-center justify-start ml-2">
                  <img src="/Icons/Reset.svg" className="mr-1" alt="" />
                  Undo
                </span>
              </Button>
              <Button
                size={ButtonSize.SMALL}
                outline={true}
                className="ml-2 tablet:ml-[14px]"
              >
                Restart
              </Button>
            </div>
          </AnimateWrapper>
        </div>
      </div>
    </Section>
  )
}
