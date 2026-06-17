import Navbar from '../components/Navbar';
import {
  Hero,
  About,
  Experiences,
  SignatureLocations,
  Gallery,
  WhyChoose,
  Statistics,
  ForCreators,
  Testimonials,
  Location,
  FinalCTA,
  Footer,
} from '../components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <SignatureLocations />
        <Gallery />
        <WhyChoose />
        <Statistics />
        <ForCreators />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}