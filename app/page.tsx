import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const HomePage = () => {
  return (
    <main className=' '>
      <Navbar />
      <div className='mx-auto mt-30 px-4 sm:px-6 md:px-8 gap-8 sm:gap-12 md:gap-20 flex flex-col w-full'>
        <div className='w-full h-[10px]'></div>
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
