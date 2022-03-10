import React from 'react'
import Heading from '../../Elements/Heading'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const OwileNFTSection = () => {
  return (
    <Section
      className="mx-auto max-w-[500px] tablet:max-w-[900px] xl:max-w-[1298px] px-6 tablet:px-10 pt-10 tablet:pt-16"
      navigateID="topSection"
    >
      <div className="flex flex-col-reverse items-center w-full tablet:flex-row">
        <div className="w-full max-w-[770px] tablet:pr-12">
          <AnimateWrapper xOffset={-100} delayOrder={1} className="hidden tablet:block" animateType={AnimateType.SLIDEIN}>
            <Heading className="text-white text-headingMobile tablet:text-8 xl:text-heading">
              Your Owlie Gives You...
            </Heading>
          </AnimateWrapper>
          <AnimateWrapper yOffset={0} delayOrder={2} animateType={AnimateType.FADEIN}>
            <ul className="mt-7 xl:mt-[31px] pl-6 list-disc text-3 tablet:text-4 xl:text-headingMobile font-normal text-primary max-w-[500px] tablet:max-w-none mx-auto">
              <li>WL spots for community and partner projects.</li>
              <li>Free future 5th Dimension NFTs.</li>
              <li>Free digital copy of “Birth of the Shugga” comic book album</li>
              <li>A network of artists, collaboration opportunities, community grants, and project launchpad.</li>
              <li>A deep, rich Bohemian culture that encourages freedom of expression.</li>
              <li>Participation in a governance structure built and run by artists.</li>
            </ul>
          </AnimateWrapper>
        </div>
        <div className="flex-grow mt-[25px] tablet:mt-0">
          <AnimateWrapper xOffset={100} delayOrder={1.5} animateType={AnimateType.SLIDEIN}>
            <img src="/T-Bone_golden.png" className="mx-auto max-w-[110px] tablet:max-w-[220px] xl:max-w-none" />
          </AnimateWrapper>
        </div>
      </div>
    </Section>
  )
}
