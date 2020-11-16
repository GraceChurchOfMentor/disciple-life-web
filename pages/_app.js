import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add( fab, fas )

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
