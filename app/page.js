import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 ">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <Achievements />
        <AboutSection />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
