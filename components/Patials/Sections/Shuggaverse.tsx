import React from 'react'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const ShuggaverseSection = () => {
  return (
    <Section
      className="mx-auto mt-[60px] tablet:mt-40 max-w-[500px] tablet:max-w-[900px] xl:max-w-[1267px] px-4 tablet:px-[52px]"
      navigateID="lore"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading tablet:text-left">About the 5th Dimension</Heading>
      </AnimateWrapper>
      <div className="flex w-full">
        <div className="max-w-[394px] xl:max-w-[585px] hidden tablet:block">
          <AnimateWrapper yOffset={-70} delayOrder={1.5} animateType={AnimateType.FADEIN}>
            <Paragraph className="mt-5 tablet:mt-9 xl:mt-[29px] text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
              5th Dimension Multiverse
            </Paragraph>
            <Paragraph className="mt-6 text-4 xl:text-contentSmall text-primary">
              The 5th Dimension multiverse will contain many worlds. Each world is dedicated to a different area of arts and entertainment. There will be worlds for fine art, music, animated art, film, and more – even discovering new genres that are possible because of NFT technology.
            </Paragraph>
            <Paragraph className="mt-5 tablet:mt-9 xl:mt-[26px] text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
              Shuggaverse
            </Paragraph>
            <Paragraph className="mt-6 text-4 xl:text-contentSmall text-primary">
              The Owlies are part of the Shuggaverse, the first world being created within the 5th Dimension multiverse. The Shuggaverse is the home of comic book albums – a new genre of entertainment that combines art and stories with original music soundtracks.
              <span className="inline-block mt-[9px] xl:mt-[13px]">
                Later this year, we will release our first comic book album, “Birth of the Shugga” –  origin story of anti-establishment superhero, Shugga, who is dedicated to destroying inter-dimensional Ghouls and stopping Da Man’s fiat money empire. All Owlies will receive a free digital copy!
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
            <Paragraph className="mt-[14px] text-left tablet:mt-9 xl:mt-[29px] text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
              5th Dimension Multiverse
            </Paragraph>
            <Paragraph className="mt-2 text-left text-3 tablet:text-4 xl:text-contentSmall text-primary tablet:mt-6">
              The 5th Dimension multiverse will contain many worlds. Each world is dedicated to a different area of arts and entertainment. There will be worlds for fine art, music, animated art, film, and more – even discovering new genres that are possible because of NFT technology.
            </Paragraph>
          </AnimateWrapper>
          <AnimateWrapper xOffset={-100} delayOrder={2} className="text-right" animateType={AnimateType.SLIDEIN}>
            <img src="/Shuggaverse_02.png" className="mt-6 xl:mt-11" alt="" />
            <Paragraph className="mt-[2px] text-3 xl:text-buttonSmall italic text-primary">
              Concept Sketch for upcoming project
            </Paragraph>
            <div className="block text-left tablet:hidden">
              <Paragraph className="mt-5 tablet:mt-9 xl:mt-[26px] text-3.75 tablet:text-5 xl:text-content font-RedHatBold text-white">
                Shuggaverse
              </Paragraph>
              <Paragraph className="mt-2 text-3 tablet:text-4 xl:text-contentSmall text-primary tablet:mt-6">
                The Owlies are part of the Shuggaverse, the first world being created within the 5th Dimension multiverse. The Shuggaverse is the home of comic book albums – a new genre of entertainment that combines art and stories with original music soundtracks.
                <span className="inline-block mt-[9px] xl:mt-[13px]">
                  Later this year, we will release our first comic book album, “Birth of the Shugga” –  origin story of anti-establishment superhero, Shugga, who is dedicated to destroying inter-dimensional Ghouls and stopping Da Man’s fiat money empire. All Owlies will receive a free digital copy!
                </span>
              </Paragraph>
            </div>

          </AnimateWrapper>
        </div>
      </div>
    </Section>
  )
}
