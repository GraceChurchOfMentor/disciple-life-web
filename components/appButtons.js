import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AppButtons(props) {
  const buttonClass = props.dark ? 'flexIconButtonDarkOutline' : 'flexIconButtonOutline'

  return (
    <div className="appButtons flex flex-col md:flex-row mt-6 justify-start items-center">
      <a className={`flexIconButton ${buttonClass} mb-6 md:mb-0 md:mr-6 w-full sm:w-3/4 md:w-auto`} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={['fab', 'apple']} />
        </div>
        <div className="words">
          <small>Download on the</small>
            App Store
        </div>
      </a>
      <a className={`flexIconButton ${buttonClass} w-full sm:w-3/4 md:w-auto`} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={['fab', 'google-play']} />
        </div>
        <div className="words">
          <small>Get It on</small>
            Google Play
        </div>
      </a>
    </div>
  )
}