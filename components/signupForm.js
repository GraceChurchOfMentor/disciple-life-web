import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomForm = ({ status, message, onValidated, dark, emailAddress, handleEmailAddressChange, hasValidEmail, isButtonDisabled }) => {
  const textClasses = dark ? 'text-gray-900' : 'text-white'
  const inputClasses = dark ? 'border-gray-900 text-gray-900 placeholder-gray-900' : 'border-white text-white placeholder-white'
  const buttonClasses = dark ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white disabled:text-gray-900' : 'border-white text-white hover:bg-white hover:text-gray-900 disabled:text-white'

  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="signupForm mt-4">
      <p className={`text-mono text-xl ${textClasses}`}>Sign up for our mailing list and be the first to know when the Disciple Life app is available.</p>
      <div className="flex flex-col md:flex-row mt-6 justify-start items-center">
        <input
          className={`mb-6 md:mb-0 md:mr-6 w-full md:w-1/2 py-2 px-2 border-b bg-transparent focus:outline-none font-mono transition duration-200 ${inputClasses}`}
          type="text"
          placeholder="Email Address"
          aria-label="Email Address"
          ref={node => (email = node)}
          value={emailAddress}
          onChange={handleEmailAddressChange}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              submit()
            }
          }}
        />
        <button
          className={`py-2 px-6 border rounded transition duration-200 ${buttonClasses} disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed`}
          disabled={(status === "success") || ( ! hasValidEmail())}
          onClick={submit}
        >
          Sign Up
        </button>
      </div>
      <div className={`relative mt-4 text-xs ${textClasses}`} style={{minHeight: '4em'}}>
        <div className="absolute left-0 right-0 top-0 flex flex-row items-center">
          {status === "sending" && (
            <FontAwesomeIcon icon="spinner" pulse />
          )}
          {status === "error" && (
            <>
              <FontAwesomeIcon icon="times-circle" />
              <div className="ml-4" dangerouslySetInnerHTML={{ __html: message }} />
            </>
          )}
          {status === "success" && (
            <>
              <FontAwesomeIcon icon="check-circle" />
              <div className="ml-4" dangerouslySetInnerHTML={{ __html: message }} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      emailAddress: '',
    }
  }

  handleEmailAddressChange = e => {
    this.setState({
      emailAddress: e.target.value
    })
  }

  hasValidEmail = () => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(this.state.emailAddress)) return true
    return false
  }

  isButtonDisabled = () => {
    if ( ! this.hasValidEmail()) return true
    return false
  }

  render() {
    const url = "https://gracechurchmentor.us4.list-manage.com/subscribe/post?u=aade4b5b6b089e9f557f8cb13&amp;id=416491c36e"
    const dark = this.props.dark

    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            dark={dark}
            emailAddress={this.state.emailAddress}
            handleEmailAddressChange={this.handleEmailAddressChange}
            hasValidEmail={this.hasValidEmail}
            isButtonDisabled={this.isButtonDisabled}
          />
        )}
      />
    )
  }
  /*

  componentDidMount() {
  }

  render() {
    const textClasses = this.props.dark ? 'text-gray-900' : 'text-white'
    const inputClasses = this.props.dark ? 'border-gray-900 text-gray-900 placeholder-gray-900' : 'border-white text-white placeholder-white'
    const buttonClasses = this.props.dark ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white disabled:text-gray-900' : 'border-white text-white hover:bg-white hover:text-gray-900 disabled:text-white'

    return (
      <div className="signupForm mt-4">
        <p className={`text-mono text-xl ${textClasses}`}>Sign up for our mailing list and be the first to know when the Disciple Life app is available.</p>
        <MailchimpSubscribe url={mailChimpUrl}/>
        <div className="flex flex-col md:flex-row mt-6 justify-start items-center">
          <input className={`mb-6 md:mb-0 md:mr-6 w-full md:w-1/2 py-2 px-2 border-b bg-transparent focus:outline-none font-mono transition duration-200 ${inputClasses}`} type="text" placeholder="Email Address" value={this.state.emailAddress} onChange={this.handleEmailAddressChange} aria-label="Email Address" />
          <button className={`py-2 px-6 border rounded font-sans transition duration-200 ${buttonClasses} disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed`} disabled={this.isButtonDisabled()} onClick={() => this.props.handleEmailSignUp(this.state.emailAddress)}>Sign Up</button>
        </div>
      </div>
    )
  }
  */
}

export default SignupForm
