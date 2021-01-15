import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AppButtons(props) {
  const buttonClass = props.dark ? 'border border-gray-900 bg-none text-gray-900 hover:bg-gray-900 hover:text-white' : 'border border-white bg-none text-white hover:bg-white hover:text-gray-900'

  return (
    <div className="appButtons flex flex-col md:flex-row mt-6 justify-start items-center text-base">
      <a
        href="https://apps.apple.com/us/app/disciple-life/id1536440497"
        className={`button flex flex-row justify-center items-center py-2 px-6 rounded font-sans transition duration-200 ${buttonClass} mb-6 md:mb-0 md:mr-6 w-full sm:w-3/4 md:w-auto`}
      >
        <div className="icon text-2xl mr-4">
          <FontAwesomeIcon icon={['fab', 'apple']} />
        </div>
        <div className="words leading-snug">
          <small className="block text-xs leading-none">Download on the</small>
            App Store
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.gcm.foundations"
        className={`button flex flex-row justify-center items-center py-2 px-6 rounded font-sans transition duration-200 ${buttonClass} w-full sm:w-3/4 md:w-auto`}
      >
        <div className="icon text-2xl mr-4">
          <FontAwesomeIcon icon={['fab', 'google-play']} />
        </div>
        <div className="words leading-snug">
          <small className="block text-xs leading-none">Get It on</small>
            Google Play
        </div>
      </a>
    </div>
  )
}
/*
  .flexIconButtonDark {
    @apply border border-gray-900 bg-gray-900 text-white transition duration-200;

    &:hover, &:focus {
      @apply border border-white bg-white text-gray-900;
    }
  }
  .flexIconButtonDarkOutline {
    @apply border border-gray-900 bg-none text-gray-900 transition duration-200;

    &:hover, &:focus {
      @apply border border-gray-900 bg-gray-900 text-white;
    }
  }
  .flexIconButtonOutline {
    @apply border border-white bg-none text-white transition duration-200;

    &:hover, &:focus {
      @apply border border-white bg-white text-gray-900;
    }
  }
*/