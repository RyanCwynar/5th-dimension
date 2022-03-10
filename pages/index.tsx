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
import {
  nftData,
} from '../data/data'
import { AnimateType, AnimateWrapper } from '../components/Patials/AnimateWrapper'
import Layout from '../components/Layouts/Layout'
import Section from '../components/Layouts/Section'

// Sections
import { 
  OwileNFTSection ,
  CreateOwileSection,
  HowtoOwileSection,
  RoadmapSection,
  ShuggaverseSection,
  FAQSection,
  TeamSection
} from '../components/Patials/Sections'
import Footer from '../components/Patials/Footer'

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const resizeHanlder = () => {
    const width = window.innerWidth;

    if ( width <= 600 ) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  };

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])

  useEffect(() => {
    window.onresize = resizeHanlder;
    if ( window.innerWidth <=600 )
      setIsMobile(true)
    else 
      setIsMobile(false)
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        <title>5th Dimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="relative">
        {/* <Header /> */}
        {/* Banner Section */}
        <Section className='relative xl:h-screen'>
          <div className="relative min-h-[175px] tablet:min-h-[389px] xl:min-h-[600px] xln:min-h-[670px] xxln:min-h-[710px] xxl:min-h-[768px] 3xl:min-h-[840px] overflow-hidden pb-[1px]">
            <video
              src="/5th-dimension-banner.mp4"
              className="fixed w-full object-cover max-h-[175px] tablet:max-h-[389px] xl:max-h-[600px] xln:max-h-[670px] xxln:max-h-[710px] xxl:max-h-[768px] 3xl:max-h-[840px]"
              autoPlay={true}
              loop
              playsInline
              muted
            ></video>
            <div className='absolute bottom-0 w-full h-5 bg-bannerGradientMobile tablet:hidden'></div>
          </div>
          {/* <div className="relative pb-1 mt-0 bg-bannerGradientBlack tablet:-mt-24 xl:-mt-24 xln:-mt-48 xxln:-mt-60 xxl:-mt-72 tablet:bg-bannerGradientTablet xl:bg-bannerGradient"> */}
          <div className="relative bottom-0 z-20 w-full pb-1 mt-0 xl:absolute bg-bannerGradientBlack tablet:-mt-24 xl:-mt-24 xln:-mt-48 xxln:-mt-60 xxl:-mt-72 tablet:bg-bannerGradientTablet xl:bg-bannerGradient">
            <div className="w-full pl-6 banner-content-wrapper pr-9">
              <div className="mx-auto max-w-[1440px]">
                <div className="grid grid-cols-1 tablet:grid-cols-2 items-center gap-6 tablet:gap-10 xl:gap-[78px]">
                  <div>
                    <div className="flex items-center justify-center tablet:justify-end">
                      {nftData.map((dt, index) => (
                        <AnimateWrapper xOffset={-100} animateClear={isMobile} delayOrder={nftData.length - index} animateType={AnimateType.SLIDEIN} key={index}> {/** Slide none on mobile */}
                          <img src={dt} className={`mx-auto ${index === 1 ? "max-w-[140px] xl:max-w-[180px] xln:max-w-[240px]" : "max-w-[100px] xl:max-w-[140px] xln:max-w-[180px] "}`} />
                        </AnimateWrapper>
                      ))}
                    </div>
                  </div>
                  <div>
                    <AnimateWrapper delayOrder={1} yOffset={0} easing={[0.2, 0, 0.58, 1]} animateType={AnimateType.FADEIN}>
                      <Paragraph className="max-w-[400px] xl:max-w-[524px] mx-auto tablet:mx-0 text-5 xl:text-headingMobile text-primary text-center tablet:text-left">
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
                    <AnimateWrapper delayOrder={2} yOffset={40} className="text-center tablet:text-left" animateType={AnimateType.FADEIN}>
                      <Button size={ButtonSize.PRIMARY} className="xl:mt-[34px] tablet:mt-7 mt-[30px] mx-auto">
                        <span className="flex items-center justify-start ml-2">
                          <img src="/Icons/IDiscord-white.svg" className="mr-[14px] w-7 xl:w-[38px]" alt="" />
                          Join Discord
                        </span>
                      </Button>
                    </AnimateWrapper>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[34px] tablet:mt-[30px] flex flex-col items-center tablet:absolute -right-6 xl:right-0 top-1/2 tablet:transform tablet:translate-y-1/2">
              {/* <button className="text-center" onClick={scrollToTop}> */}
              <Link
                to="topSection"
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer"
              >
                <Paragraph className="font-normal text-center text-white text-opacity-50 font-RedHat text-3 xl:text-3.75 leading-none italic tablet:transform tablet:-rotate-90 tablet:translate-y-[-50px]">
                  SCROLL DOWN
                </Paragraph>
                <DoubleArrowDown className="w-4 xl:mt-1 tablet:w-5" />
              </Link>
            </div>
          </div>
        </Section>
        <Section className="relative z-30 -mt-1 bg-contentGradient">

          <OwileNFTSection />

          <CreateOwileSection />

          <HowtoOwileSection />

          <RoadmapSection />

          <ShuggaverseSection />

          <FAQSection />

          <TeamSection />

          <Footer />
        </Section>
      </Layout>
    </div>
  )
}

export default Home
