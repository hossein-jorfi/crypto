import 'bootstrap/dist/css/bootstrap.rtl.css'
import '../styles/global.css'
import { Roboto } from 'next/font/google';
import Layout from '@/components/templates/Layout';
import { useEffect } from 'react';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <main className={roboto.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
}