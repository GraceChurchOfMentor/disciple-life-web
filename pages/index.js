import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import Head from '../components/head'
import SignupForm from '../components/signupForm'
import BiblicalImperative from '../components/biblicalImperative'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import valuePropositions from '../data/valuePropositions.json'
import discussionCards from '../data/discussionCards.json'
import footerLinks from '../data/footerLinks.json'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const DynamicAppButtons = dynamic(
  () => import('../components/appButtons'),
  { ssr: false }
)

const HeroImage = () => {
  const isBreakpoint = useMediaQuery(767)

  if (isBreakpoint) {
    return (
      <div className="mb-10">
        <Image
          layout="responsive"
          width={500}
          height={500}
          className="object-left object-cover pointer-events-none"
          src="/app-showing.jpg"
          role="presentation"
          alt=""
        />
      </div>
    )
  }

  return (
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none"
      src="/app-showing.jpg"
      role="presentation"
      alt=""
    />
  )
}
const CtaImage = () => {
  const isBreakpoint = useMediaQuery(767)

  if (isBreakpoint) {
    return (
      <div className="mb-10">
        <Image
          layout="responsive"
          width={500}
          height={500 / 16 * 9}
          className="object-center object-cover pointer-events-none"
          src="/app-user.jpg"
          role="presentation"
          alt=""
        />
      </div>
    )
  }

  return (
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none"
      src="/app-user.jpg"
      role="presentation"
      alt=""
    />
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      isSignedUp: false,
      showSignupForm: false,
      showAppButtons: true
    }
  }

  handleEmailSignUp = (email) => {
    console.log(email);
  }

  render() {
    return (
      <Layout>
        <Head title="Disciple Life App" />

        <div className="flex flex-col justify-items-stretch md:h-screen relative bg-gray-900">
          <header className="siteHeader flex flex-row justify-start items-center h-16 text-white absolute md:relative z-10">
            <div className="container mx-auto px-6">
              <a className="block logo w-40" href="/">
                <img src="/disciple-life-logo-reversed-horizontal.svg" />
              </a>
            </div>
          </header>

          <HeroImage />

          <div className="absolute left-0 top-0 right-0 bg-gradient-to-b from-black to-transparent opacity-50 h-16 md:hidden"></div>
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-black opacity-50 hidden md:block z-0"></div>

          <div className="hero flex flex-col flex-grow justify-items-center pb-20 md:pt-20 font-mono relative z-10">
            <div className="container flex flex-col mx-auto px-6 flex-grow">
              <div className="grid items-stretch grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
                <div className="md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                  <p className="lead mx-auto md:mx-0 font-heading text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-white max-w-xs md:max-w-md xl:max-w-xl">
                    The Bible Study App for Disciple Makers
                  </p>
                  { this.state.showSignupForm &&
                    <SignupForm isSignedUp={this.state.isSignedUp} handleEmailSignUp={this.handleEmailSignUp} />
                  }
                  { this.state.showAppButtons &&
                    <DynamicAppButtons />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <BiblicalImperative showVideo={false} />

        <div className="appDescription relative py-20 bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-700 bg-opacity-75 text-center font-sans text-gray-200 text-xl leading-normal">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-300 opacity-25 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-10 xl:col-start-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-4 text-white">
                  21st-century Tools for First-century Living
                </h2>
                <p className="w-full md:w-3/4 lg:w-4/5 mx-auto">
                  The Bible study app designed to equip every believer to
                  lead others as they follow Christ&mdash;from new
                  birth to last breath.
                </p>
              </div>
            </div>
            <div className="valuePropositions mt-8 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-12 lg:col-start-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {
                    valuePropositions.map(item =>
                      <div key={item.title}>
                        <div className="valueProposition flex flex-row items-center my-4 font-sans text-sm">
                          <div className="icon mr-4 text-7xl text-white">
                            <FontAwesomeIcon icon={['fas', item.icon]} transform="shrink-8" mask={['fas', 'circle']} fixedWidth />
                          </div>
                          <div className="text">
                            <h3 className="font-heading text-xl">{item.title}</h3>
                            <p>{item.copy}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="discussionCards grid gap-6 grid-cols-1 sm:grid-cols-12 mt-12 text-sm text-gray-800 text-left">
              <div className="grid gap-6 grid-cols-1 sm:col-span-8 sm:col-start-3 md:grid-cols-2 md:col-span-12 md:col-start-1 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                {discussionCards.map(item => {
                  let lastItem = item.answers[item.answers.length - 1];

                  return (
                    <div className="discussionCard col-span-1 py-4 px-6 bg-white rounded-lg shadow-xl font-mono" key={item.title}>
                      <p className="mb-4 text-gray-600">{item.title}</p>
                      <h3 className="font-serif text-lg" dangerouslySetInnerHTML={{ __html: item.question }} />
                      <ul className="mt-8">
                        {item.answers.map(answerItem => {
                          let isLastItem = lastItem === answerItem;

                          return (
                            <li key={answerItem.name} className={"flex flex-row items-center border-gray-200" + (!isLastItem ? " pb-4 mb-4 border-b-2" : "")}>
                              <div className="w-12 h-12 rounded-full flex-shrink-0 mr-4" style={{
                                backgroundImage: 'url(' + answerItem.avatar + ')',
                                backgroundSize: 'cover'
                              }} />
                              <div className="truncate">
                                <div className="w-full truncate" dangerouslySetInnerHTML={{ __html: answerItem.answer }} />
                                <small className="text-gray-600">{answerItem.time}</small>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="callToAction bg-gray-200 pb-6 md:pb-16 md:pt-20 font-sans text-lg leading-normal relative">

          <CtaImage />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 lg:col-span-6">
                <h2 className="font-heading text-3xl md:text-4xl mb-4 leading-snug">
                  Start Now for Free
                </h2>
                <p className="mb-4">
                  Download the Disciple Life app now and receive your first
                  study guide, <em>Simple Christianity</em>, for free. This
                  study is designed to help you discover exactly what the Bible
                  says about God, sin, Jesus and salvation.
                </p>
                <p>
                  Use it as a self-study tool or a great introductory study for
                  a life-long discipleship relationship.
                </p>
                { this.state.showSignupForm &&
                  <SignupForm dark isSignedUp={this.state.isSignedUp} handleEmailSignUp={this.handleEmailSignUp} />
                }
                { this.state.showAppButtons &&
                  <DynamicAppButtons dark />
                }
              </div>
            </div>
          </div>
          <div className="container mt-16 mx-auto px-6 text-xs relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <p className="mr-4">
                &copy; 2021 <a href="https://gracechurchmentor.org" target="_blank">Grace Church of Mentor</a>.
              </p>
              { footerLinks.map( link => {
                return(
                  <Link key={ link.route } href={ link.route } passHref>
                    <a className="mr-4 hover:underline">
                      { link.label }
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home