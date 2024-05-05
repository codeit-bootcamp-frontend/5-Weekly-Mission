import { useGetUser } from "./data-access/useGetUser";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export const Layout = function ({ children, position, footerRef }) {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Navigation profile={profile} position={position} />
      {children}
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
