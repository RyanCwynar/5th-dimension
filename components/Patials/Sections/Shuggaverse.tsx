import React from 'react'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const ShuggaverseSection = () => {
  return (
    <Section
      className="mx-auto mt-[60px] tablet:mt-40 max-w-[1267px] px-4 tablet:px-[52px]"
      navigateID="lore"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading tablet:text-left">Shuggaverse</Heading>
      </AnimateWrapper>
      <div className="flex w-full">
        <div className="max-w-[394px] xl:max-w-[585px] pt-[23px] hidden tablet:block">
          <AnimateWrapper yOffset={-70} delayOrder={1.5} animateType={AnimateType.FADEIN}>
            <Paragraph className="text-4 xl:text-contentSmall text-primary">
              Shugga’s Owlie Friends are part of the Shuggaverse, the
              first world being created within the 5 th Dimension. This is
              the home of Shugga, the anti-establishment superhero
              dedicated to destroying inter-dimensional Ghouls and
              stopping Da Man’s fiat money empire. 
              <span className="inline-block mt-[9px] xl:mt-[11px]">
                Several decades ago,
                Shugga retreated from our dimension when the world closed
                their hearts and replaced peace, love, and understanding
                with fear, uncertainty, and doubt. Unable to penetrate the
                hardened hearts of the people of Earth, he has instead been
                taking the fight directly to the Ghouls in the 5 th
                Dimension, trying to break their influence over humanity.
              </span>
              <span className="inline-block mt-[9px] xl:mt-[11px]">
                Shugga’s Owlie Friends are coming to Earth and are
                determined to lay the foundation for the 5th Dimension
                community. They believe if they can organize a small
                community of loving, creative people, we can fight back
                against the tyrannical oppression of Da Man and his Dawgs
                - our corporate overlords. This will set the stage for
                Shugga’s return, where he will team up with an army of
                artists and creators to usher in a new Renaissance and
                guide us safely through the Great Awakening.
              </span>
            </Paragraph>
          </AnimateWrapper>
        </div>
        <div className="tablet:pl-7 xl:pl-[67px] mt-6 tablet:mt-0">
          <AnimateWrapper xOffset={-100} delayOrder={1.5} className="hidden text-right tablet:block" animateType={AnimateType.SLIDEIN}> {/** Slide right to left on mobile for first item only */}
            <img src="/Shuggaverse_01.png" alt="" />
            <Paragraph className="mt-[2px] text-3 xl:text-buttonSmall italic text-primary">
              Concept Sketch for upcoming project
            </Paragraph>
            <Paragraph className="block mt-4 text-left text-4 xl:text-contentSmall text-primary tablet:hidden">
              Shugga’s Owlie Friends are part of the Shuggaverse, the
              first world being created within the 5 th Dimension. This is
              the home of Shugga, the anti-establishment superhero
              dedicated to destroying inter-dimensional Ghouls and
              stopping Da Man’s fiat money empire. 
              <span className="inline-block mt-[9px] xl:mt-[11px]">
                Several decades ago,
                Shugga retreated from our dimension when the world closed
                their hearts and replaced peace, love, and understanding
                with fear, uncertainty, and doubt. Unable to penetrate the
                hardened hearts of the people of Earth, he has instead been
                taking the fight directly to the Ghouls in the 5 th
                Dimension, trying to break their influence over humanity.
              </span>
            </Paragraph>
          </AnimateWrapper>
          <AnimateWrapper xOffset={100} delayOrder={1.5} className="block text-right tablet:hidden" animateType={AnimateType.SLIDEIN}> {/** Slide right to left on mobile for first item only */}
            <img src="/Shuggaverse_01.png" alt="" />
            <Paragraph className="mt-[2px] text-3 xl:text-buttonSmall italic text-primary">
              Concept Sketch for upcoming project
            </Paragraph>
            <Paragraph className="block mt-4 text-left text-4 xl:text-contentSmall text-primary tablet:hidden">
              Shugga’s Owlie Friends are part of the Shuggaverse, the
              first world being created within the 5 th Dimension. This is
              the home of Shugga, the anti-establishment superhero
              dedicated to destroying inter-dimensional Ghouls and
              stopping Da Man’s fiat money empire. 
              <span className="inline-block mt-[9px] xl:mt-[11px]">
                Several decades ago,
                Shugga retreated from our dimension when the world closed
                their hearts and replaced peace, love, and understanding
                with fear, uncertainty, and doubt. Unable to penetrate the
                hardened hearts of the people of Earth, he has instead been
                taking the fight directly to the Ghouls in the 5 th
                Dimension, trying to break their influence over humanity.
              </span>
            </Paragraph>
          </AnimateWrapper>
          <AnimateWrapper xOffset={-100} delayOrder={2} className="text-right" animateType={AnimateType.SLIDEIN}>
            <img src="/Shuggaverse_02.png" className="mt-5 xl:mt-11" alt="" />
            <Paragraph className="mt-[2px] text-3 xl:text-buttonSmall italic text-primary">
              Concept Sketch for upcoming project
            </Paragraph>
            <Paragraph className="block mt-4 text-left text-4 xl:text-contentSmall text-primary tablet:hidden">
                Shugga’s Owlie Friends are coming to Earth and are
                determined to lay the foundation for the 5th Dimension
                community. They believe if they can organize a small
                community of loving, creative people, we can fight back
                against the tyrannical oppression of Da Man and his Dawgs
                - our corporate overlords. This will set the stage for
                Shugga’s return, where he will team up with an army of
                artists and creators to usher in a new Renaissance and
                guide us safely through the Great Awakening.
            </Paragraph>
          </AnimateWrapper>
        </div>
      </div>
    </Section>
  )
}
