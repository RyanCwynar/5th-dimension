import React from 'react'
import { teamData } from '../../../data/data'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

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
        <div className="grid grid-cols-2 gap-y-10 tablet:gap-y-[60px] xl:gap-y-[89px] gap-5 tablet:gap-x-[82px] xl:gap-x-[133px] text-center">
          {teamData.map((team, index) => (
            <div key={index}>
              <AnimateWrapper yOffset={70} delayOrder={2 + index * 0.5} animateType={AnimateType.FADEIN}>
                <img
                  src={team.profileImg}
                  className="max-w-full"
                  alt=""
                />
                <Paragraph className="font-bold text-white mt-[18px] xl:mt-7 text-3.75 tablet:text-5 xl:text-content">
                  {team.name}
                </Paragraph>
                <Paragraph className="mt-[10px] xl:mt-1 font-semibold text-white text-3 tablet:text-4.5 xl:text-contentSmall">
                  {team.role}
                </Paragraph>
                <Paragraph className="mt-[10px] xl:mt-1 font-normal text-3 tablet:text-4.5 xl:text-contentSmall text-primary">
                  {team.description}
                </Paragraph>
              </AnimateWrapper>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
