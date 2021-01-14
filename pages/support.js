import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Support - Disciple Life App</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&family=Inter:wght@200&family=Spectral:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col justify-items-stretch relative bg-gray-900">
          <header className="siteHeader flex flex-row justify-start items-center h-16 text-white absolute md:relative z-10">
            <div className="container mx-auto px-6">
              <a className="block logo w-40" href="/">
                <img src="/disciple-life-logo-reversed-horizontal.svg" />
              </a>
            </div>
          </header>
        </div>
        <div className="supportPage container my-12 mx-auto px-6">
          <h1 className="mb-8 font-heading text-4xl md:text-5xl xl:text-6xl">Support</h1>
          <p>
            For all app issues, please fill out our support form.
          </p>
          <p>
            <a
              href="https://airtable.com/shrsS7iLVffHzu5UX"
              className="block md:inline-block py-2 px-6 rounded font-sans border border-gray-900 bg-gray-900 text-center text-white hover:bg-transparent hover:text-gray-900 transition duration-200"
            >
              Get Support
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default Support