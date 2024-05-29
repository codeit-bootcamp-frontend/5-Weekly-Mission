import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

function App({
  children,
  headerFixed,
  foot,
}: {
  children: ReactNode;
  headerFixed: boolean;
  foot?: (node?: Element | null | undefined) => void;
}) {
  return (
    <>
      <Header fixed={headerFixed} />
      {children}
      <Footer observer={foot} />
    </>
  );
}

export default App;
