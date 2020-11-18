import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import valuePropositions from '../data/valuePropositions.json'
import discussionCards from '../data/discussionCards.json'
import FsLightbox from 'fslightbox-react'

export default function Home() {
  const [toggler, setToggler] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Disciple Life App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&family=Inter:wght@200&family=Spectral:ital,wght@0,200;1,200&display=swap" rel="stylesheet" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-items-stretch md:h-screen relative bg-gray-900">
        <header className="siteHeader flex flex-row justify-start items-center h-16 text-white absolute md:relative z-10">
          <div className="container mx-auto px-6">
            <a className="block logo w-40" href="/">
              <img src="/disciple-life-logo-reversed-horizontal.svg" />
            </a>
          </div>
        </header>

        <div className="backgroundImage relative md:absolute top-0 left-0 bottom-0 right-0 mb-10 md:mb-0 pt-3/4 md:pt-0 z-0" style={{
          backgroundImage: 'url(/app-showing.jpg)',
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
        }} />

        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black opacity-50 hidden md:block z-0"></div>

        <div className="hero flex flex-col flex-grow justify-items-center pb-20 md:pt-20 relative z-10">
          <div className="container flex flex-col mx-auto px-6 flex-grow">
            <div className="grid items-stretch grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
              <div className="md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                <p className="lead font-serif text-4xl md:text-5xl text-center md:text-left text-white">
                  The Bible Study App for Disciple Makers
                </p>
                <div className="appButtons flex flex-col md:flex-row mt-6 justify-start items-center">
                  <a className="flexIconButton flexIconButtonOutline mb-4 md:mb-0 md:mr-4 w-full sm:w-3/4 md:w-auto" href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={[ 'fab', 'apple' ]} />
                    </div>
                    <div className="words">
                      <small>Download on the</small>
                      App Store
                    </div>
                  </a>
                  <a className="flexIconButton flexIconButtonOutline w-full sm:w-3/4 md:w-auto" href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={[ 'fab', 'google-play' ]} />
                    </div>
                    <div className="words">
                      <small>Get It on</small>
                      Google Play
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="biblicalImperative py-20 font-serif text-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:order-2 lg:col-span-6 lg:col-start-7 mb-8 lg:mb-0">
              <p className="bibleVerse italic">
                The things which you have heard from me&hellip;entrust these
                to faithful men who will be able to teach others also.

                <cite className="block mt-4 not-italic text-right">&ndash; 2 Timothy 2:2</cite>
              </p>
            </div>
            <div className="lg:order-1 lg:col-span-5 content-center">
              <div className="video responsiveVideoWidescreen shadow-xl bg-gray-700 text-white" style={{
                backgroundImage: 'url(/app-video-placeholder.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} onClick={e => {
                e.preventDefault();
                setToggler(!toggler)}
              }>
                <a className="absolute left-0 top-0 right-0 bottom-0 flex flex-row justify-center items-center text-6xl bg-gray-700 bg-opacity-25 hover:bg-transparent" href="#">
                  <FontAwesomeIcon icon="play-circle" transform="grow-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler} sources={[
        <iframe src="https://player.vimeo.com/video/477581887" width="1920" height="1080" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      ]} /> 
      <div className="appDescription py-20 bg-gradient-to-br from-green-400 to-blue-700 text-center font-mono text-gray-300 text-xl leading-normal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-10 xl:col-start-2">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white leading-snug">
                21st-century Tools for First-century Living
              </h2>
              <p className="w-full md:w-3/4 lg:w-4/5 mx-auto">
                The first Bible study app designed to equip every believer to
                lead others as they follow Christ&mdash;&mdash;from new birth
                to last breath.
              </p>
            </div>
          </div>
          <div className="discussionCards grid gap-6 grid-cols-1 sm:grid-cols-12 mt-20 text-sm text-gray-800 text-left">
            <div className="grid gap-6 grid-cols-1 sm:col-span-8 sm:col-start-3 md:grid-cols-2 md:col-span-12 md:col-start-1 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
              {discussionCards.map( item => {
                let lastItem = item.answers[item.answers.length - 1];

                return (
                  <div className="discussionCard col-span-1 py-4 px-6 bg-white rounded-lg shadow-xl" key={item.title}>
                    <p className="mb-4 text-gray-600">{item.title}</p>
                    <h3 className="font-serif text-lg" dangerouslySetInnerHTML={{__html: item.question}} />
                    <ul className="mt-8">
                      {item.answers.map( answerItem => {
                        let isLastItem = lastItem === answerItem;

                        return (
                          <li key={answerItem.name} className={"flex flex-row items-center border-gray-200" + ( ! isLastItem ? " pb-4 mb-4 border-b-2" : "" ) }>
                            <div className="w-12 h-12 rounded-full flex-shrink-0 mr-4" style={{
                              backgroundImage: 'url(' + answerItem.avatar + ')',
                              backgroundSize: 'cover'
                            }} />
                            <div className="truncate">
                              <div className="w-full truncate" dangerouslySetInnerHTML={{__html: answerItem.answer}} />
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

      <div className="valuePropositions py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              valuePropositions.map( item =>
                <div key={item.title}>
                  <div className="valueProposition flex flex-row items-center my-4 font-mono text-xs">
                    <div className="icon mr-4 text-6xl text-blue-800">
                      <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon="circle" transform="grow-4" />
                        <FontAwesomeIcon icon={[ 'fas', item.icon ]} inverse transform="shrink-6" />
                      </span>
                    </div>
                    <div className="text">
                      <h3 className="font-serif text-xl">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="callToAction bg-gray-200 pb-20 md:pt-20 font-mono text-base leading-normal relative">
        <div className="backgroundImage relative md:absolute left-0 top-0 right-0 bottom-0 mb-10 md:mb-0 pt-3/4 md:pt-0" style={{
          backgroundImage: 'url(/app-user.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right 20%',
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 lg:col-span-6">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-snug">
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
              <div className="appButtons flex flex-col md:flex-row mt-6 justify-start items-center">
                <a className="flexIconButton flexIconButtonDarkOutline mb-4 md:mb-0 md:mr-4 w-full sm:w-3/4 md:w-auto" href="#">
                  <div className="icon">
                    <FontAwesomeIcon icon={[ 'fab', 'apple' ]} />
                  </div>
                  <div className="words">
                    <small>Download on the</small>
                    App Store
                  </div>
                </a>
                <a className="flexIconButton flexIconButtonDarkOutline w-full sm:w-3/4 md:w-auto" href="#">
                  <div className="icon">
                    <FontAwesomeIcon icon={[ 'fab', 'google-play' ]} />
                  </div>
                  <div className="words">
                    <small>Get It on</small>
                    Google Play
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
