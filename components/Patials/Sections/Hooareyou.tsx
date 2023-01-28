import React from 'react'
import Heading from '../../Elements/Heading'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'
import Paragraph from '../../Elements/Paragraph'
import { HooLeft, HooRight } from '../../Elements/Icons/Icons'

export const Hooareyou = () => {
  return (
    <Section
      className="mx-auto max-w-[500px] px-[10px] pt-14 tablet:max-w-[900px] tablet:px-10 tablet:pt-[140px] xl:max-w-[1298px]"
      navigateID="topSection"
    >
      <AnimateWrapper
        xOffset={-100}
        delayOrder={1}
        animateType={AnimateType.SLIDEIN}
      >
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          Hoo Are You?
        </Heading>
      </AnimateWrapper>
      <AnimateWrapper
        xOffset={-100}
        delayOrder={1.5}
        animateType={AnimateType.SLIDEIN}
      >
        <div className="relative mt-[18px] flex flex-col items-center text-center tablet:mt-[31px] tablet:flex-row">
          <div className="absolute left-0 hidden max-w-[170px] tablet:block">
            <HooLeft width="100%" />
          </div>
          <div className="mx-auto">
            <Paragraph className="mt-1 leading-6 font-RedHat text-3 text-primary tablet:mt-2 tablet:text-4 xl:mt-3 xl:text-headingMobile">
              <span className="font-RedHatBold">Talented artist</span> who feels
              like your time is being wasted at a day job.
            </Paragraph>
            <Paragraph className="mt-1 leading-6 font-RedHat text-3 text-primary tablet:mt-2 tablet:text-4 xl:mt-3 xl:text-headingMobile">
              <span className="font-RedHatBold">NFT investor</span> who wants
              access to the hottest new projects.
            </Paragraph>
            <Paragraph className="mt-1 leading-6 font-RedHat text-3 text-primary tablet:mt-2 tablet:text-4 xl:mt-3 xl:text-headingMobile">
              <span className="font-RedHatBold">Fan of art and music</span> who
              wants to get close with the creatives.
            </Paragraph>
            <Paragraph className="mt-1 leading-6 font-RedHat text-3 text-primary tablet:mt-2 tablet:text-4 xl:mt-3 xl:text-headingMobile">
              <span className="font-RedHatBold">
                Aspiring artist or musician
              </span>{' '}
              looking to improve your craft.
            </Paragraph>
          </div>
          <div className="absolute right-0 hidden max-w-[170px] tablet:block">
            <HooRight width="100%" />
          </div>
        </div>
      </AnimateWrapper>
    </Section>
  )
}
