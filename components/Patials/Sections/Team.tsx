import React from 'react'
import { teamData } from '../../../data/data'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

import ShowMoreText from 'react-show-more-text'
import Image from 'next/image'

export const TeamSection = () => {

  return (
    <Section
      className="mx-auto mt-[90px] tablet:mt-[155.44px] xl:mt-[266px] max-w-[690px] xl:max-w-[875px] px-4"
      navigateID="team"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          Team
        </Heading>
      </AnimateWrapper>
      <div className="team-container mt-[25px] tablet:mt-[30px] xl:mt-[52px]">
        <div className="grid grid-cols-2 gap-y-10 tablet:gap-y-[60px] xl:gap-y-[89px] gap-5 tablet:gap-x-[82px] text-center">
          {teamData.map((team, index) => (
            <div key={index}>
              <AnimateWrapper yOffset={70} delayOrder={2 + index * 0.5} animateType={AnimateType.FADEIN}>
                <div className="xl:px-4">
                  <Image
                    src={team.profileImg}
                    className="max-w-full rounded-[20px]"
                    width={347}
                    height={349}
                    layout="responsive"
                    alt={team.name}
                  />
                </div>
                <Paragraph className="font-bold text-white mt-[18px] xl:mt-7 text-3.75 tablet:text-5 xl:text-content font-RedHatBold flex items-center justify-center">
                  {team.name} <a href={team.link} rel="noreferrer" className='ml-3' target={`_blank`}><img src={team.icon} className="w-10 cursor-pointer" alt="" /></a>
                </Paragraph>
                <Paragraph className="mt-[10px] xl:mt-2 font-semibold text-white text-3 tablet:text-4.5 xl:text-contentSmall">
                  {team.role}
                </Paragraph>
                <div className='font-RedHat mt-[10px] xl:mt-2 font-normal text-3 tablet:text-4.5 xl:text-contentSmall text-left text-primary'>
                  <ShowMoreText more="Show More" less="Show Less" anchorClass="my-anchor-css-class" >
                    {team.description}
                  </ShowMoreText>
                </div>
              </AnimateWrapper>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
