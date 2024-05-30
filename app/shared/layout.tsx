import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/reset.css';
import '@/styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function SharedPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
}
