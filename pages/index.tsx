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
    <div className="min-h-screen">
      <Head>
        <title>5th Dimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout wrapperClassName="relative">
        <Header />
        {/* Banner Section */}
        <Section wrapperClassName="relative min-h-video overflow-hidden pb-[1px]">
          <video
            src="/5th-dimension-banner.mp4"
            className="fixed max-h-video w-full min-w-video object-cover 2xl:max-h-[710px] xxl:max-h-[768px] 3xl:max-h-[840px]"
            autoPlay={true}
            loop
            playsInline
            muted
          ></video>
        </Section>
        <Section wrapperClassName="relative -mt-10 bg-bannerGradient">
          <div className="banner-content-wrapper w-full pl-6 pr-9">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-2 items-center gap-[78px]">
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
                    <Paragraph className="max-w-[600px] text-content text-primary">
                      <span className="font-semibold text-white">
                        5,000 Owlies
                      </span>{' '}
                      are flying into the metaverse from the{' '}
                      <span className="font-semibold text-white">
                        5th Dimension
                      </span>{' '}
                      on a mission -{' '}
                      <span className="block">
                        to unite artists and creators!
                      </span>
                    </Paragraph>
                  </FadeIn>
                  <FadeIn delayOrder={3} yOffset={40}>
                    <Button size={ButtonSize.PRIMARY} className="mt-[34px]">
                      Join Discord
                    </Button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[30px] flex flex-col items-center">
            {/* <button className="text-center" onClick={scrollToTop}> */}
            <Link
              to="topSection"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <Paragraph className="mb-3 text-center font-RedHat text-xl font-normal leading-[26.46px] text-white text-opacity-50">
                Learn More
              </Paragraph>
              <DoubleArrowDown />
            </Link>
          </div>
        </Section>
        <Section wrapperClassName="relative z-30 bg-contentGradient">
          <Section
            wrapperClassName="mx-auto max-w-[1298px] px-10 pt-16"
            navigateID="topSection"
          >
            <div className="flex w-full items-center">
              <div className="w-full max-w-[770px] pr-12">
                <SlideIn xOffset={-100} delayOrder={1}>
                  <Heading className="text-heading text-white">
                    Your Owlie Gives You...
                  </Heading>
                </SlideIn>
                <FadeIn yOffset={0} delayOrder={3}>
                  <ul className="mt-[31px] list-disc text-content font-normal text-primary">
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
              <div className="flex-grow">
                <SlideIn xOffset={100} delayOrder={2}>
                  <img src="/T-Bone_golden.png" className="mx-auto" />
                </SlideIn>
              </div>
            </div>
          </Section>

          <Section wrapperClassName="mx-auto mt-[133px] max-w-[1120px] px-[55px]">
            <div className="mx-auto flex w-full  items-start ">
              <div className="w-full max-w-[465px]">
                <SlideIn xOffset={-100} delayOrder={1}>
                  <img src="/custom-owile.png" alt="" />
                </SlideIn>
              </div>
              <div className="flex-grow pl-24">
                <SlideIn xOffset={100} delayOrder={1}>
                  <Heading className="text-heading text-white">
                    Create Your Owlie
                  </Heading>
                </SlideIn>
                <FadeIn yOffset={0} delayOrder={1.5}>
                  <Paragraph className="mt-[15px] text-content text-primary">
                    Randomly generate a feature:
                  </Paragraph>
                </FadeIn>
                <div className="mt-[26px]">
                  <div className="feature-container grid max-w-[430px] grid-cols-3 gap-5">
                    {featureData.map((feature, index) => (
                      <FadeIn yOffset={50} delayOrder={1.5 + index * 0.5}>
                        <div
                          className="h-[130px] w-[130px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1"
                          key={index}
                        >
                          <div className="flex h-full flex-col justify-between rounded-2xl bg-black text-white">
                            <div className="h-full w-full rounded-lg bg-featureGradient px-[22px] pt-[18px] pb-3 text-center hover:bg-featureGradientHover">
                              <div className="mx-auto flex h-full max-h-[75px] w-full max-w-[75px] flex-col justify-center">
                                <img
                                  src={feature.img}
                                  className="mx-auto"
                                  alt=""
                                />
                              </div>
                              <span className="text-gradient">
                                {feature.featureTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
                <FadeIn yOffset={0} delayOrder={5}>
                  <div className="mt-[26px]">
                    <div className="flex items-center">
                      <Button size={ButtonSize.SMALL} className="">
                        <span className="ml-2 flex items-center justify-start">
                          <img src="/Icons/Reset.svg" className="mr-1" alt="" />
                          Undo
                        </span>
                      </Button>
                      <Button
                        size={ButtonSize.SMALL}
                        outline={true}
                        className="ml-[14px]"
                      >
                        Restart
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Section>

          <Section wrapperClassName="mx-auto mt-40 max-w-[1240px] px-5 text-center">
            <SlideIn xOffset={-150} delayOrder={1}>
              <Heading className="text-center text-heading text-white">
                How to Get an Owlie
              </Heading>
            </SlideIn>
            <div className="method-container mt-14 grid grid-cols-3">
              {methodData.map((method, index) => (
                <FadeIn
                  yOffset={50}
                  delayOrder={1.5 + index * 0.5}
                  className="method-item"
                >
                  <div
                    className="mx-auto h-[268px] w-full max-w-[268px] cursor-pointer rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
                    key={index}
                  >
                    <div className="flex h-full flex-col justify-between rounded-2xl bg-black text-white">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-featureGradient px-[22px] pt-[18px] pb-3 text-center hover:bg-featureGradientHover">
                        <img src={method.img} className="mx-auto" alt="" />
                      </div>
                    </div>
                  </div>
                  <Paragraph className="my-[29px] text-center text-content font-bold text-white">
                    {method.title}
                  </Paragraph>
                  <Paragraph className="mx-auto max-w-[342px] text-center text-contentSmall text-primary">
                    {method.description}
                  </Paragraph>
                </FadeIn>
              ))}
            </div>
            <FadeIn yOffset={0} delayOrder={3}>
              <Button size={ButtonSize.PRIMARY} className="mt-[72px]">
                Join Discord
              </Button>
            </FadeIn>
          </Section>

          <Section
            wrapperClassName="mx-auto mt-40 max-w-[1235px] px-9"
            navigateID="roadmap"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-heading text-white">
                5th Dimension Roadmap
              </Heading>
            </SlideIn>
            <div className="roadmap-container mt-[84px]">
              {roadmapData.map((roadmap, index) => (
                <div className="roadmap-item mt-7" key={index}>
                  <div
                    className={`flex w-full ${
                      index % 2 === 0 ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex-grow ${
                        index % 2 === 0 ? 'pr-8' : 'pl-8'
                      }`}
                    >
                      <SlideIn
                        xOffset={index % 2 === 0 ? -100 : 100}
                        delayOrder={1 + index * 0.5}
                        className="mx-auto h-full w-full rounded-[20px] bg-featureWrapperGradient p-1 hover:bg-featureWrapperGradient2"
                      >
                        <div className="flex h-full flex-col justify-between rounded-2xl bg-black text-white">
                          <div className="h-full w-full rounded-lg bg-featureGradient px-[50px] py-[30px] hover:bg-featureGradientHover2">
                            <Paragraph className="text-content font-bold text-white">
                              {roadmap.title}
                            </Paragraph>
                            <ul className="mt-[21px] list-disc pl-6 text-contentSmall font-normal text-primary">
                              {roadmap.description?.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </SlideIn>
                    </div>
                    <div className="w-full max-w-[347px]">
                      <SlideIn
                        xOffset={index % 2 === 0 ? 100 : -100}
                        delayOrder={1 + index * 0.5}
                      >
                        <img src={roadmap.img} className="max-w-full" alt="" />
                      </SlideIn>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            wrapperClassName="mx-auto mt-40 max-w-[1235px] px-9"
            navigateID="lore"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-heading text-white">Shuggaverse</Heading>
            </SlideIn>
            <div className="flex w-full">
              <div className="max-w-[585px] pt-[23px]">
                <FadeIn yOffset={-70} delayOrder={1.5}>
                  <Paragraph className="text-contentSmall text-primary">
                    Shugga’s Owlie Friends are part of the Shuggaverse, the
                    first world being created within the 5 th Dimension. This is
                    the home of Shugga, the anti-establishment superhero
                    dedicated to destroying inter-dimensional Ghouls and
                    stopping Da Man’s fiat money empire. Several decades ago,
                    Shugga retreated from our dimension when the world closed
                    their hearts and replaced peace, love, and understanding
                    with fear, uncertainty, and doubt. Unable to penetrate the
                    hardened hearts of the people of Earth, he has instead been
                    taking the fight directly to the Ghouls in the 5 th
                    Dimension, trying to break their influence over humanity.
                    <span className="mt-11 inline-block">
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
              <div className="pl-[67px]">
                <SlideIn xOffset={-100} delayOrder={1.5} className="text-right">
                  <img src="/Shuggaverse_01.png" alt="" />
                  <Paragraph className="mt-[2px] text-buttonSmall italic text-primary">
                    Concept Sketch for upcoming project
                  </Paragraph>
                </SlideIn>
                <SlideIn xOffset={-100} delayOrder={2} className="text-right">
                  <img src="/Shuggaverse_02.png" className="mt-11" alt="" />
                  <Paragraph className="mt-[2px] text-buttonSmall italic text-primary">
                    Concept Sketch for upcoming project
                  </Paragraph>
                </SlideIn>
              </div>
            </div>
          </Section>

          <Section
            wrapperClassName="mx-auto mt-32 max-w-[872px] px-6"
            navigateID="faq"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-heading text-white">
                FAQ
              </Heading>
            </SlideIn>
            <div className="faq-container mt-[38px]">
              {faqData.map((item, index) => (
                <div className="faq-item mt-4" key={index}>
                  <FadeIn yOffset={70} delayOrder={2 + index * 0.7}>
                    <Disclosure>
                      {({ open }) => (
                        <div
                          className={`min-h-[80px] w-full cursor-pointer rounded-[20px] ${
                            open
                              ? 'bg-featureWrapperGradient2'
                              : 'bg-featureWrapperGradient'
                          } p-1 hover:bg-featureWrapperGradient2`}
                        >
                          <div className="rounded-2xl bg-black text-white">
                            {/* <div className="flex h-full w-full flex-col justify-center rounded-lg bg-featureGradient px-8 text-center hover:bg-featureGradientHover2"> */}
                            <div
                              className={`flex h-full w-full flex-col justify-center rounded-lg ${
                                open
                                  ? 'bg-featureGradientHover2'
                                  : 'bg-featureGradient'
                              } px-8 text-center hover:bg-featureGradientHover2`}
                            >
                              <Disclosure.Button className="flex min-h-[72px] w-full items-center justify-between rounded-lg focus:outline-none  ">
                                <Paragraph className="text-content font-bold text-white">
                                  Q{`${index + 1}`}
                                </Paragraph>
                                <Paragraph className="text-contentSmall font-normal text-white">
                                  {item.question}
                                </Paragraph>
                                <ArrowDown />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-8 pb-5">
                                <Paragraph className="text-contentSmall font-normal text-primary">
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
            wrapperClassName="mx-auto mt-[266px] max-w-[875px] px-6"
            navigateID="team"
          >
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-center text-heading text-white">
                Team
              </Heading>
            </SlideIn>
            <div className="team-container mt-[52px]">
              <div className="grid grid-cols-2 gap-y-[89px] gap-x-[133px] text-center">
                {teamData.map((team, index) => (
                  <div key={index}>
                    <FadeIn yOffset={70} delayOrder={2 + index * 0.5}>
                      <img
                        src={team.profileImg}
                        className="max-w-full"
                        alt=""
                      />
                      <Paragraph className="mt-7 text-content font-bold text-white">
                        {team.name}
                      </Paragraph>
                      <Paragraph className="mt-1 text-contentSmall font-semibold text-white">
                        {team.role}
                      </Paragraph>
                      <Paragraph className="mt-1 text-contentSmall font-normal text-primary">
                        {team.description}
                      </Paragraph>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section wrapperClassName="mx-auto mt-[264px] px-6 pb-16 text-center">
            <SlideIn xOffset={-100} delayOrder={1}>
              <Heading className="text-heading text-white">
                You made it this far, so you might as well...
              </Heading>
            </SlideIn>
            <FadeIn yOffset={70} delayOrder={2}>
              <Button size={ButtonSize.PRIMARY} className="mt-[73px]">
                Join Discord
              </Button>
            </FadeIn>
            <div className="mt-9 flex items-center justify-center">
              <a href="#" className="social-link">
                <FadeIn yOffset={50} delayOrder={2.5}>
                  <img src="/Icons/IDiscord.png" className="mr-2" alt="" />
                </FadeIn>
              </a>
              <a href="#" className="social-link">
                <FadeIn yOffset={50} delayOrder={3}>
                  <img src="/Icons/ITwitter.png" className="ml-2" alt="" />
                </FadeIn>
              </a>
            </div>
          </Section>
        </Section>
      </Layout>
    </div>
  )
}

export default Home
