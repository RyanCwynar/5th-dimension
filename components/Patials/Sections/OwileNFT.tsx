import React from 'react'
import Heading from '../../Elements/Heading'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const OwileNFTSection = () => {
  return (
    <Section
      className="mx-auto max-w-[500px] tablet:max-w-[900px] xl:max-w-[1298px] px-6 tablet:px-10 pt-14 tablet:pt-[140px]"
      navigateID="topSection"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} className="block tablet:hidden" animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          Your Owlie Gives You...
        </Heading>
      </AnimateWrapper>
      <div className="flex flex-col-reverse items-center w-full tablet:flex-row">
        <div className="w-full max-w-[770px] tablet:pr-12">
          <AnimateWrapper xOffset={-100} delayOrder={1} className="hidden tablet:block" animateType={AnimateType.SLIDEIN}>
            <Heading className="text-white text-headingMobile tablet:text-8 xl:text-heading">
              Your Owlie Gives You...
            </Heading>
          </AnimateWrapper>
          <AnimateWrapper yOffset={0} delayOrder={2} animateType={AnimateType.FADEIN}>
            <ul className="mt-[25px] tablet:mt-7 xl:mt-[31px] pl-6 list-disc text-3 leading-6 tablet:text-4 xl:text-headingMobile font-RedHat text-primary max-w-[334px] tablet:max-w-[500px] xl:max-w-none mx-auto">
              <li><span className="font-bold">A network</span> of artists, collaboration opportunities, community grants, and project launchpad.</li>
              <li><span className="font-bold">Whitelist opportunities</span> for community and partner projects.</li>
              <li>Free future 5th Dimension <span className="font-bold">NFTs</span>.</li>
              <li>A deep, rich Bohemian <span className="font-bold">culture</span> that encourages freedom of expression.</li>
              <li><span className="font-bold">Participation</span> in a governance structure built and run by artists.</li>
              <li>Free digital copy of “Birth of the Shugga” comic book album.</li>
            </ul>
          </AnimateWrapper>
        </div>
        <div className="flex-grow">
          <AnimateWrapper xOffset={100} delayOrder={1.5} animateType={AnimateType.SLIDEIN}>
            <img src="/T-Bone_golden.png" className="mx-auto max-w-[140px] tablet:max-w-[260px] xl:max-w-[400px]" />
          </AnimateWrapper>
        </div>
      </div>
    </Section>
  )
}
