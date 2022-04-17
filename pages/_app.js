import { GlobalStyle } from "../styles/GlobalStyle"
import { app, db } from "../lib/firebaseConfig";
import { AuthProvider } from "../lib/firebaseAuth";
import store from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReduxProvider store={store}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ReduxProvider>
    </>
  );
}

export default MyApp
