import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FsLightbox from 'fslightbox-react'
import Image from 'next/image'

export default function biblicalImperative(props) {
  const [toggler, setToggler] = useState(false);
  const videoBackgroundStyle = {
    backgroundImage: 'url(/app-video-placeholder.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <>
      <div className="biblicalImperative py-20 font-sans text-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:order-2 lg:col-span-6 lg:col-start-7 mb-8 lg:mb-0">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                More than Content. Connection.
              </h2>
              <p>
                Plenty of study apps offer quality content, but they are
                designed for studying solo. The Disciple Life app connects
                people with people, building relationships centered around
                God's Word.
              </p>
              {/*
              <p className="bibleVerse italic">
                The things which you have heard from me&hellip;entrust these
                to faithful men who will be able to teach others also.

                <cite className="block mt-4 font-mono not-italic text-xl text-gray-600 text-right">&ndash; 2 Timothy 2:2</cite>
              </p>
              */}
            </div>
            <div className="lg:order-1 lg:col-span-5 content-center">
              { ! props.showVideo &&
                <Image layout="responsive" width={400} height={400 / 16 * 9} alt="" role="presentation" src="/app-video-placeholder.jpg" />
              }
              { props.showVideo &&
                <div
                  className="video responsiveVideoWidescreen shadow-xl bg-gray-700 text-white"
                  style={videoBackgroundStyle}
                  onClick={e => {
                    e.preventDefault();
                    setToggler(!toggler)
                  }}
                >
                  <a className="absolute left-0 top-0 right-0 bottom-0 flex flex-row justify-center items-center text-6xl bg-gray-700 bg-opacity-25 hover:bg-transparent text-gray-300 hover:text-white transition duration-200" href="#">
                    <FontAwesomeIcon icon="play-circle" transform="grow-8" />
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      { props.showVideo &&
        <FsLightbox toggler={toggler} sources={[
          <iframe src="https://player.vimeo.com/video/477581887" width="1920" height="1080" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        ]} />
      }
    </>
  )
}