import {
  Header,
  Profile,
  About,
  Stack,
  Experience,
  Projects,
  Contact,
  Footer,
  SectionDivider,
} from "@/components/portfolio"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <SectionDivider variant="line" />
        <About />
        <SectionDivider variant="dots" />
        <Stack />
        <SectionDivider variant="line" />
        <Experience />
        <SectionDivider variant="dots" />
        <Projects />
        <SectionDivider variant="line" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
