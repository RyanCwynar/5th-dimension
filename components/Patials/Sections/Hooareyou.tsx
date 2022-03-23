import React from 'react'
import Heading from '../../Elements/Heading'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'
import Paragraph from '../../Elements/Paragraph'
import { HooLeft, HooRight } from '../../Elements/Icons/Icons'

export const Hooareyou = () => {
  return (
    <Section
      className="mx-auto max-w-[500px] tablet:max-w-[900px] xl:max-w-[1298px] px-[10px] tablet:px-10 pt-14 tablet:pt-[140px]"
      navigateID="topSection"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          Hoo Are You?
        </Heading>
      </AnimateWrapper>
      <div className="mt-[18px] tablet:mt-[31px] text-center flex items-center flex-col tablet:flex-row relative">
        <div className="absolute hidden tablet:block left-0 max-w-[170px]">
          <HooLeft width="100%" />
        </div>
        <div className="mx-auto">
          <Paragraph className="mt-1 tablet:mt-2 xl:mt-3 text-3 leading-6 tablet:text-4 xl:text-headingMobile font-RedHat text-primary">
            <span className="font-bold">Talented artist</span> who feels like your time is being wasted at a day job.
          </Paragraph>
          <Paragraph className="mt-1 tablet:mt-2 xl:mt-3 text-3 leading-6 tablet:text-4 xl:text-headingMobile font-RedHat text-primary">
            <span className="font-bold">NFT investor</span> who wants access to the hottest new projects.
          </Paragraph>
          <Paragraph className="mt-1 tablet:mt-2 xl:mt-3 text-3 leading-6 tablet:text-4 xl:text-headingMobile font-RedHat text-primary">
            <span className="font-bold">Fan of art and music</span> who wants to get close with the creatives.
          </Paragraph>
          <Paragraph className="mt-1 tablet:mt-2 xl:mt-3 text-3 leading-6 tablet:text-4 xl:text-headingMobile font-RedHat text-primary">
            <span className="font-bold">Aspiring artist or musician</span> looking to improve your craft.
          </Paragraph>
        </div>
        <div className="absolute hidden tablet:block right-0 max-w-[170px]">
          <HooRight width="100%" />
        </div>
      </div>
    </Section>
  )
}
