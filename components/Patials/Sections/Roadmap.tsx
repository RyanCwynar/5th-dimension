import React from 'react'
import { roadmapData } from '../../../data/data'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'

export const RoadmapSection = () => {
  return (
    <Section
      className="mx-auto mt-[61px] tablet:mt-36 xl:mt-40 max-w-[500px] tablet:max-w-[900px] xl:max-w-[1267px] px-4 tablet:px-[52px]"
      navigateID="roadmap"
    >
      <AnimateWrapper xOffset={-100} delayOrder={1} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          5th Dimension Roadmap
        </Heading>
      </AnimateWrapper>
      <div className="roadmap-container mt-[18px] tablet:mt-9 xl:mt-[84px]">
        {roadmapData.map((roadmap, index) => (
          <div className="roadmap-item mt-[14px] xl:mt-7" key={index}>
            <div
              className={`flex w-full ${
                index % 2 === 0 ? '' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`flex-grow ${
                  index % 2 === 0 ? 'tablet:pr-[14px] xl:pr-8' : 'tablet:pl-[14px] xl:pl-8'
                }`}
              > {/** Slide reverse direction mobile */}
                <AnimateWrapper
                  xOffset={index % 2 === 0 ? -100 : 100}
                  delayOrder={1 + index * 0.5}
                  animateType={AnimateType.SLIDEIN}
                  className="mx-auto h-full w-full rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
                >
                  <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                    <div className="h-full w-full rounded-lg bg-featureGradient px-3 tablet:px-5 xl:px-[50px] py-[14px] tablet:py-5 xl:py-[30px] hover:bg-featureGradientHover2">
                      <Paragraph className="font-RedHatBold text-white text-3.75 tablet:text-5 xl:text-content">
                        {roadmap.title}
                      </Paragraph>
                      <ul className="mt-[10px] tablet:mt-3 xl:mt-[21px] list-disc pl-3 tablet:pl-6 text-3 tablet:text-4 xl:text-contentSmall font-normal text-white text-opacity-80">
                        {roadmap.description?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateWrapper>
              </div>
              <AnimateWrapper
                xOffset={index % 2 === 0 ? 100 : -100}
                delayOrder={1 + index * 0.5}
                animateType={AnimateType.SLIDEIN}
                className="w-full max-w-[221px] xl:max-w-[347px] hidden tablet:block"
              >
                <div className="h-full">
                  <img src={roadmap.img} className="h-full max-w-full rounded-[20px]" alt="" />
                </div>
              </AnimateWrapper>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
