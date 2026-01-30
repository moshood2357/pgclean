import About from "@/components/About";
import AboutUs from "@/components/why-choose-us";
import { BeforeAfter } from "@/components/Before-after";
import { FAQ } from "@/components/faq";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// 

export default function Home() {
  return (
    <div className="">
      <Heading />
      <Hero />
      <About />
      <AboutUs />
      <Services />
      <BeforeAfter />
      <FAQ />
      <Footer />
    </div>
  );
}
