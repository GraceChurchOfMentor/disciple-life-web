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

        <div className="supportPage container my-12 mx-auto px-6">
          <a
            href="https://airtable.com/shrsS7iLVffHzu5UX"
            className="underline"
          >
            Click here to go to the support form.
          </a>
        </div>
      </Layout>
    )
  }
}

export default Support