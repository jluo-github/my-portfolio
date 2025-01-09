import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";




const HomePage = () => {
  return (
    <main className='mx-auto sm:px-6 md:px-8 gap-8 sm:gap-12 md:gap-20 flex flex-col w-full'>
      <div className='w-full h-[2px]'></div>
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};
export default HomePage;
