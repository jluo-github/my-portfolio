import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const HomePage = () => {
  return (
    <main className=' flex min-h-screen max-w-screen-2xl flex-col w-full mx-auto py-4'>
      <Navbar />
      <div className='mx-auto mt-20 px-4 sm:px-6 md:px-8 gap-8 sm:gap-12 md:gap-20 flex flex-col'>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};
export default HomePage;
