import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img5.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Contact"
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

export default Contact;
