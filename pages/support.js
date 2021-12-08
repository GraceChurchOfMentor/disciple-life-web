import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header'

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
        <Head title="Support - Disciple Life App" />

        <div className="contentPage supportPage container my-12 mx-auto px-6">
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