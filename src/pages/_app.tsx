import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from './../redux/store'
import { createWrapper } from 'next-redux-wrapper'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(App)
