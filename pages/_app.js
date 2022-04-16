import { GlobalStyle } from "../styles/GlobalStyle"
import { app, db} from "../lib/firebaseConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp
