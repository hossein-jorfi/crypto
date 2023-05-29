import 'bootstrap/dist/css/bootstrap.rtl.css'
import '../styles/global.css'
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
}