import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarDemo from "@/components/Navbar";
import Work from "@/components/Work";

const Home = () => {
  return (
    <>
      <NavbarDemo />
      <main className="space-y-40">
        <Hero />
        <About />
        <Work />
        <Footer />
      </main>
    </>
  );
};

export default Home;
