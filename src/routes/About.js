import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="About"
        text=""
        url="/"
        btnText="Travel Plan"
        btnClass="hide"
        heroImg={AboutImg}
      />
      <Footer />
    </>
  );
}

export default About;
