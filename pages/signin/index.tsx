import { useAuthGuard } from "@/shared/model/useAuthGuard";
import {
  Header,
  PagePadding,
  SigninForm,
  SocialSigninForm,
} from "@/widgets/signin";

const Home = () => {
  useAuthGuard();

  return (
    <PagePadding>
      <Header />
      <SigninForm />
      <SocialSigninForm />
    </PagePadding>
  );
};

export default Home;
