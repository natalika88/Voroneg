import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Place } from "@/components/sections/Place";
import { Program } from "@/components/sections/Program";
import { ForWhom } from "@/components/sections/ForWhom";
import { Benefits } from "@/components/sections/Benefits";
import { Approach } from "@/components/sections/Approach";
import { Guide } from "@/components/sections/Guide";
import { Organization } from "@/components/sections/Organization";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Place />
        <Program />
        <ForWhom />
        <Benefits />
        <Approach />
        <Guide />
        <Organization />
        <RegistrationForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
