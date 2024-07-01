import {
  Footer,
  Header,
  MainSection,
  ManagedSection,
  SaveSection,
  SearchedSection,
  SharedSection,
} from "@/widgets/home";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <SaveSection />
      <ManagedSection />
      <SharedSection />
      <SearchedSection />
      <Footer />
    </>
  );
}
