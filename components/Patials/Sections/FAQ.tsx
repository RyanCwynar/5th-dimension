import { Disclosure } from '@headlessui/react'
import React from 'react'
import { faqData } from '../../../data/data'
import Heading from '../../Elements/Heading'
import Paragraph from '../../Elements/Paragraph'
import Section from '../../Layouts/Section'
import { AnimateType, AnimateWrapper } from '../AnimateWrapper'
import parse from 'html-react-parser'

export const FAQSection = () => {
  return (
    <Section
      className="mx-auto mt-[60px] tablet:mt-32 max-w-[610px] xl:max-w-[872px] px-4"
      navigateID="faq"
    >
      <AnimateWrapper xOffset={-100} delayOrder={.5} animateType={AnimateType.SLIDEIN}>
        <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
          FAQ
        </Heading>
      </AnimateWrapper>
      <div className="faq-container mt-6 tablet:mt-[31px] xl:mt-[38px]">
        {faqData.map((item, index) => (
          <div className="mt-2 tablet:mt-[10px] xl:mt-4 faq-item" key={index}>
            <AnimateWrapper yOffset={70} delayOrder={1 + index * 0.3} animateType={AnimateType.FADEIN}> {/** Slide left to right from fade on mobile */}
              <Disclosure>
                {({ open }) => (
                  <div
                    className={`min-h-[34px] tablet:min-h-[55px] xl:min-h-[80px] w-full cursor-pointer rounded-[15px] xl:rounded-[20px] ${
                      open
                        ? 'bg-featureWrapperGradient2'
                        : 'bg-featureWrapperGradient'
                    } p-[2px] tablet:p-1 hover:bg-featureWrapperGradient2`}
                  >
                    <div className="text-white bg-black rounded-[12px] xl:rounded-2xl">
                      {/* <div className="flex flex-col justify-center w-full h-full px-8 text-center rounded-lg bg-featureGradient hover:bg-featureGradientHover2"> */}
                      <div
                        className={`flex h-full w-full flex-col justify-center rounded-lg ${
                          open
                            ? 'bg-featureGradientHover2'
                            : 'bg-featureGradient'
                        } px-3 tablet:px-8 text-center hover:bg-featureGradientHover2`}
                      >
                        <Disclosure.Button className="flex min-h-[30px] tablet:min-h-[47px] xl:min-h-[72px] w-full items-center justify-between rounded-lg focus:outline-none  ">
                          <Paragraph className="font-bold text-white text-3.75 tablet:text-5 xl:text-content">
                            Q{`${index + 1}`}
                          </Paragraph>
                          <Paragraph className="flex-1 pl-20 font-normal text-left text-white text-3 tablet:text-4 xl:text-contentSmall">
                            {item.question}
                          </Paragraph>
                          <img src='/Icons/IArrowdown.svg' className='w-[10px] tablet:w-[21px]' />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-3 pb-5 tablet:px-8">
                          <Paragraph className="font-normal text-left text-3 tablet:text-4 xl:text-contentSmall text-primary">
                            <span className="block mb-2 faq-content">
                              {parse(item.answer)}
                            </span>
                            {
                              item.lists ?
                              item.lists.map((list, idx) => (
                                <span className="block text-left" key={idx}>
                                  {list}
                                </span> 
                              ))
                              : ""
                            }
                          </Paragraph>
                        </Disclosure.Panel>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                )}
              </Disclosure>
            </AnimateWrapper>
          </div>
        ))}
      </div>
    </Section>

  )
}
