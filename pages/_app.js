import { GlobalStyle } from "../styles/GlobalStyle"
import { app, db } from "../lib/firebaseConfig";
import { AuthProvider } from "../lib/firebaseAuth";
import store from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <AuthProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default MyApp
