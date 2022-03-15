import React from 'react'
import { ButtonSize } from '../../../types/types'
import Button from '../../Elements/Button'
import Heading from '../../Elements/Heading'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

const Footer = () => {
  return (
    <Section className="mx-auto mt-24 tablet:mt-40 xl:mt-[264px] px-6 pb-16 text-center">
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-white text-headingMobile tablet:text-content xl:text-heading">
          You made it this far, so you might as well...
        </Heading>
      </AnimateWrapper>
      <AnimateWrapper yOffset={70} delayOrder={2} animateType={AnimateType.FADEIN}>
        <Button size={ButtonSize.PRIMARY} className="mt-9 xl:mt-[73px] pl-0">
          Join Our Discord
        </Button>
      </AnimateWrapper>
      <div className="flex items-center justify-center mt-6 xl:mt-9">
        <a href="#" className="social-link">
          <AnimateWrapper yOffset={50} delayOrder={2.5} animateType={AnimateType.FADEIN}>
            <img src="/Icons/IDiscord.png" className="mr-2 w-7 xl:w-11" alt="" />
          </AnimateWrapper>
        </a>
        <a href="#" className="social-link">
          <AnimateWrapper yOffset={50} delayOrder={3} animateType={AnimateType.FADEIN}>
            <img src="/Icons/ITwitter.png" className="ml-2 w-7 xl:w-11" alt="" />
          </AnimateWrapper>
        </a>
        <a href="#" className="social-link">
          <AnimateWrapper yOffset={50} delayOrder={3.5} animateType={AnimateType.FADEIN}>
            <img src="/Icons/IMedium.png" className="ml-2 w-7 xl:w-11" alt="" />
          </AnimateWrapper>
        </a>
      </div>
    </Section>
  )
}

export default Footer