import QueryProvider from "@/ui/providers/queryProvider";
import "./global.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
