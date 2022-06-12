import '../styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </CookiesProvider>
  );
}

export default MyApp;
