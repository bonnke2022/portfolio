import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarDemo from "@/components/Navbar";
import Work from "@/components/Work";

const Home = () => {
  return (
    <main className="">
      <NavbarDemo />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
