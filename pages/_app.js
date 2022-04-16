import { GlobalStyle } from "../styles/GlobalStyle"
import { app, db } from "../lib/firebaseConfig";
import { AuthProvider } from "../lib/firebaseAuth";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );

}

export default MyApp
