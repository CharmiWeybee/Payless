import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/customStyles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from 'react-redux'
import  {store}  from '../redux/store';

config.autoAddCss = false


  function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}
export default App;
 