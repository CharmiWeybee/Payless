import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/customStyles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from 'react-redux'
import  {store}  from '../redux/store';
import Head from "next/head";
import Script from 'next/script'

config.autoAddCss = false


  function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></script>
  </Head>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>
  )
}
export default App;
 