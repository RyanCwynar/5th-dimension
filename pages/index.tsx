import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

// 3rd Party
import { Link, animateScroll as scroll } from 'react-scroll'

// Components
import Paragraph from '../components/Elements/Paragraph'
import { ButtonSize } from '../types/types'
import { Disclosure } from '@headlessui/react'
import Header from '../components/Patials/Header'
import Button from '../components/Elements/Button'
import Heading from '../components/Elements/Heading'
import { ArrowDown, DoubleArrowDown } from '../components/Elements/Icons/Icons'

// Data
import {
  faqData,
  featureData,
  methodData,
  nftData,
  roadmapData,
  teamData,
} from '../data/data'
import { FadeIn, SlideIn } from '../components/Patials/AnimateWrapper'
import Layout from '../components/Layouts/Layout'
import Section from '../components/Layouts/Section'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        <title>5th Dimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section className="relative">
        <Header />
        {/* Banner Section */}
        <Section className="relative min-h-[175px] tablet:min-h-[389px] xl:min-h-[600px] xln:min-h-[670px] xxln:min-h-[710px] xxl:min-h-[768px] 3xl:min-h-[840px] overflow-hidden pb-[1px]">
          <video
            src="/5th-dimension-banner.mp4"
            className="fixed w-full object-cover max-h-[175px] tablet:max-h-[389px] xl:max-h-[600px] xln:max-h-[670px] xxln:max-h-[710px] xxl:max-h-[768px] 3xl:max-h-[840px]"
            autoPlay={true}
            loop
            playsInline
            muted
          ></video>
          <div className='absolute bottom-0 w-full h-5 bg-bannerGradientMobile tablet:hidden'>

          </div>
        </Section>
        <Section className="relative pb-1 mt-0 bg-bannerGradientBlack tablet:-mt-24 xl:-mt-44 xln:-mt-48 tablet:bg-bannerGradientTablet xl:bg-bannerGradient">
          <div className="w-full pl-6 banner-content-wrapper pr-9">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 tablet:grid-cols-2 items-center gap-6 tablet:gap-10 xl:gap-[78px]">
                <div>
                  <div className="flex items-center justify-center">
                    {nftData.map((dt, index) => (
                      <SlideIn
                        xOffset={-100}
                        delayOrder={nftData.length - index}
                      >
                        <img src={dt} className="mx-auto" key={index} />
                      </SlideIn>
                    ))}
                  </div>
                </div>
                <div>
                  <FadeIn delayOrder={1} yOffset={0} easing={[0.2, 0, 0.58, 1]}>
                    <Paragraph className="max-w-[400px] xl:max-w-[600px] mx-auto tablet:mx-0 text-5 xl:text-content text-primary text-center tablet:text-left">
                      <span className="font-semibold text-white">
                        5,555 Owlies
                      </span>{' '}
                      are flying into the metaverse from the{' '}
                      <span className="font-semibold text-white">
                        5th Dimension
                      </span>{' '}
                      on a mission -{' '}
                      <span className="xl:block">
                        to unite artists and creators!
                      </span>
                    </Paragraph>
                  </FadeIn>
                  <FadeIn delayOrder={3} yOffset={40} className="text-center tablet:text-left">
                    <Button size={ButtonSize.PRIMARY} className="xl:mt-[34px] tablet:mt-7 mt-[30px] mx-auto">
                      <span className="flex items-center justify-start ml-2">
                        <img src="/Icons/IDiscord-white.svg" className="mr-[14px] w-7 xl:w-[38px]" alt="" />
                        Join Discord
                      </span>
                    </Button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[34px] tablet:mt-[30px] flex flex-col items-center">
            {/* <button className="text-center" onClick={scrollToTop}> */}
            <Link
              to="topSection"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <Paragraph className="mb-3 font-normal text-center text-white text-opacity-50 font-RedHat text-5">
                Learn More
              </Paragraph>
              <DoubleArrowDown />
            </Link>
          </div>
        </Section>
        <Section className="relative z-30 -mt-1 bg-contentGradient">
          <Section
            className="mx-auto max-w-[1298px] px-6 tablet:px-10 pt-10 tablet:pt-16"
            navigateID="topSection"
          >
            <div className="flex flex-col-reverse items-center w-full tablet:flex-row">
              <div className="w-full max-w-[770px] tablet:pr-12">
                <SlideIn xOffset={-100} delayOrder={1} className="hidden tablet:block">
                  <Heading className="text-white text-headingMobile tablet:text-8 xl:text-heading">
                    Your Owlie Gives You...
                  </Heading>
                </SlideIn>
                <FadeIn yOffset={0} delayOrder={3}>
                  <ul className="mt-7 xl:mt-[31px] pl-6 xl:pl-0 list-disc text-3 tablet:text-4 xl:text-content font-normal text-primary max-w-[500px] tablet:max-w-none mx-auto">
                    <li>WL spots for community and partner projects.</li>
                    <li>Free future 5th Dimension NFTs.</li>
                    <li>
                      A network of artists, collaboration opportunities,
                      community grants, and project launchpad.
                    </li>
                    <li>
                      A deep, rich Bohemian culture that encourages freedom of
                      expression.
                    </li>
                    <li>
                      Participation in a governance structure built and run by
                      artists.
                    </li>
                  </ul>
                </FadeIn>
              </div>
              <div className="flex-grow mt-[25px] tablet:mt-0">
                <SlideIn xOffset={100} delayOrder={2}>
                  <img src="/T-Bone_golden.png" className="mx-auto max-w-[110px] tablet:max-w-[294px] xl:max-w-none" />
                </SlideIn>
              </div>
            </div>
          </Section>

          <Section className="mx-auto mt-[89px] tablet:mt-[133px] max-w-[1120px] px-6 tablet:px-[45px] xl:px-[55px]">
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="block text-center text-white text-headingMobile tablet:hidden">
                Create Your Owlie
              </Heading>
            </SlideIn>
            <div className="flex flex-col tablet:flex-row items-center tablet:items-end w-full mx-auto mt-[30px] tablet:mt-0">
              <div className="w-full max-w-[220px] tablet:max-w-[316px] xl:max-w-[465px]">
                <SlideIn xOffset={-100} delayOrder={1}>
                  <img src="/custom-owile.png" alt="" />
                </SlideIn>
              </div>
              <div className="flex-grow pl-0 tablet:pl-16 xl:pl-24 mt-[30px] tablet:mt-0">
                <SlideIn xOffset={100} delayOrder={1}>
                  <Heading className="hidden text-white text-headingMobile tablet:text-8 xl:text-heading tablet:block">
                    Create Your Owlie
                  </Heading>
                </SlideIn>
                <FadeIn yOffset={0} delayOrder={1.5}>
                  <Paragraph className="mt-2 text-3.75 tablet:text-5 xl:text-content text-primary text-center tablet:text-left">
                    Randomly generate a feature:
                  </Paragraph>
                </FadeIn>
                <div className="mt-[14px] xl:mt-6">
                  <div className="feature-container grid max-w-[294px] xl:max-w-[430px] grid-cols-3 gap-2 tablet:gap-3 xl:gap-5">
                    {featureData.map((feature, index) => (
                      <FadeIn yOffset={50} delayOrder={1.5 + index * 0.5} key={index} className="h-[90px] w-[90px] xl:h-[130px] xl:w-[130px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1">
                        <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                          <div className="h-full w-full rounded-lg bg-featureGradient xl:px-[22px] pt-3 pb-2 text-center hover:bg-featureGradientHover">
                            <div className="mx-auto flex h-full max-h-[50px] max-w-[50px] xl:max-h-[75px] w-full xl:max-w-[75px] flex-col justify-center">
                              <img
                                src={feature.img}
                                className="mx-auto"
                                alt=""
                              />
                            </div>
                            <p className="text-gradient text-2.5 xl:text-buttonSmall mt-1">
                              {feature.featureTitle}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
                <FadeIn yOffset={0} delayOrder={5} className="xl:mt-6 mt-[14px]">
                  <div className="flex items-center justify-center tablet:justify-start">
                    <Button size={ButtonSize.SMALL} className="">
                      <span className="flex items-center justify-start ml-2">
                        <img src="/Icons/Reset.svg" className="mr-1" alt="" />
                        Undo
                      </span>
                    </Button>
                    <Button
                      size={ButtonSize.SMALL}
                      outline={true}
                      className="ml-2 tablet:ml-[14px]"
                    >
                      Restart
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          <Section className="mx-auto mt-[86px] tablet:mt-36 xl:mt-40 max-w-[1240px] px-5 text-center">
            <SlideIn xOffset={-150} delayOrder={1}>
              <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
                How to Get an Owlie
              </Heading>
            </SlideIn>
            <div className="grid grid-cols-1 tablet:grid-cols-3 method-container gap-y-6 mt-[33px] tablet:mt-9 xl:mt-14">
              {methodData.map((method, index) => (
                <FadeIn
                  yOffset={50}
                  delayOrder={1.5 + index * 0.5}
                  className="method-item"
                >
                  <div
                    className="mx-auto h-45 xl:h-[268px] w-full max-w-[180px] xl:max-w-[268px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
                    key={index}
                  >
                    <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-featureGradient px-[22px] pt-[18px] pb-3 text-center hover:bg-featureGradientHover">
                        <img src={method.img} className="mx-auto" alt="" />
                      </div>
                    </div>
                  </div>
                  <Paragraph className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-bold text-white">
                    {method.title}
                  </Paragraph>
                  <Paragraph className="mx-auto tablet:max-w-[342px] text-center text-3 tablet:text-4 xl:text-contentSmall text-primary max-w-[230px]">
                    {method.description}
                  </Paragraph>
                </FadeIn>
              ))}
            </div>
            <FadeIn yOffset={0} delayOrder={3}>
              <Button size={ButtonSize.PRIMARY} className="mt-10 xl:mt-[72px]">
                <span className="flex items-center justify-start ml-2">
                  <img src="/Icons/IDiscord-white.svg" className="mr-[14px] w-7 xl:w-[38px]" alt="" />
                  Join Discord
                </span>
              </Button>
            </FadeIn>
          </Section>

          <Section
            className="mx-auto mt-[61px] tablet:mt-36 xl:mt-40 max-w-[1267px] px-4 tablet:px-[52px]"
            navigateID="roadmap"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
                5th Dimension Roadmap
              </Heading>
            </SlideIn>
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
                    >
                      <SlideIn
                        xOffset={index % 2 === 0 ? -100 : 100}
                        delayOrder={1 + index * 0.5}
                        className="mx-auto h-full w-full rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
                      >
                        <div className="flex flex-col justify-between h-full text-white bg-black rounded-2xl">
                          <div className="h-full w-full rounded-lg bg-featureGradient px-3 tablet:px-5 xl:px-[50px] py-[14px] tablet:py-5 xl:py-[30px] hover:bg-featureGradientHover2">
                            <Paragraph className="font-bold text-white text-3.75 tablet:text-5 xl:text-content">
                              {roadmap.title}
                            </Paragraph>
                            <ul className="mt-[10px] tablet:mt-3 xl:mt-[21px] list-disc pl-3 tablet:pl-6 text-3 tablet:text-4 xl:text-contentSmall font-normal text-white text-opacity-80">
                              {roadmap.description?.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </SlideIn>
                    </div>
                    <SlideIn
                      xOffset={index % 2 === 0 ? 100 : -100}
                      delayOrder={1 + index * 0.5}
                      className="w-full max-w-[221px] xl:max-w-[347px] hidden tablet:block"
                    >
                      <div className="h-full">
                        <img src={roadmap.img} className="h-full max-w-full" alt="" />
                      </div>
                    </SlideIn>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            className="mx-auto mt-[60px] tablet:mt-40 max-w-[1267px] px-4 tablet:px-[52px]"
            navigateID="lore"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading tablet:text-left">Shuggaverse</Heading>
            </SlideIn>
            <div className="flex w-full">
              <div className="max-w-[394px] xl:max-w-[585px] pt-[23px] hidden tablet:block">
                <FadeIn yOffset={-70} delayOrder={1.5}>
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
                </FadeIn>
              </div>
              <div className="tablet:pl-7 xl:pl-[67px] mt-6 tablet:mt-0">
                <SlideIn xOffset={-100} delayOrder={1.5} className="text-right">
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
                </SlideIn>
                <SlideIn xOffset={-100} delayOrder={2} className="text-right">
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
                </SlideIn>
              </div>
            </div>
          </Section>

          <Section
            className="mx-auto mt-[60px] tablet:mt-32 max-w-[610px] xl:max-w-[872px] px-4"
            navigateID="faq"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
                FAQ
              </Heading>
            </SlideIn>
            <div className="faq-container mt-6 tablet:mt-[31px] xl:mt-[38px]">
              {faqData.map((item, index) => (
                <div className="mt-2 tablet:mt-[10px] xl:mt-4 faq-item" key={index}>
                  <FadeIn yOffset={70} delayOrder={2 + index * 0.7}>
                    <Disclosure>
                      {({ open }) => (
                        <div
                          className={`min-h-[35px] tablet:min-h-[55px] xl:min-h-[80px] w-full cursor-pointer rounded-[15px] xl:rounded-[20px] ${
                            open
                              ? 'bg-featureWrapperGradient2'
                              : 'bg-featureWrapperGradient'
                          } p-1 hover:bg-featureWrapperGradient2`}
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
                              <Disclosure.Button className="flex min-h-[30px] xl:min-h-[72px] w-full items-center justify-between rounded-lg focus:outline-none  ">
                                <Paragraph className="font-bold text-white text-3.75 tablet:text-5 xl:text-content">
                                  Q{`${index + 1}`}
                                </Paragraph>
                                <Paragraph className="font-normal text-white text-3 tablet:text-4 xl:text-contentSmall">
                                  {item.question}
                                </Paragraph>
                                <img src='/Icons/IArrowdown.svg' className='w-[10px] tablet:w-[21px]' />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-3 pb-5 tablet:px-8">
                                <Paragraph className="font-normal text-3 tablet:text-4 xl:text-contentSmall text-primary">
                                  {item.answer}
                                </Paragraph>
                              </Disclosure.Panel>
                            </div>
                            {/* </div> */}
                          </div>
                        </div>
                      )}
                    </Disclosure>
                  </FadeIn>
                </div>
              ))}
            </div>
          </Section>

          <Section
            className="mx-auto mt-[90px] tablet:mt-[155.44px] xl:mt-[266px] max-w-[690px] xl:max-w-[875px] px-4"
            navigateID="team"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-white text-headingMobile tablet:text-8 xl:text-heading">
                Team
              </Heading>
            </SlideIn>
            <div className="team-container mt-[25px] tablet:mt-[30px] xl:mt-[52px]">
              <div className="grid grid-cols-2 gap-y-10 tablet:gap-y-[60px] xl:gap-y-[89px] gap-5 tablet:gap-x-[82px] xl:gap-x-[133px] text-center">
                {teamData.map((team, index) => (
                  <div key={index}>
                    <FadeIn yOffset={70} delayOrder={2 + index * 0.5}>
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
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section className="mx-auto mt-24 tablet:mt-40 xl:mt-[264px] px-6 pb-16 text-center">
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-white text-content xl:text-heading">
                You made it this far, so you might as well...
              </Heading>
            </SlideIn>
            <FadeIn yOffset={70} delayOrder={2}>
              <Button size={ButtonSize.PRIMARY} className="mt-9 xl:mt-[73px] pl-0">
                Join Our Discord
              </Button>
            </FadeIn>
            <div className="flex items-center justify-center mt-6 xl:mt-9">
              <a href="#" className="social-link">
                <FadeIn yOffset={50} delayOrder={2.5}>
                  <img src="/Icons/IDiscord.png" className="mr-2 w-7 xl:w-11" alt="" />
                </FadeIn>
              </a>
              <a href="#" className="social-link">
                <FadeIn yOffset={50} delayOrder={3}>
                  <img src="/Icons/ITwitter.png" className="ml-2 w-7 xl:w-11" alt="" />
                </FadeIn>
              </a>
            </div>
          </Section>
        </Section>
      </Section>
    </div>
  )
}

export default Home
