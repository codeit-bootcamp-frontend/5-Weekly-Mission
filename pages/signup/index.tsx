import { PagePadding } from "@/widgets/signin";

import { Header, SignupForm } from "@/widgets/signup";
import React from "react";

const Home = () => {
  return (
    <>
      <PagePadding>
        <Header />
        <SignupForm />
      </PagePadding>
    </>
  );
};

export default Home;
