import React from 'react'
import Layout from '../components/layout'

const Faqs = [
  {
    question: "What languages are available?",
    answer: "The app is currently available in English and Spanish. More languages will be added in the future."
  },
  {
    question: "How do I change languages?",
    answer: "The app language is controlled by your phone’s system language settings. Due to app store guidelines, we are unable to override this setting. Note that your preferred Bible version is independent of this setting."
  },
  {
    question: "Which Bible translations are available?",
    answer: (
      <ul>
        <li>English Standard Version</li>
        <li>New American Standard Bible</li>
        <li>King James Version</li>
        <li>Reina Valera 1909</li>
      </ul>
    )
  },
  {
    question: "Can I share a study with someone using a different language?",
    answer: "Due to technical limitations, multi-language studies are currently unsupported. You can temporarily switch your phone’s system language to join a study in another language."
  },
  {
    question: "I switched my phone’s language. Where are my studies?",
    answer: "The app only displays studies you joined or created in the current language. While studies in other languages may be hidden, they are not gone; you can view them again by switching your phone’s system language back."
  },
]


function Faq() {
  return (
    <Layout>
      <div className="contentPage faq container my-12 mx-auto px-6">
        <h1>Frequently Asked Questions</h1>
        <dl className="pl-0">
          {Faqs.map((item, i) => {
            return (
              <React.Fragment key={item, i}>
                <dt className="mt-12 mb-4 text-xl">{item.question}</dt>
                <dd>{item.answer}</dd>
              </React.Fragment>
            )
          })}
        </dl>
      </div>
    </Layout>
  )
}

export default Faq