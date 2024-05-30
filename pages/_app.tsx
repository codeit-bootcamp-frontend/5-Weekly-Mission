import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const isAuthPage = Component.name === 'SignIn' || Component.name === 'SignUp';

  return (
    <AuthProvider>
      <>
        {isAuthPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </>
    </AuthProvider>
  );
}
