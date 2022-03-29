import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// 3rd Party
import { Link, animateScroll as scroll } from 'react-scroll'

// Components
import Paragraph from '../components/Elements/Paragraph'
import { ButtonSize } from '../types/types'
import Button from '../components/Elements/Button'
import { DoubleArrowDown } from '../components/Elements/Icons/Icons'

// Data
import { nftData } from '../data/data'
import {
  AnimateType,
  AnimateWrapper,
} from '../components/Patials/AnimateWrapper'
import Layout from '../components/Layouts/Layout'
import Section from '../components/Layouts/Section'

// Sections
import {
  OwileNFTSection,
  CreateOwileSection,
  HowtoOwileSection,
  RoadmapSection,
  ShuggaverseSection,
  FAQSection,
  TeamSection,
  Hooareyou,
} from '../components/Patials/Sections'
import Footer from '../components/Patials/Footer'

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const resizeHanlder = () => {
    const width = window.innerWidth

    if (width <= 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.onresize = resizeHanlder
    if (window.innerWidth <= 600) setIsMobile(true)
    else setIsMobile(false)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Layout className="relative">
        {/* <Header /> */}
        {/* Banner Section */}
        <Section className="relative max-h-[840px] xl:h-screen">
          <div className="relative min-h-[182px] overflow-hidden pb-[1px] tablet:min-h-[389px] lg:min-h-[540px] xl:min-h-[600px] xln:min-h-[670px] xxln:min-h-[710px] xxl:min-h-[768px] 3xl:min-h-[840px]">
            <video
              src="/5th-dimension-banner.mp4"
              className="fixed max-h-[182px] w-full object-cover tablet:max-h-[389px] lg:max-h-[540px] xl:max-h-[600px] xln:max-h-[670px] xxln:max-h-[710px] xxl:max-h-[768px] 3xl:max-h-[840px]"
              autoPlay={true}
              loop
              playsInline
              muted
            ></video>
            <div className="absolute -bottom-1 h-5 w-full bg-bannerGradientMobile tablet:hidden"></div>
          </div>
          {/* <div className="relative pb-1 mt-0 bg-bannerGradientBlack tablet:-mt-24 xl:-mt-24 xln:-mt-48 xxln:-mt-60 xxl:-mt-72 tablet:bg-bannerGradientTablet xl:bg-bannerGradient"> */}
          <div className="relative bottom-0 z-20 mt-0 w-full bg-bannerGradientBlack pb-1 tablet:-mt-24 tablet:bg-bannerGradientTablet xl:absolute xl:-mt-24 xl:bg-bannerGradient xln:-mt-48 xxln:-mt-60 xxl:-mt-72">
            <div className="banner-content-wrapper w-full pl-6 pr-9">
              <div className="mx-auto max-w-[1440px] tablet:mt-0">
                <div className="grid grid-cols-1 items-center gap-6 tablet:grid-cols-2 tablet:gap-10 xl:gap-[78px]">
                  <div>
                    <div className="flex items-center justify-center tablet:justify-end">
                      {nftData.map((dt, index) => (
                        <AnimateWrapper
                          xOffset={-100}
                          animateClear={isMobile}
                          delayOrder={nftData.length - index}
                          animateType={AnimateType.SLIDEIN}
                          key={index}
                        >
                          {' '}
                          {/** Slide none on mobile */}
                          <img
                            src={dt}
                            className={`mx-auto ${
                              index === 1
                                ? 'max-w-[140px] xl:max-w-[180px] xln:max-w-[240px]'
                                : 'max-w-[100px] xl:max-w-[140px] xln:max-w-[180px] '
                            }`}
                          />
                        </AnimateWrapper>
                      ))}
                    </div>
                  </div>
                  <div>
                    <AnimateWrapper
                      delayOrder={1}
                      yOffset={0}
                      easing={[0.2, 0, 0.58, 1]}
                      animateType={AnimateType.FADEIN}
                    >
                      <Paragraph className="mx-auto max-w-[400px] text-center text-5 text-primary tablet:mx-0 tablet:text-left xl:max-w-[524px] xl:text-headingMobile">
                        <span className="font-semibold text-white">
                          5,555 Owlies
                        </span>{' '}
                        are flying into the metaverse from the{' '}
                        <span className="font-semibold text-white">
                          5th Dimension
                        </span>{' '}
                        on a mission to unite artists and creators!
                      </Paragraph>
                    </AnimateWrapper>
                    <AnimateWrapper
                      delayOrder={2}
                      yOffset={40}
                      className="text-center tablet:text-left"
                      animateType={AnimateType.FADEIN}
                    >
                      <Button
                        size={ButtonSize.PRIMARY}
                        className="mx-auto mt-[30px] tablet:mt-7 xl:mt-[34px]"
                        onClick={() =>
                          window.open('https://discord.gg/BW4XKRhyHs', '_blank')
                        }
                      >
                        <span className="ml-2 flex items-center justify-start">
                          <img
                            src="/Icons/IDiscord-white.svg"
                            className="mr-[14px] w-7 xl:w-[38px]"
                            alt=""
                          />
                          Join Discord
                        </span>
                      </Button>
                    </AnimateWrapper>
                  </div>
                </div>
              </div>
            </div>

            <div className="-right-6 top-1/2 mt-[34px] flex flex-col items-center tablet:absolute tablet:mt-[30px] tablet:translate-y-1/2 tablet:transform xl:right-0">
              {/* <button className="text-center" onClick={scrollToTop}> */}
              <Link
                to="topSection"
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer"
              >
                <Paragraph className="text-center font-RedHat text-3 font-normal italic leading-none text-white text-opacity-50 tablet:translate-y-[-50px] tablet:-rotate-90 tablet:transform xl:text-3.75">
                  SCROLL DOWN
                </Paragraph>
                <DoubleArrowDown className="w-4 tablet:w-5 xl:mt-1" />
              </Link>
            </div>
          </div>
        </Section>
        <Section className="relative z-30 -mt-1 bg-contentGradient">
          <Hooareyou />

          <OwileNFTSection />

          <CreateOwileSection />

          <HowtoOwileSection />

          <ShuggaverseSection />

          <RoadmapSection />

          <FAQSection />

          <TeamSection />

          <Footer />
        </Section>
      </Layout>
    </div>
  )
}

export default Home
