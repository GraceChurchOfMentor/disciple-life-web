import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import AppButtons from '../components/appButtons'
import SignupForm from '../components/signupForm'
import BiblicalImperative from '../components/biblicalImperative'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import valuePropositions from '../data/valuePropositions.json'
import discussionCards from '../data/discussionCards.json'

class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      isSignedUp: false,
      showSignupForm: true,
      showAppButtons: false
    }
  }

  handleEmailSignUp = (email) => {
    console.log(email);
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Privacy Policy - Disciple Life App</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&family=Inter:wght@200&family=Spectral:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/*
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

          <div className="hero flex flex-col flex-grow justify-items-center pb-20 md:pt-20 font-mono relative z-10">
            <div className="container flex flex-col mx-auto px-6 flex-grow">
              <div className="grid items-stretch grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
                <div className="md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                  <p className="lead mx-auto md:mx-0 font-heading text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-white max-w-xs md:max-w-md xl:max-w-xl">
                    The Bible Study App for Disciple Makers
                  </p>
                  {this.state.showSignupForm &&
                    <SignupForm isSignedUp={this.state.isSignedUp} handleEmailSignUp={this.handleEmailSignUp} />
                  }
                  {this.state.showAppButtons &&
                    <AppButtons />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <BiblicalImperative showVideo={false} />

        <div className="appDescription relative py-20 bg-gradient-to-tr from-yellow-500 via-red-600 to-yellow-700 bg-opacity-75 text-center font-mono text-gray-200 text-xl leading-normal">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-300 opacity-25 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-10 xl:col-start-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-4 text-white">
                  21st-century Tools for First-century Living
                </h2>
                <p className="w-full md:w-3/4 lg:w-4/5 mx-auto">
                  The first Bible study app designed to equip every believer to
                  lead others as they follow Christ&mdash;&mdash;from new birth
                  to last breath.
                </p>
              </div>
            </div>
            <div className="valuePropositions mt-8 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-12 lg:col-start-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {
                    valuePropositions.map(item =>
                      <div key={item.title}>
                        <div className="valueProposition flex flex-row items-center my-4 font-mono text-xs">
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
                    <div className="discussionCard col-span-1 py-4 px-6 bg-white rounded-lg shadow-xl" key={item.title}>
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

        <div className="callToAction bg-gray-200 pb-20 md:pt-20 font-mono text-base leading-normal relative">
          <div className="backgroundImage relative md:absolute left-0 top-0 right-0 bottom-0 mb-10 md:mb-0 pt-3/4 md:pt-0" style={{
            backgroundImage: 'url(/app-user.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right 20%',
          }}></div>
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
                {this.state.showSignupForm &&
                  <SignupForm dark isSignedUp={this.state.isSignedUp} handleEmailSignUp={this.handleEmailSignUp} />
                }
                {this.state.showAppButtons &&
                  <AppButtons dark />
                }
              </div>
            </div>
          </div>
        </div>
        */}

        <div className="privacyPolicy container my-12 mx-auto px-6">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 12, 2021</p>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.</p>
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h2>Definitions</h2>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
            </li>
            <li>
              <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
            </li>
            <li>
              <p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Disciple Life</p>
            </li>
            <li>
              <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Grace Church of Mentor, 6883 Reynolds Road, Mentor, Ohio 44060.</p>
            </li>
            <li>
              <p><strong>Country</strong> refers to: Ohio,  United States</p>
            </li>
            <li>
              <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
            </li>
            <li>
              <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
            </li>
            <li>
              <p><strong>Service</strong> refers to the Application.</p>
            </li>
            <li>
              <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
            </li>
            <li>
              <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
            </li>
            <li>
              <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
            </li>
            <li>
              <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
            </li>
          </ul>
          <h1>Collecting and Using Your Personal Data</h1>
          <h2>Types of Data Collected</h2>
          <h3>Personal Data</h3>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
          <ul>
            <li>
              <p>Email address</p>
            </li>
            <li>
              <p>First name and last name</p>
            </li>
            <li>
              <p>Usage Data</p>
            </li>
          </ul>
          <h3>Usage Data</h3>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
          <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
          <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
          <h3>Information Collected while Using the Application</h3>
          <p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
          <ul>
            <li>Pictures and other information from your Device's camera and photo library</li>
          </ul>
          <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
          <p>You can enable or disable access to this information at any time, through Your Device settings.</p>
          <h2>Use of Your Personal Data</h2>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul>
            <li>
              <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
            </li>
            <li>
              <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
            </li>
            <li>
              <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
            </li>
            <li>
              <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
            </li>
            <li>
              <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
            </li>
            <li>
              <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
            </li>
            <li>
              <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
            </li>
            <li>
              <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
            </li>
          </ul>
          <p>We may share Your personal information in the following situations:</p>
          <ul>
            <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
            <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
            <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
            <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
            <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
            <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
          </ul>
          <h2>Retention of Your Personal Data</h2>
          <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
          <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
          <h2>Transfer of Your Personal Data</h2>
          <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
          <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
          <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
          <h2>Disclosure of Your Personal Data</h2>
          <h3>Business Transactions</h3>
          <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
          <h3>Law enforcement</h3>
          <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
          <h3>Other legal requirements</h3>
          <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of Users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
          <h2>Security of Your Personal Data</h2>
          <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
          <h1>Links to Other Websites</h1>
          <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
          <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          <h1>Changes to this Privacy Policy</h1>
          <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
          <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h1>Contact Us</h1>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <ul>
            <li>
              <p>By email: info@gracechurchmentor.org</p>
            </li>
            <li>
              <p>By visiting this page on our website: <a href="https://disciplelife.app/support" rel="external nofollow noopener" target="_blank">https://disciplelife.app/support</a></p>
            </li>
            <li>
              <p>By phone number: 440-255-7045</p>
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default Privacy
